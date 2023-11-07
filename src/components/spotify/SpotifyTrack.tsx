import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { AutoScrollText } from "./AutoScrollText";

export const SpotifyTrack: React.FC<any> = ({
  artist,
  title,
  songUrl,
  albumImageUrl,
  metadata,
}) => {
  return (
    <Flex as="a" href={songUrl} target="_blank" className="linkify">
      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem colSpan={{ base: 1 }} my="auto">
          <Image
            src={albumImageUrl ? albumImageUrl : "/placeholder.png"}
            alt="album art"
            width={{ base: "70%", md: "80%" }}
            mx="auto"
            className="album-art"
          />
        </GridItem>
        <GridItem colSpan={{ base: 3 }} my="auto" px={[0, 4]}>
          {artist && title ? (
            <>
              <AutoScrollText text={title} />
              <Text variant="darker" px={2} style={{ textDecoration: "none" }}>
                {artist}
              </Text>
              <Text variant="darker" px={2} fontSize={["0.7rem", "0.9rem"]}>
                {metadata}
              </Text>
            </>
          ) : (
            <>
              <Box
                width="130px"
                height="1.2rem"
                bg="tertiary"
                mb={2}
                opacity={0.5}
                borderRadius="4px"
              />
              <Box
                width="100px"
                height={["0.9rem", "1.1rem"]}
                bg="tertiary"
                mb={2}
                opacity={0.5}
                borderRadius="4px"
              />
            </>
          )}
        </GridItem>
      </Grid>
    </Flex>
  );
};
