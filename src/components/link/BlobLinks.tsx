import { Box, Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { LinkIcon } from "../svg/LinkIcon";

interface BlobLink {
  title: string;
  url: string;
  bg: string;
  bgImage: string;
}

export const BlobLinks = ({ ...params }) => {
  const blobSize: string = " 30px";

  const blobs: BlobLink[] = [
    {
      title: "email",
      url: "mailto:maxhfung@gmail.com?subject=Hello Max",
      bg: "silver",
      bgImage:
        "radial-gradient(at 22% 85%, hsla(191,92%,67%,1) 0px, transparent 50%), radial-gradient(at 81% 61%, hsla(61,96%,66%,1) 0px, transparent 50%), radial-gradient(at 90% 3%, hsla(166,88%,70%,1) 0px, transparent 50%), radial-gradient(at 41% 78%, hsla(286,60%,73%,1) 0px, transparent 50%), radial-gradient(at 78% 94%, hsla(41,68%,60%,1) 0px, transparent 50%), radial-gradient(at 86% 34%, hsla(102,88%,70%,1) 0px, transparent 50%), radial-gradient(at 74% 99%, hsla(280,64%,67%,1) 0px, transparent 50%)",
    },
    {
      title: "github",
      url: "https://github.com/mxfng",
      bg: "rgb(4,8,12)",
      bgImage:
        "linear-gradient(to bottom, #0d0d1b, #090c18, #060b15, #040a11, #04080c)",
    },
    {
      title: "linkedin",
      url: "https://www.linkedin.com/in/maxfung/",
      bg: "#0077B5",
      bgImage:
        "linear-gradient(to left top, #008cc9, #0087c4, #0081bf, #007cba, #0077b5)",
    },
    {
      title: "IG",
      url: "https://www.instagram.com/fungkadelic/",
      bg: "#4158D0",
      bgImage:
        "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
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
          target="_blank"
          w={blobSize}
          mb={0}
          mt="auto"
          css={{
            "& .blob": {
              transition: "all 500ms ease",
              border: "1px solid var(--chakra-colors-tertiary)",
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
              bg={link.bg}
              backgroundImage={link.bgImage}
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
