import type { Metadata } from "next";
import { Providers } from "./providers";
import { Box } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Corner } from "../components/Corner";
import { Spotify } from "../components/spotify/Spotify";
import { Avatar } from "../components/visuals/Avatar";
import { SignatureLogoAnimated } from "../components/svg/SignatureLogoAnimated";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxfung.net" || "http://localhost:3000"),

  title: {
    template: "%s | Max Fung",
    default: "Max Fung",
  },

  description:
    "A full stack software engineer who loves designing, building, and shipping creative products with intuitive experiences from start to finish.",

  keywords: [
    "Max Fung",
    "Engineer",
    "Music",
    "Software",
    "Developer",
    "Full Stack",
    "Web Design",
  ],

  creator: "Max Fung",

  category: "technology",

  openGraph: {
    title: "Max Fung",
    description:
      "A full stack software engineer who loves designing, building, and shipping creative products with intuitive experiences from start to finish.",
    images: "/opengraph-image.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Corner as="a" href="/">
            <SignatureLogoAnimated
              stroke="var(--chakra-colors-primary)"
              w="120px"
            />
          </Corner>
          <Corner which="right">
            <Avatar />
          </Corner>
          <Box overflow="hidden" maxWidth={900} mx="auto">
            <Box pt={{ base: 100, xl: 8 }} pb={8} px="3">
              <Banner />
            </Box>

            {children}
          </Box>
          <Box id="coolFooter" mx="auto">
            <Footer>
              <Spotify />
            </Footer>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
