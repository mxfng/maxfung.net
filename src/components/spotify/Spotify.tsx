import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { SpotifyTrack } from "./SpotifyTrack";

export const Spotify: React.FC<any> = ({
  nowPlaying,
  recentlyPlayed,
  songOfTheMonth,
}) => {
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" px={3} gap={8}>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Heading variant="section" mb={[3, 8]}>
            {nowPlaying.isPlaying ? "Now Playing" : "Recently Played"}
          </Heading>
          {nowPlaying.isPlaying ? (
            <SpotifyTrack
              artist={nowPlaying.artist}
              title={nowPlaying.title}
              songUrl={nowPlaying.songUrl}
              albumImageUrl={nowPlaying.albumImageUrl}
            />
          ) : recentlyPlayed ? (
            <SpotifyTrack
              artist={recentlyPlayed.artist}
              title={recentlyPlayed.title}
              songUrl={recentlyPlayed.songUrl}
              albumImageUrl={recentlyPlayed.albumImageUrl}
              metadata={recentlyPlayed.metadata}
            />
          ) : (
            <SpotifyTrack />
          )}
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Heading variant="section" mb={[3, 8]}>
            Song of the Month
          </Heading>
          {songOfTheMonth ? (
            <SpotifyTrack
              artist={songOfTheMonth.artist}
              title={songOfTheMonth.title}
              songUrl={songOfTheMonth.songUrl}
              albumImageUrl={songOfTheMonth.albumImageUrl}
            />
          ) : (
            <SpotifyTrack />
          )}
        </GridItem>
      </Grid>
    </>
  );
};
