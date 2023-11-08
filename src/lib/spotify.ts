import querystring from "querystring";

const client_id: string = process.env.SPOTIFY_CLIENT_ID || "";
const client_secret: string = process.env.SPOTIFY_CLIENT_SECRET || "";
const refresh_token: string = process.env.SPOTIFY_REFRESH_TOKEN || "";

const basic: string = Buffer.from(`${client_id}:${client_secret}`).toString(
  "base64"
);
const NOW_PLAYING_ENDPOINT: string = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT: string = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
const TOP_TRACKS_ENDPOINT: string = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT: string = `https://accounts.spotify.com/api/token`;

interface AccessTokenResponse {
  access_token: string;
}

interface SpotifySong {
  name: string;
  artists: { name: string }[];
  external_urls: { spotify: string };
  album: { images: { url: string }[] };
  is_playing?: boolean;
  metadata?: string;
}

interface SpotifyError {
  error: string;
  isPlaying?: boolean;
}

const getAccessToken = async (): Promise<AccessTokenResponse | null> => {
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

    if (!response.ok) {
      throw new Error("Failed to get access token");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return null; // or return an error object if needed
  }
};

const handleFetchResponse = (response: Response, origin: string) => {
  const timestamp = new Date().toISOString();
  if (!response.ok) {
    console.error(
      `${timestamp} - Fetch ERROR at ${origin}: ${response.status} - ${response.statusText}`
    );
    throw new Error(
      `${timestamp} - (Spotify API) Fetch ERROR at ${origin}: ${response.status} - ${response.statusText}`
    );
  } else {
    console.log(
      `${timestamp} - (Spotify API) Fetch SUCCESS at ${origin}: ${response.status} - ${response.body}`
    );
  }
  return response;
};

const getNowPlaying = async (): Promise<SpotifySong | SpotifyError> => {
  const accessTokenData = await getAccessToken();

  if (!accessTokenData) {
    return { isPlaying: false, error: "Failed to get access token" };
  }

  try {
    const { access_token } = accessTokenData;

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      next: { revalidate: 60 },
    });

    handleFetchResponse(response, NOW_PLAYING_ENDPOINT);

    if (response.status === 204) {
      return { error: "Empty response body", is_playing: false };
    }

    const { item } = await response.json();
    const song: SpotifySong = item;

    return {
      name: song.name,
      artists: song.artists,
      external_urls: song.external_urls,
      album: song.album,
      isPlaying: song.is_playing,
    };
  } catch (error) {
    console.error(error);
    return { isPlaying: false, error: "Failed to fetch now playing data" };
  }
};

const getRecentlyPlayed = async (): Promise<SpotifySong | SpotifyError> => {
  const accessTokenData = await getAccessToken();

  if (!accessTokenData) {
    return { error: "Failed to get access token" };
  }

  try {
    const { access_token } = accessTokenData;

    const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      next: { revalidate: 60 },
    });

    handleFetchResponse(response, RECENTLY_PLAYED_ENDPOINT);

    const { items } = await response.json();

    if (items && items.length > 0) {
      const song = items[0].track;
      const playedAt = new Date(items[0].played_at);
      const formattedDate = playedAt.toLocaleDateString();
      const formattedTime = playedAt.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Los_Angeles",
      });
      const metadata = `${formattedDate} ${formattedTime} in Los Angeles`;

      return {
        name: song.name,
        artists: song.artists,
        external_urls: song.external_urls.spotify,
        album: song.album,
        metadata: metadata,
      };
    } else {
      return { error: "No recently played songs found" };
    }
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch recently played data" };
  }
};

const getSongOfTheMonth = async (): Promise<SpotifySong | SpotifyError> => {
  const accessTokenData = await getAccessToken();

  if (!accessTokenData) {
    return { error: "Failed to get access token" };
  }

  try {
    const { access_token } = accessTokenData;

    const response = await fetch(
      `${TOP_TRACKS_ENDPOINT}?time_range=short_term&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        next: { revalidate: 3600 },
      }
    );

    handleFetchResponse(response, TOP_TRACKS_ENDPOINT);

    const { items } = await response.json();

    if (items && items.length > 0) {
      const song = items[0];

      return {
        name: song.name,
        artists: song.artists,
        external_urls: song.external_urls,
        album: song.album,
      };
    } else {
      return { error: "No top tracks found" };
    }
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch song of the month data" };
  }
};

interface Track {
  title: string;
  artist: string;
  songUrl: string;
  albumImageUrl: string;
  isPlaying?: string;
  metadata?: string;
}

interface TrackError {
  error: string;
  isPlaying?: boolean;
}

export const nowPlaying = async (): Promise<Track | TrackError> => {
  try {
    const response = await getNowPlaying();

    if ("error" in response) {
      return { error: response.error };
    }

    const song: SpotifySong = response as SpotifySong;

    return {
      title: song.name,
      artist: song.artists.map((artist) => artist.name).join(", "),
      songUrl: song.external_urls.spotify,
      albumImageUrl: song.album.images[0].url,
      isPlaying: song.is_playing ? "true" : "false",
    };
  } catch (error) {
    console.error(error);
    return { error: "An error occurred", isPlaying: false };
  }
};

export const recentlyPlayed = async (): Promise<Track | TrackError> => {
  try {
    const response = await getRecentlyPlayed();

    if ("error" in response) {
      return { error: response.error };
    }

    const song: SpotifySong = response as SpotifySong;

    return {
      title: song.name,
      artist: song.artists.map((artist) => artist.name).join(", "),
      songUrl: song.external_urls.spotify,
      albumImageUrl: song.album.images[1].url,
      metadata: song.metadata,
    };
  } catch (error) {
    console.error(error);
    return { error: "An error occurred" };
  }
};

export const songOfTheMonth = async (): Promise<Track | TrackError> => {
  try {
    const response = await getSongOfTheMonth();

    const song: SpotifySong = response as SpotifySong;

    return {
      title: song.name,
      artist: song.artists.map((artist) => artist.name).join(", "),
      songUrl: song.external_urls.spotify,
      albumImageUrl: song.album.images[1].url,
    };
  } catch (error) {
    console.error(error);
    return { error: "An error occurred" };
  }
};
