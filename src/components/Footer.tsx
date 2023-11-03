import { Box, Image, Link, Text } from "@chakra-ui/react";
import { SignatureLogo } from "./svg/SignatureLogo";

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
            Designed by Max Fung in California.{" "}
            <Link
              href="https://github.com/mxfng/maxfung-2023"
              target="_blank"
              variant="darker"
            >
              This website
            </Link>{" "}
            was written in TypeScript using{" "}
            <Link href="https://nextjs.org/" target="_blank" variant="darker">
              Next.js
            </Link>{" "}
            and{" "}
            <Link
              href="https://chakra-ui.com/"
              target="_blank"
              variant="darker"
            >
              Chakra UI
            </Link>
            , and deployed with{" "}
            <Link href="https://vercel.com/" target="_blank" variant="darker">
              Vercel
            </Link>
            . Text is set in the{" "}
            <Link
              href="https://fonts.google.com/specimen/Inter"
              target="_blank"
              variant="darker"
            >
              Inter
            </Link>{" "}
            and{" "}
            <Link
              href="https://fonts.google.com/specimen/Victor+Mono"
              target="_blank"
              variant="darker"
            >
              Victor Mono
            </Link>{" "}
            typefaces.
          </Text>
        </Box>
        <SignatureLogo
          fill="var(--chakra-colors-palette-300)"
          width={["48px", "64px"]}
          float="right"
          pt={3}
          mr={10}
        />
      </Box>
    </>
  );
};
