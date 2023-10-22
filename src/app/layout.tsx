import type { Metadata } from "next";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";

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
          {children}
        </Providers>
      </body>
    </html>
  );
}
