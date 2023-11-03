import type { Metadata } from "next";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Box } from "@chakra-ui/react";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <Box pt={100} overflow="hidden" maxWidth={900} mx="auto">
            {children}
          </Box>
          <Footer pb={[50, 100]} maxWidth={900} mx="auto" />
        </Providers>
      </body>
    </html>
  );
}
