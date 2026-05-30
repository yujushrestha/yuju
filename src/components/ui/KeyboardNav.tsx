"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const sections = ["hero", "work", "resume", "about", "contact"]

export default function KeyboardNav() {
  const [current, setCurrent] = useState(0)
  const [hint, setHint] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setHint(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return
      if (e.target instanceof HTMLTextAreaElement) return

      if (e.key === "j") {
        const next = Math.min(current + 1, sections.length - 1)
        setCurrent(next)
        const el = document.getElementById(sections[next])
        el?.scrollIntoView({ behavior: "smooth" })
      }

      if (e.key === "k") {
        const prev = Math.max(current - 1, 0)
        setCurrent(prev)
        const el = document.getElementById(sections[prev])
        el?.scrollIntoView({ behavior: "smooth" })
      }
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [current])

  if (!mounted) return null

  return (
    <>
      {/* section dots */}
      <div
        style={{
          position: "fixed",
          right: "1.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
          zIndex: 100,
        }}
      >
        {sections.map((s, i) => (
          <button
            key={s}
            onClick={() => {
              setCurrent(i)
              const el = document.getElementById(s)
              el?.scrollIntoView({ behavior: "smooth" })
            }}
            title={s}
            style={{
              width: i === current ? "16px" : "4px",
              height: "4px",
              borderRadius: "2px",
              background: "var(--terminal-green)",
              opacity: i === current ? 0.8 : 0.2,
              border: "none",
              cursor: "none",
              padding: 0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* hint */}
      <AnimatePresence>
        {hint && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
            style={{
              position: "fixed",
              bottom: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 100,
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            {["j ↓", "k ↑"].map(key => (
              <span
                key={key}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  color: "var(--terminal-green)",
                  opacity: 0.4,
                  letterSpacing: "0.12em",
                  border: "0.5px solid var(--terminal-green)",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "2px",
                }}
              >
                {key}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}