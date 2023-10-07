import { Box, Flex, Image } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Flex
      position="fixed"
      top={0}
      width="full"
      p={4}
      as="header"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box boxSize="88px">
        <Image src="/max-signature.svg" alt="Max Fung" />
      </Box>
    </Flex>
  );
};
