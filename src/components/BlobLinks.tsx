import { Box, Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";

interface BlobLink {
  title: string;
  url: string;
  color: string;
}

export const BlobLinks = ({ ...params }) => {
  const blobSize: string = " 30px";

  const blobs: BlobLink[] = [
    {
      title: "email",
      url: "/",
      color: "silver",
    },
    {
      title: "github",
      url: "/",
      color: "gray",
    },
    {
      title: "linkedin",
      url: "/",
      color: "blue",
    },
    {
      title: "IG",
      url: "/",
      color: "purple",
    },
  ];

  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      w="70%"
      h={blobSize}
      py={6}
      px={5}
      css={{
        "@media (min-width: 1000px)": {
          "& .text": {
            transform: "translateX(-100%)",
          },
        },
      }}
      gap={2}
      {...params}
    >
      {blobs.map((link) => (
        <GridItem
          key={link.title}
          as="a"
          href={link.url}
          w={blobSize}
          mb={0}
          mt="auto"
          css={{
            "& .blob": {
              transition: "all 500ms ease",
              border: "0px solid transparent",
            },
            "& .text": {
              transition: "all 500ms ease",
              color: "tertiary",
            },
          }}
          _hover={{
            "& .blob": {
              border: "3px solid var(--chakra-colors-primary)",
            },
            "& .text": {
              color: "primary",
              transform: "translateX(0%)",
            },
          }}
          transform="rotate(-55deg)"
          transformOrigin="0% 100%"
        >
          <Flex w="fit-content">
            <Box
              className="blob"
              borderRadius="full"
              bg={link.color}
              h={blobSize}
              w={blobSize}
            ></Box>
            <Box h="fit-content" overflow="hidden" my="auto">
              <Center>
                <Text
                  variant="tiny"
                  overflow="hidden"
                  pl={2}
                  color="tertiary"
                  className="text"
                >
                  {link.title}
                </Text>
              </Center>
            </Box>
          </Flex>
        </GridItem>
      ))}
    </Grid>
  );
};
