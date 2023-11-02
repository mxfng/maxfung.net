import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { ExperienceLink } from "../link/ExperienceLink";

export const SpotifyTrack: React.FC<any> = ({
  artist,
  title,
  songUrl,
  albumImageUrl,
  metadata,
}) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)">
      <GridItem colSpan={{ base: 1 }} my="auto">
        <Image
          src={albumImageUrl ? albumImageUrl : "/placeholder.png"}
          alt="album art"
          width={{ base: "70%", md: "80%" }}
          mx="auto"
        />
      </GridItem>
      <GridItem colSpan={{ base: 3 }} my="auto" px={[0, 3]}>
        {artist && title ? (
          <>
            <ExperienceLink title={title} href={songUrl} mb={0} />
            <Text variant="darker">{artist}</Text>
            <Text variant="darker" fontSize={["0.7rem", "0.9rem"]}>
              {metadata}
            </Text>
          </>
        ) : (
          <>
            <Box
              width="130px"
              height="1.2rem"
              bg="#595959"
              mb={2}
              opacity={0.5}
              borderRadius="4px"
            />
            <Box
              width="100px"
              height={["0.9rem", "1.1rem"]}
              bg="#595959"
              mb={2}
              opacity={0.5}
              borderRadius="4px"
            />
          </>
        )}
      </GridItem>
    </Grid>
  );
};
