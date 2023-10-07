import type { Metadata } from 'next'
import { Providers } from "./providers"
import { Navbar } from "@/components/Navbar"

export const metadata: Metadata = {
  title: 'Max Fung - Full Stack Developer',
  description: 'Product and design focused full stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
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
  )
}
