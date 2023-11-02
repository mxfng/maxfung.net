import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { SpotifyTrack } from "./SpotifyTrack";

export const Spotify: React.FC<any> = ({ songOfTheMonth, nowPlaying }) => {
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" px={3} gap={8}>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Heading variant="section" mb={[3, 8]}>
            Now Playing
          </Heading>
          {nowPlaying.isPlaying ? (
            <SpotifyTrack
              artist={nowPlaying.artist}
              title={nowPlaying.title}
              songUrl={nowPlaying.songUrl}
              albumImageUrl={nowPlaying.albumImageUrl}
            />
          ) : (
            <SpotifyTrack artist="It's quiet in here..." title="Not Playing" />
          )}
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Heading variant="section" mb={[3, 8]}>
            Song of the Month
          </Heading>
          <SpotifyTrack
            artist={songOfTheMonth.artist}
            title={songOfTheMonth.title}
            songUrl={songOfTheMonth.songUrl}
            albumImageUrl={songOfTheMonth.albumImageUrl}
          />
        </GridItem>
      </Grid>
    </>
  );
};
