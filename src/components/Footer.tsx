import { Box, Center, Image, Link, Text } from "@chakra-ui/react";
import { SignatureLogo } from "./svg/SignatureLogo";
import { Spotify } from "./spotify/Spotify";
import { Links } from "./Links";
import { Line } from "./Line";

export const Footer: React.FC<any> = ({ children, ...props }) => {
  return (
    <>
      <Box py={0} overflow="hidden" {...props}>
        <Line mb={[4, 8]} />
        <Links />
        {children}
        <Box px={3} textAlign="justify">
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
            typeface.
          </Text>
        </Box>
        <SignatureLogo
          fill="var(--chakra-colors-primary)"
          width={["64px", "88px"]}
          pt={4}
          px={3}
        />
      </Box>
    </>
  );
};
