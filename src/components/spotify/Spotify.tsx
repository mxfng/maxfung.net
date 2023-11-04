import {
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { SpotifyTrack } from "./SpotifyTrack";
import { Waveform } from "./Waveform";
import { SpotifyLogo } from "../svg/SpotifyLogo";

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
      <Grid templateColumns="repeat(2, 1fr)" gap={8} pb={8}>
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
      <Flex pt={2} px={3}>
        <Text variant="tiny" pb={2}>
          Here are some of my favorite records, updated live using the{" "}
          <Link
            href="https://developer.spotify.com/documentation/web-api"
            target="_blank"
            fontWeight={500}
          >
            Spotify Web API{" "}
          </Link>
        </Text>
        <Link
          href="https://developer.spotify.com/documentation/web-api"
          target="_blank"
          fontWeight={500}
        >
          <SpotifyLogo
            fill="var(--chakra-colors-primary)"
            width={["10px", "20px"]}
            display="inline-flex"
            ml={[0, 1]}
            my="auto"
          />
        </Link>
      </Flex>
    </>
  );
};
