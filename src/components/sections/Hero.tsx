"use client"
import dynamic from "next/dynamic"

const FloatingForm = dynamic(() => import("@/components/ui/FloatingForm"), {
  ssr: false,
})

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ambient background pulse */}
      <motion.div
        animate={{ opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "var(--bruised-gold)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* 3D form */}
      <FloatingForm />

      {/* main content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", paddingTop: "6rem" }}>

        {/* overline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--terminal-green)",
            opacity: 0.6,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          developer / creative
        </motion.p>

        {/* name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "var(--font-awe)",
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            fontWeight: 300,
            color: "var(--journal-page)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            marginBottom: "2.5rem",
          }}
        >
          yuju
          <br />
          <span style={{ color: "var(--bruised-gold)", fontStyle: "italic" }}>
            shrestha
          </span>
        </motion.h1>

        {/* the line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "var(--font-awe)",
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "var(--still-lake)",
            maxWidth: "480px",
            lineHeight: 1.6,
            marginBottom: "4rem",
          }}
        >
          seeking something missing.
          <br />
          missing something left behind.
        </motion.p>

        {/* nav links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}
        >
          {["work", "about", "contact"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + i * 0.12 }}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--journal-page)",
                opacity: 0.4,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderBottom: "0.5px solid currentColor",
                paddingBottom: "2px",
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "0.4")}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "40px",
            background: "var(--bruised-gold)",
            opacity: 0.3,
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            color: "var(--journal-page)",
            opacity: 0.2,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
          }}
        >
          scroll
        </span>
      </motion.div>

    </section>
  )
}