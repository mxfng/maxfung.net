import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { BlobBar } from "./BlobBar";
import { LinkIcon } from "./svg/LinkIcon";
import { Avatar } from "./Avatar";

export const Banner: React.FC<any> = () => {
  return (
    <>
      <Grid
        templateColumns="repeat(4, 1fr)"
        mb={[5, 10]}
        className="banner"
        gap={4}
      >
        <GridItem colSpan={4}>
          <Heading variant="name" mb={[-1, 0]}>
            Max Henry Fung
          </Heading>
          <Text>Software Engineer / Web Designer</Text>
          <Text>Los Angeles, California</Text>
        </GridItem>

        <GridItem minH="20px" colSpan={4} w="100%" position="relative" py={4}>
          <Flex>
            <LinkIcon
              fill="var(--chakra-colors-primary)"
              size="18px"
              position="absolute"
              bottom="0"
              left="0"
              m={1}
            />
            <Box position="absolute" bottom="0" left="8">
              <BlobBar />
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
};
