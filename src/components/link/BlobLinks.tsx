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
        "radial-gradient(at 48% 51%, hsla(254,79%,60%,0.5) 0px, transparent 50%),radial-gradient(at 69% 89%, hsla(324,80%,61%,0.5) 0px, transparent 50%),radial-gradient(at 86% 51%, hsla(304,81%,79%,0.5) 0px, transparent 50%),radial-gradient(at 59% 31%, hsla(70,81%,68%,0.5) 0px, transparent 50%),radial-gradient(at 68% 45%, hsla(84,92%,76%,0.5) 0px, transparent 50%),radial-gradient(at 45% 36%, hsla(38,85%,64%,0.5) 0px, transparent 50%),radial-gradient(at 40% 56%, hsla(224,93%,79%,0.5) 0px, transparent 50%)",
    },
    {
      title: "linkedin",
      url: "https://www.linkedin.com/in/maxfung/",
      bg: "#0077B5",
      bgImage:
        "radial-gradient(at 98% 54%, hsla(14,65%,61%,1) 0px, transparent 50%),radial-gradient(at 0% 87%, hsla(233,78%,62%,1) 0px, transparent 50%),radial-gradient(at 26% 66%, hsla(214,83%,61%,1) 0px, transparent 50%),radial-gradient(at 89% 34%, hsla(117,91%,70%,1) 0px, transparent 50%),radial-gradient(at 62% 18%, hsla(236,86%,66%,1) 0px, transparent 50%),radial-gradient(at 74% 64%, hsla(350,62%,78%,1) 0px, transparent 50%),radial-gradient(at 0% 40%, hsla(341,86%,71%,1) 0px, transparent 50%)",
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
