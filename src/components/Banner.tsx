import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/Avatar";
import { BlobLinks } from "./BlobLinks";
import { LinkIcon } from "./svg/LinkIcon";

export const Banner: React.FC<any> = () => {
  return (
    <>
      <Grid
        templateColumns="repeat(4, 1fr)"
        mb={[5, 10]}
        className="banner"
        gap={4}
      >
        <GridItem colSpan={{ base: 4, md: 3 }}>
          <Heading variant="name" mb={[-1, 0]}>
            Max Henry Fung
          </Heading>
          <Text>Software Engineer and Web Designer</Text>
          <Text variant="darker">Los Angeles, California</Text>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1 }} rowSpan={{ base: 1, md: 2 }}>
          <Avatar />
        </GridItem>
        <GridItem
          minH="70px"
          colSpan={{ base: 3, md: 3 }}
          w="100%"
          position="relative"
        >
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
              <BlobLinks />
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
};
