"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setVisible(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--shade-self)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontFamily: "var(--font-awe)",
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              fontWeight: 300,
              color: "var(--journal-page)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            yuju
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontFamily: "var(--font-awe)",
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--bruised-gold)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            shrestha
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            style={{
              height: "1px",
              background: "var(--terminal-green)",
              opacity: 0.5,
              marginTop: "1rem",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}