import { Box, Flex, Image } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Flex
      bg="linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)"
      position="fixed"
      top={0}
      width="full"
      height="88px"
      p={3}
      as="header"
      alignItems="center"
      justifyContent="space-between"
      zIndex={999}
    >
      <Box position="fixed" top={0} pt={1} width="88px">
        <Image src="/max-signature.svg" alt="Max Fung" />
      </Box>
    </Flex>
  );
};
