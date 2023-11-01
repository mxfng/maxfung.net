import { getNowPlaying } from "@/utils/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await getNowPlaying();

  if (res.status === 204 || res.status > 400) {
    return NextResponse.json({ isPlaying: false });
  }

  const song = await res.json();
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists
    .map((_artist: any) => _artist.name)
    .join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return NextResponse.json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
}
