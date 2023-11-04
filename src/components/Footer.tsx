import { Box, Center, Image, Link, Text } from "@chakra-ui/react";
import { SignatureLogo } from "./svg/SignatureLogo";
import { Spotify } from "./spotify/Spotify";

export const Footer = ({ ...props }) => {
  return (
    <>
      <Box px={3} py={0} {...props}>
        <Box textAlign="justify">
          <Text variant="tiny" pb={2}>
            Designed by Max Fung in California.{" "}
          </Text>
          <Text variant="tiny">
            <Link href="https://github.com/mxfng/maxfung-2023" target="_blank">
              This website
            </Link>{" "}
            was written in TypeScript using{" "}
            <Link href="https://nextjs.org/" target="_blank">
              Next.js
            </Link>{" "}
            and{" "}
            <Link href="https://chakra-ui.com/" target="_blank">
              Chakra UI
            </Link>
            , and deployed with{" "}
            <Link href="https://vercel.com/" target="_blank">
              Vercel
            </Link>
            . Text is set in the{" "}
            <Link
              href="https://fonts.google.com/specimen/Inter"
              target="_blank"
            >
              Inter
            </Link>{" "}
            and{" "}
            <Link
              href="https://fonts.google.com/specimen/Victor+Mono"
              target="_blank"
            >
              Victor Mono
            </Link>{" "}
            typefaces.
          </Text>
        </Box>
        <SignatureLogo
          fill="var(--chakra-colors-primary)"
          width={["48px", "64px"]}
          pt={4}
        />
      </Box>
    </>
  );
};
