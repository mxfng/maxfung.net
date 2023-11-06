import { Box, Link, Text } from "@chakra-ui/react";
import { SignatureLogo } from "../svg/SignatureLogo";
import { Links } from "./Links";
import { Line } from "../Line";

export const Footer: React.FC<any> = ({ children, ...props }) => {
  return (
    <>
      <Box py={0} overflow="hidden" {...props}>
        <Line mb={[4, 8]} />
        <Box px={4}>
          <Links />
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
    </>
  );
};
