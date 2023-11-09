import type { Metadata } from "next";
import { Providers } from "./providers";
import { Box } from "@chakra-ui/react";
import { nowPlaying, recentlyPlayed, songOfTheMonth } from "../lib/spotify";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Corner } from "../components/Corner";
import { Spotify } from "../components/spotify/Spotify";
import { Avatar } from "../components/visuals/Avatar";
import SplashScreen from "../components/SplashScreen";
import { SignatureLogo } from "../components/svg/SignatureLogo";

const no_spotify: string = process.env.NO_SPOTIFY_CALLS || "false";

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
  let _nowPlaying;
  let _recentlyPlayed;
  let _songOfTheMonth;

  if (no_spotify === "false") {
    _nowPlaying = await nowPlaying();
    _recentlyPlayed = await recentlyPlayed();
    _songOfTheMonth = await songOfTheMonth();
  } else {
    _nowPlaying = { error: "dev", is_playing: false };
    _recentlyPlayed = { error: "dev", is_playing: false };
    _songOfTheMonth = { error: "dev", is_playing: false };
  }

  return (
    <html lang="en">
      <body>
        <Providers>
          <Corner as="a" href="/">
            <SignatureLogo fill="var(--chakra-colors-primary)" w="120px" />
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
