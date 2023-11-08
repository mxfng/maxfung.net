import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
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
        <GridItem colSpan={3}>
          <Heading variant="name" mb={[-1, 0]}>
            Max Henry Fung
          </Heading>
          <Text>Software Engineer / Web Designer</Text>
          <Text>Los Angeles, California</Text>
        </GridItem>
        <GridItem colSpan={1} rowSpan={2}>
          <Center h="100%" w="100%" position="relative">
            <Avatar position="absolute" bottom="0" right="0" />
          </Center>
        </GridItem>
        <GridItem minH="20px" colSpan={3} w="100%" position="relative" py={4}>
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
