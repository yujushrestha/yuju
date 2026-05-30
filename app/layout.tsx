import type { Metadata } from "next"
import "./globals.css"
import { ViewTransitions } from "next-view-transitions"
import Nav from "@/components/layout/Nav"
import Cursor from "@/components/ui/Cursor"
import EasterEgg from "@/components/ui/EasterEgg"
import MusicPlayer from "@/components/ui/MusicPlayer"
import ScrollProgress from "@/components/ui/ScrollProgress"
import Loader from "@/components/ui/Loader"

export const metadata: Metadata = {
  title: "yuju shrestha",
  description: "seeking something missing. missing something left behind.",
  keywords: [
    "yuju shrestha",
    "developer",
    "portfolio",
    "Brisbane",
    "web development",
    "network security",
    "AankhaNet",
    "full stack",
    "creative developer",
  ],
  authors: [{ name: "yuju shrestha" }],
  creator: "yuju shrestha",
  openGraph: {
    type: "website",
    url: "https://yuju-psi.vercel.app",
    title: "yuju shrestha",
    description: "seeking something missing. missing something left behind.",
    siteName: "yuju shrestha",
    images: [
      {
        url: "https://yuju-psi.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "yuju shrestha — developer / creative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "yuju shrestha",
    description: "seeking something missing. missing something left behind.",
    images: ["https://yuju-psi.vercel.app/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          <Loader />
          <Cursor />
          <EasterEgg />
          <ScrollProgress />
          <MusicPlayer />
          <Nav />
          {children}
        </body>
      </html>
    </ViewTransitions>
  )
}