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
          <Text mb={-1}>Software Engineer</Text>
          <Text fontWeight={300}>Los Angeles, California</Text>
        </GridItem>
        <GridItem colSpan={1} rowSpan={2}>
          <Center h="100%" w="100%" position="relative">
            <Avatar position="absolute" right="0" />
          </Center>
        </GridItem>
        <GridItem colSpan={3} w="100%">
          <Flex h="100%">
            <LinkIcon
              fill="var(--chakra-colors-primary)"
              size="18px"
              my="auto"
            />
            <BlobBar />
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
};
