import { Box, Center, Flex, GridItem, Text } from "@chakra-ui/react";

export const BlobLink = ({
  title,
  url = "",
  size,
  bg,
  bgImage = "",
  icon,
  color,
  ...params
}) => {
  return (
    <>
      <GridItem
        key={title}
        as="a"
        href={url}
        target="_blank"
        w={size}
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
          "@media (min-width: 768px)": {
            "& .icon": {
              display: "none",
            },
          },
        }}
        _hover={{
          "& .blob": {
            border: "3px solid var(--chakra-colors-primary)",
          },
          "& .text": {
            color: "primary",
          },
          "@media (min-width: 768px)": {
            "& .text": {
              transform: "translateX(0%)",
            },
          },
        }}
        transform="rotate(-55deg)"
        transformOrigin="0% 100%"
        {...params}
      >
        <Flex w="fit-content">
          <Box
            className="blob"
            borderRadius="full"
            bg={bg}
            backgroundImage={bgImage}
            h={size}
            w={size}
          >
            <Center className="icon" h="100%" w="100%" style={{ opacity: 0.3 }}>
              {icon}
            </Center>
          </Box>
          <Box h="fit-content" overflow="hidden" my="auto">
            <Center>
              <Text
                variant="tiny"
                overflow="hidden"
                pl={2}
                color="tertiary"
                className="text"
              >
                {title}
              </Text>
            </Center>
          </Box>
        </Flex>
      </GridItem>
    </>
  );
};
