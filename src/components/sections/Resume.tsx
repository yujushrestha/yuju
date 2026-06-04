"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const experience = [
  {
    title: "AankhaNet",
    role: "co-creator / developer",
    period: "2025 — present",
    description: "AI-driven network threat detection and visualization platform with a mobile SOC companion for SMEs. Built for Australian small-medium businesses.",
    link: "https://aankhanet.net",
    tags: ["AI", "network security", "React Native", "TypeScript", "Python"],
  },
  {
    title: "yuju — this site",
    role: "designer / developer",
    period: "2026 — present",
    description: "a digital identity experience. cinematic, atmospheric, built slowly.",
    link: "https://yuju-psi.vercel.app",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
  },
  {
    title: "weather prediction app",
    role: "developer",
    period: "coming",
    description: "in progress. details soon.",
    link: null,
    tags: ["coming soon"],
  },
  {
    title: "journaling notes app",
    role: "developer",
    period: "coming",
    description: "in progress. details soon.",
    link: null,
    tags: ["coming soon"],
  },
]

const skills = [
  { category: "languages", items: ["Python", "TypeScript", "JavaScript", "C#", "C++"] },
  { category: "web & mobile", items: ["React", "Next.js", "React Native", "Node.js", "Expo"] },
  { category: "interests", items: ["data analysis", "network management", "cyber security", "product development"] },
  { category: "tools", items: ["Git", "Docker", "VS Code", "Vercel", "Railway"] },
]

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="resume"
      ref={ref}
      style={{
        padding: "6rem 2rem",
        position: "relative",
        maxWidth: "900px",
      }}
    >
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
        experience
      </motion.p>

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
          marginBottom: "5rem",
        }}
      >
        things built,
        <br />
        <span style={{ color: "var(--bruised-gold)", fontStyle: "italic" }}>
          things becoming.
        </span>
      </motion.h2>

      <div style={{ marginBottom: "6rem" }}>
        {experience.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
            style={{
              borderTop: "0.5px solid var(--near-black)",
              paddingTop: "2rem",
              paddingBottom: "2rem",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "2rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--terminal-green)",
                  opacity: 0.5,
                  letterSpacing: "0.1em",
                  marginBottom: "0.5rem",
                }}
              >
                {item.period}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--still-lake)",
                  opacity: 0.4,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {item.role}
              </p>
            </div>

            <div>
              {item.link ? (
<a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-awe)",
                      fontSize: "1.4rem",
                      fontWeight: 300,
                      fontStyle: "italic",
                      color: "var(--journal-page)",
                      marginBottom: "0.75rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {item.title} ↗
                  </h3>
                </a>
              ) : (
                <h3
                  style={{
                    fontFamily: "var(--font-awe)",
                    fontSize: "1.4rem",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "var(--journal-page)",
                    opacity: 0.4,
                    marginBottom: "0.75rem",
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>
              )}

              <p
                style={{
                  fontFamily: "var(--font-awe)",
                  fontSize: "0.95rem",
                  fontStyle: "italic",
                  color: "var(--still-lake)",
                  lineHeight: 1.7,
                  opacity: 0.7,
                  marginBottom: "1rem",
                }}
              >
                {item.description}
              </p>

              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "9px",
                      color: "var(--journal-page)",
                      opacity: item.link ? 0.35 : 0.15,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      border: "0.5px solid currentColor",
                      padding: "0.3rem 0.6rem",
                      borderRadius: "2px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "2rem",
          borderTop: "0.5px solid var(--near-black)",
          paddingTop: "3rem",
        }}
      >
        {skills.map(group => (
          <div key={group.category}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                color: "var(--terminal-green)",
                opacity: 0.4,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              {group.category}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {group.items.map(item => (
                <span
                  key={item}
                  style={{
                    fontFamily: "var(--font-awe)",
                    fontSize: "0.95rem",
                    fontStyle: "italic",
                    color: "var(--still-lake)",
                    opacity: 0.6,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--journal-page)",
          opacity: 0.2,
          letterSpacing: "0.1em",
          marginTop: "4rem",
        }}
      >
        Brisbane, QLD — graduating 2026 — open to work
      </motion.p>
    </section>
  )
}
