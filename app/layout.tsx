import type { Metadata } from "next"
import "./globals.css"
import { ViewTransitions } from "next-view-transitions"
import Nav from "@/components/layout/Nav"
import Cursor from "@/components/ui/Cursor"
import EasterEgg from "@/components/ui/EasterEgg"

export const metadata: Metadata = {
  title: "yuju shrestha",
  description: "seeking something missing. missing something left behind.",
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
          <Cursor />
          <EasterEgg />
          <Nav />
          {children}
        </body>
      </html>
    </ViewTransitions>
  )
}