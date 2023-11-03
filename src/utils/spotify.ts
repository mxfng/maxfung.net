import querystring from "querystring";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
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

  return response.json();
};

const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    next: {
      revalidate: 60,
    },
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const getRecentlyPlayed = async () => {
  const { access_token } = await getAccessToken();

  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    next: {
      revalidate: 60,
    },
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const getSongOfTheMonth = async () => {
  const { access_token } = await getAccessToken();

  return fetch(`${TOP_TRACKS_ENDPOINT}?time_range=short_term&limit=1`, {
    next: {
      revalidate: 86400,
    },
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const nowPlaying = async () => {
  const res = await getNowPlaying();

  if (res.status === 204 || res.status > 400) {
    return { isPlaying: false };
  }

  const song = await res.json();

  return {
    title: song.item.name,
    artist: song.item.artists.map((_artist: any) => _artist.name).join(", "),
    songUrl: song.item.external_urls.spotify,
    albumImageUrl: song.item.album.images[0].url,
    isPlaying: song.is_playing,
  };
};

export const recentlyPlayed = async () => {
  const res = await getRecentlyPlayed();
  const { items } = await res.json();

  if (typeof items === "undefined") {
    console.error(res.statusText);
    return { error: res.status };
  }

  const song = items[0].track;
  const playedAt = new Date(items[0].played_at);
  const formattedDate = playedAt.toLocaleDateString();
  const formattedTime = playedAt.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Los_Angeles",
  });
  const metadata = `${formattedDate} ${formattedTime} (LA)`;

  return {
    title: song.name,
    artist: song.artists.map((_artist: any) => _artist.name).join(", "),
    songUrl: song.external_urls.spotify,
    albumImageUrl: song.album.images[1].url,
    metadata: metadata,
  };
};

export const songOfTheMonth = async () => {
  const res = await getSongOfTheMonth();
  const { items } = await res.json();

  if (typeof items === "undefined") {
    console.error(res.statusText);
    return { error: res.status };
  }

  const song = items[0];

  return {
    title: song.name,
    artist: song.artists.map((_artist: any) => _artist.name).join(", "),
    songUrl: song.external_urls.spotify,
    albumImageUrl: song.album.images[1].url,
  };
};
