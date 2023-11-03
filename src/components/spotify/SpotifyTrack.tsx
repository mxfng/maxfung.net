import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { ExperienceLink } from "../link/ExperienceLink";

export const SpotifyTrack: React.FC<any> = ({
  artist,
  title,
  songUrl,
  albumImageUrl,
  metadata,
}) => {
  return (
    <Box
      as="a"
      __css={{
        "& .album-art": {
          transition: "0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6)",
        },
        "& .experience-link-arrow": {
          transform: "translateX(0) translateY(3px)",
          transition: "all 0.2s ease",
        },
        "& .underline-link": {
          textDecoration: "underline transparent",
          transition: "text-decoration 500ms ease",
        },
      }}
      _hover={{
        cursor: "pointer",
        "& .album-art": {
          transform: "scale(1.1)",
        },
        "& .experience-link-arrow": {
          transform: "translateX(3px)",
        },
        "& .underline-link": {
          textDecorationColor: "white",
        },
      }}
      href={songUrl}
      target="_blank"
    >
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
              <ExperienceLink title={title} href={songUrl} />
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
    </Box>
  );
};
