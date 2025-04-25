import querystring from "querystring";

// env
const client_id = process.env.SPOTIFY_CLIENT_ID || "";
const client_secret = process.env.SPOTIFY_CLIENT_SECRET || "";
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN || "";

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export interface Track {
  title: string;
  artist: string;
  songUrl: string;
  albumImageUrl: string;
  isPlaying?: boolean;
  metadata?: string;
}

export interface TrackError {
  error: string;
  isPlaying?: boolean;
}

export const getAccessToken = async (): Promise<string | null> => {
  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: querystring.stringify({
        grant_type: "refresh_token",
        refresh_token,
      }),
    });

    if (!response.ok) throw new Error("Failed to get access token");

    const { access_token } = await response.json();
    return access_token;
  } catch (error) {
    console.error("[Spotify] Failed to get access token", error);
    return null;
  }
};

const fetchSpotify = async (url: string, accessToken: string) => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    next: { revalidate: 60 },
  });

  if (
    res.status === 204 ||
    res.headers.get("content-length") === "0" ||
    res.headers.get("content-type")?.includes("text/plain")
  ) {
    return null;
  }

  try {
    return await res.json();
  } catch (err) {
    console.error("[Spotify] Failed to parse JSON", err);
    return null;
  }
};

export const getNowPlaying = async (
  accessToken: string,
): Promise<Track | TrackError> => {
  try {
    const data = await fetchSpotify(NOW_PLAYING_ENDPOINT, accessToken);

    if (!data) return { error: "Nothing currently playing", isPlaying: false };

    if (!data?.item)
      return { error: "No currently playing track", isPlaying: false };

    return {
      title: data.item.name,
      artist: data.item.artists.map((a: any) => a.name).join(", "),
      songUrl: data.item.external_urls.spotify,
      albumImageUrl: data.item.album.images?.[0]?.url || "",
      isPlaying: data.is_playing,
    };
  } catch (error) {
    console.error("[Spotify] nowPlaying failed", error);
    return { error: "Failed to fetch now playing", isPlaying: false };
  }
};

export const getRecentlyPlayed = async (
  accessToken: string,
): Promise<Track | TrackError> => {
  try {
    const data = await fetchSpotify(RECENTLY_PLAYED_ENDPOINT, accessToken);

    if (!data)
      return {
        error: "Non-JSON response while fetching recently played tracks",
      };

    const item = data.items?.[0];
    if (!item) return { error: "No recently played track found" };

    const playedAt = new Date(item.played_at);
    const metadata = `${playedAt.toLocaleDateString()} ${playedAt.toLocaleTimeString(
      "en-US",
      {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Los_Angeles",
      },
    )} in Los Angeles`;

    return {
      title: item.track.name,
      artist: item.track.artists.map((a: any) => a.name).join(", "),
      songUrl: item.track.external_urls.spotify,
      albumImageUrl: item.track.album.images?.[1]?.url || "",
      metadata,
    };
  } catch (error) {
    console.error("[Spotify] recentlyPlayed failed", error);
    return { error: "Failed to fetch recently played track" };
  }
};

export const getSongOfTheMonth = async (
  accessToken: string,
): Promise<Track | TrackError> => {
  try {
    const data = await fetchSpotify(
      `${TOP_TRACKS_ENDPOINT}?time_range=short_term&limit=1`,
      accessToken,
    );

    if (!data)
      return { error: "Non-JSON response while getting song of the month" };

    const song = data.items?.[0];
    if (!song) return { error: "No top tracks found" };

    return {
      title: song.name,
      artist: song.artists.map((a: any) => a.name).join(", "),
      songUrl: song.external_urls.spotify,
      albumImageUrl: song.album.images?.[1]?.url || "",
    };
  } catch (error) {
    console.error("[Spotify] songOfTheMonth failed", error);
    return { error: "Failed to fetch song of the month" };
  }
};
