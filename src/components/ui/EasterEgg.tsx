"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function EasterEgg() {
  const [visible, setVisible] = useState(false)
  const [typed, setTyped] = useState("")

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const next = (typed + e.key).slice(-4)
      setTyped(next)

      if (next === "yuju") {
        setVisible(true)
        setTyped("")
        setTimeout(() => setVisible(false), 4000)
      }
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [typed])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9998,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              fontFamily: "var(--font-awe)",
              fontSize: "clamp(1rem, 3vw, 1.4rem)",
              fontStyle: "italic",
              color: "var(--bruised-gold)",
              opacity: 0.6,
              letterSpacing: "0.04em",
              textAlign: "center",
              maxWidth: "480px",
              lineHeight: 1.8,
            }}
          >
            somewhere by a lake,
            <br />
            slowdive in your ears,
            <br />
            carving something into a living thing.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              color: "var(--terminal-green)",
              opacity: 0.3,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginTop: "2rem",
            }}
          >
            you found it
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}