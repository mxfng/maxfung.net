import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { ArrowUp } from "../svg/ArrowUp";

function truncateString(str: string, maxLength: number): string {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.substring(0, maxLength - 3) + "...";
  }
}

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
        <GridItem colSpan={{ base: 3 }} my="auto" px={[0, 3]}>
          {artist && title ? (
            <>
              <Flex display="inline-flex">
                <Text variant="link" className="text" width="max-content">
                  {truncateString(title, 38)}
                </Text>
                <ArrowUp
                  stroke="var(--chakra-colors-palette-900)"
                  width="16px"
                  ml={[1, 2]}
                  my="auto"
                  className="icon"
                />
              </Flex>
              <Text variant="darker" style={{ textDecoration: "none" }}>
                {artist}
              </Text>
              <Text variant="darker" fontSize={["0.7rem", "0.9rem"]}>
                {metadata}
              </Text>
            </>
          ) : (
            <>
              <Box
                width="130px"
                height="1.2rem"
                bg="palette.300"
                mb={2}
                opacity={0.5}
                borderRadius="4px"
              />
              <Box
                width="100px"
                height={["0.9rem", "1.1rem"]}
                bg="#palette.300"
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
