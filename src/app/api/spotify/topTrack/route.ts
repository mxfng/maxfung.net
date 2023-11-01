import { getTopTracks } from "@/utils/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await getTopTracks();
  const { items } = await res.json();

  const topTrack = items.slice(0, 1).map((track: any) => ({
    artist: track.artists.map((_artist: any) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  return NextResponse.json(topTrack);
}
