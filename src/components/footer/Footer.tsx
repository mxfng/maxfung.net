import { Box, Link, Text } from "@chakra-ui/react";
import { SignatureLogo } from "../svg/SignatureLogo";
import { FooterLinks } from "./FooterLinks";
import { Line } from "../Line";

export const Footer: React.FC<any> = ({ children, ...props }) => {
  return (
    <>
      <Box position="relative">
        <Box
          py={0}
          overflow="hidden"
          bg="rgb(6 6 6)"
          pb={4}
          css={{
            ":after": {
              content: '""',
              backgroundColor: "transparent",
              backgroundImage: "url(/bgs/grain.svg)",
              backgroundSize: "182px",
              backgroundRepeat: "repeat",
              opacity: 0.12,
              top: 0,
              left: 0,
              position: "absolute",
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            },
          }}
          {...props}
        >
          <Line mb={[4, 8]} />
          <Box px={4} maxW={900} mx="auto">
            <FooterLinks />
            <Box>{children}</Box>
            <Box py={2} textAlign="justify">
              <Text variant="tiny" pb={2}>
                Designed by Max Fung in California.{" "}
              </Text>
              <Text variant="tiny">
                <Link
                  href="https://github.com/mxfng/maxfung-2023"
                  target="_blank"
                >
                  This website
                </Link>{" "}
                was drafted using pen and paper, written in TypeScript using{" "}
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
              width={["48px", "64px"]}
              pt={4}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
