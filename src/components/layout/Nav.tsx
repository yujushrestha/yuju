"use client"

import { motion } from "framer-motion"
import { Link } from "next-view-transitions"

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "1.5rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--terminal-green)",
          opacity: 0.7,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          textDecoration: "none",
        }}
      >
        yuju shrestha
      </Link>

      <Link
        href="/journal"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--still-lake)",
          opacity: 0.5,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          textDecoration: "none",
          transition: "opacity 0.3s ease",
        }}
        onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
          (e.currentTarget.style.opacity = "0.9")
        }
        onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
          (e.currentTarget.style.opacity = "0.5")
        }
      >
        journal
      </Link>
    </motion.nav>
  )
}