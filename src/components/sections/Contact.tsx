"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8rem 2rem",
        position: "relative",
      }}
    >
      {/* section marker */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--terminal-green)",
          opacity: 0.5,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: "4rem",
        }}
      >
        03 / contact
      </motion.p>

      {/* heading */}
      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          fontFamily: "var(--font-awe)",
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 300,
          color: "var(--journal-page)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          marginBottom: "3rem",
          maxWidth: "600px",
        }}
      >
        find me somewhere
        <br />
        <span style={{ color: "var(--bruised-gold)", fontStyle: "italic" }}>
          in the quiet.
        </span>
      </motion.h2>

      {/* the line */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.5 }}
        style={{
          fontFamily: "var(--font-awe)",
          fontSize: "1.05rem",
          fontStyle: "italic",
          color: "var(--still-lake)",
          lineHeight: 1.8,
          maxWidth: "420px",
          marginBottom: "4rem",
          opacity: 0.7,
        }}
      >
        open to work, collaboration, or just
        a conversation worth having.
      </motion.p>

      {/* links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {[
          {
            label: "email",
            value: "yujushrestha0@gmail.com",
            href: "mailto:yujushrestha0@gmail.com",
          },
          {
            label: "github",
            value: "yujushrestha",
            href: "https://github.com/yujushrestha",
          },
          {
            label: "linkedin",
            value: "Yuju Shrestha",
            href: "#",
          },
        ].map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -12 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 + i * 0.12 }}
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "1.5rem",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onMouseEnter={e => {
              const val = e.currentTarget.querySelector(
                ".contact-value"
              ) as HTMLElement
              if (val) val.style.opacity = "1"
            }}
            onMouseLeave={e => {
              const val = e.currentTarget.querySelector(
                ".contact-value"
              ) as HTMLElement
              if (val) val.style.opacity = "0.5"
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--terminal-green)",
                opacity: 0.5,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                minWidth: "60px",
              }}
            >
              {link.label}
            </span>
            <span
              className="contact-value"
              style={{
                fontFamily: "var(--font-awe)",
                fontSize: "1.1rem",
                fontStyle: "italic",
                color: "var(--journal-page)",
                opacity: 0.5,
                transition: "opacity 0.3s ease",
              }}
            >
              {link.value}
            </span>
          </motion.a>
        ))}
      </motion.div>

      {/* footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "2rem",
          right: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            color: "var(--journal-page)",
            opacity: 0.15,
            letterSpacing: "0.1em",
          }}
        >
          yuju shrestha — {new Date().getFullYear()}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            color: "var(--terminal-green)",
            opacity: 0.2,
            letterSpacing: "0.1em",
          }}
        >
          built slowly. honestly.
        </span>
      </motion.div>
    </section>
  )
}