"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const isTouchDevice = "ontouchstart" in window
    if (isTouchDevice) return

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleEnter = () => setIsHovering(true)
    const handleLeave = () => setIsHovering(false)

    window.addEventListener("mousemove", move)

    const interactables = document.querySelectorAll("a, button")
    interactables.forEach(el => {
      el.addEventListener("mouseenter", handleEnter)
      el.addEventListener("mouseleave", handleLeave)
    })

    return () => {
      window.removeEventListener("mousemove", move)
      interactables.forEach(el => {
        el.removeEventListener("mouseenter", handleEnter)
        el.removeEventListener("mouseleave", handleLeave)
      })
    }
  }, [isVisible])

  if (!isMounted) return null

  return (
    <>
      <motion.div
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isHovering ? 0 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.08, ease: "linear" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "var(--journal-page)",
          opacity: 0.7,
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
        }}
      />
      <motion.div
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isHovering ? 1.8 : 1,
          opacity: isVisible ? 1 : 0,
          borderColor: isHovering
            ? "var(--bruised-gold)"
            : "var(--journal-page)",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "0.5px solid var(--journal-page)",
          opacity: 0.2,
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  )
}