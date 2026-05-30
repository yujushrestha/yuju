import type { Metadata } from "next"
import "./globals.css"
import Nav from "@/components/layout/Nav"
import Cursor from "@/components/ui/Cursor"

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
    <html lang="en">
      <body>
        <Cursor />
        <Nav />
        {children}
      </body>
    </html>
  )
}