import type { Metadata } from "next";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Box } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Max Fung",
  description: "Full Stack Developer",
  openGraph: {
    title: "Max Fung",
    description: "Full Stack Developer",
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
