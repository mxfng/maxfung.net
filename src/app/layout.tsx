import type { Metadata } from "next";
import { Providers } from "./providers";
import { Box } from "@chakra-ui/react";
import { nowPlaying, recentlyPlayed, songOfTheMonth } from "../lib/spotify";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { SiteLogo } from "../components/SiteLogo";
import { Spotify } from "../components/spotify/Spotify";
export const metadata: Metadata = {
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
  const _nowPlaying = await nowPlaying();
  const _recentlyPlayed = await recentlyPlayed();
  const _songOfTheMonth = await songOfTheMonth();

  return (
    <html lang="en">
      <body>
        <Providers>
          <SiteLogo />
          <Box overflow="hidden" maxWidth={900} mx="auto">
            <Box pt={{ base: 100, xl: 8 }} pb={8} px="3">
              <Banner />
            </Box>
            {children}
          </Box>
          <Box id="coolFooter" mx="auto">
            <Footer>
              <Spotify
                nowPlaying={_nowPlaying}
                recentlyPlayed={_recentlyPlayed}
                songOfTheMonth={_songOfTheMonth}
              />
            </Footer>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
