import { Box, Grid, GridItem, HStack, Heading } from "@chakra-ui/react";
import { SpotifyTrack } from "./SpotifyTrack";
import { Waveform } from "./Waveform";

export const Spotify: React.FC<any> = ({
  nowPlaying,
  recentlyPlayed,
  songOfTheMonth,
}) => {
  const renderTrack = (track: any) => (
    <SpotifyTrack
      artist={track.artist}
      title={track.title}
      songUrl={track.songUrl}
      albumImageUrl={track.albumImageUrl}
      metadata={track.metadata}
    />
  );

  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <HStack alignItems="start" mb={[3, 8]}>
            <Heading variant="section" my="auto">
              {nowPlaying.isPlaying ? "Now Playing" : "Recently Played"}
            </Heading>
            <Waveform isPlaying={nowPlaying.isPlaying} />
          </HStack>
          {recentlyPlayed ? (
            renderTrack(nowPlaying.isPlaying ? nowPlaying : recentlyPlayed)
          ) : (
            <SpotifyTrack />
          )}
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Heading variant="section" mb={[3, 8]}>
            Song of the Month
          </Heading>
          {songOfTheMonth ? renderTrack(songOfTheMonth) : <SpotifyTrack />}
        </GridItem>
      </Grid>
    </>
  );
};
