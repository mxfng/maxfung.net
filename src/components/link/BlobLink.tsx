import { Box, Center, Flex, GridItem } from "@chakra-ui/react";

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
          "& .icon": {
            transition: "0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6)",
          },
          "@media (min-width: 768px)": {
            "& .icon": {
              transform: "scale(0) rotate(45deg)",
            },
          },
          "@media (max-width: 768px)": {
            "& .icon": {
              transform: "scale(1)",
            },
          },
        }}
        _hover={{
          "& .blob": {
            border: "3px solid var(--chakra-colors-primary)",
          },
          "& .icon": {
            transform: "scale(1)",
          },
        }}
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
            <Center className="icon" h="100%" w="100%" style={{ opacity: 0.2 }}>
              {icon}
            </Center>
          </Box>
        </Flex>
      </GridItem>
    </>
  );
};
