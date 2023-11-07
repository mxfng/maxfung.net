import type { Metadata } from "next";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Box } from "@chakra-ui/react";
import { nowPlaying, recentlyPlayed, songOfTheMonth } from "@/utils/spotify";
import { Spotify } from "@/components/footer/spotify/Spotify";
import { Banner } from "@/components/Banner";

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
    images: "/og-image.png",
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
          <Navbar />
          <Box overflow="hidden" maxWidth={900} mx="auto">
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
