import { Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { ArrowLink } from "../link/ArrowLink";
import { ExperienceLink } from "../link/ExperienceLink";

export const SpotifyTrack: React.FC<any> = ({
  artist,
  title,
  songUrl,
  albumImageUrl,
}) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)">
      <GridItem colSpan={{ base: 1 }}>
        <Image
          src={albumImageUrl ? albumImageUrl : "/placeholder.png"}
          alt="album art"
          width={{ base: "70%", md: "80%" }}
          borderRadius="full"
          mx="auto"
        />
      </GridItem>
      <GridItem colSpan={{ base: 3 }} my="auto">
        <ExperienceLink
          title={title}
          href={songUrl}
          mb={0}
          color={albumImageUrl ? "" : "#595959"}
        />
        <Text variant="darker">{artist}</Text>
      </GridItem>
    </Grid>
  );
};