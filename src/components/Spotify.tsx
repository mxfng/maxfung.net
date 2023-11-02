import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { SpotifyTrack } from "./SpotifyTrack";
import { ExperienceLink } from "./link/ExperienceLink";

export const Spotify: React.FC<any> = ({ topTrack, nowPlaying }) => {
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" px={3}>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Heading variant="section" mb={[3, 8]}>
            Now Playing
          </Heading>
          {nowPlaying.isPlaying ? (
            <SpotifyTrack
              artist={nowPlaying.artist}
              title={nowPlaying.title}
              songUrl={topTrack.songUrl}
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
            artist={topTrack.artist}
            title={topTrack.title}
            songUrl={topTrack.songUrl}
            albumImageUrl={topTrack.albumImageUrl}
          />
        </GridItem>
      </Grid>
    </>
  );
};
