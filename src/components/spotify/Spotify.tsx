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
import { Waveform } from "./Waveform";
import { SpotifyLogo } from "../svg/logos/Spotify";

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
          <HStack alignItems="start" mb={[4, 8]}>
            <Heading variant="subSection" my="auto">
              {nowPlaying.isPlaying ? "Now Playing" : "Recently Played"}
            </Heading>
            <Box my="auto">
              <Waveform isPlaying={nowPlaying.isPlaying} />
            </Box>
          </HStack>
          {recentlyPlayed ? (
            renderTrack(nowPlaying.isPlaying ? nowPlaying : recentlyPlayed)
          ) : (
            <SpotifyTrack />
          )}
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Heading variant="subSection" mb={[4, 8]}>
            Song of the Month
          </Heading>
          {songOfTheMonth ? renderTrack(songOfTheMonth) : <SpotifyTrack />}
        </GridItem>
      </Grid>
      <Box pt={8}>
        <Text variant="tiny">
          Here are some of my favorite records, updated live using the{" "}
          <Link
            href="https://developer.spotify.com/documentation/web-api"
            target="_blank"
            fontWeight={500}
            display="inline-flex"
            className="spotifyLink"
          >
            <Text as="span" variant="tiny" display="inline" className="text">
              Spotify Web API{" "}
            </Text>
            <SpotifyLogo
              className="icon"
              width="18px"
              display="inline"
              ml={2}
              my="auto"
            />
          </Link>
        </Text>
      </Box>
    </>
  );
};
