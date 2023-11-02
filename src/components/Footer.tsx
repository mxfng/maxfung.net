import { Box, Image, Text } from "@chakra-ui/react";

export const Footer = ({ ...props }) => {
  return (
    <>
      <Box px={3} pb={30} {...props}>
        <Box>
          <Image
            width={["90px", "120px"]}
            height={["90px", "120px"]}
            objectFit="cover"
            mb={4}
            src="/footer.jpg"
            alt="footer"
            borderRadius="full"
          />
        </Box>
        <Box>
          <Text variant="darker" fontSize="10pt">
            Designed by Max Fung in California. This website was written in
            TypeScript using Next.js and Chakra UI, and deployed with Vercel.
            Text is set in the Inter and Victor Mono typefaces.
          </Text>
        </Box>
        <Image
          src="/max-signature.svg"
          alt=""
          width={["48px", "64px"]}
          float="right"
          pt={3}
          mr={10}
        />
      </Box>
    </>
  );
};
