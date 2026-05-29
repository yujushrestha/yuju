"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Repository } from "@/lib/github"

const languageColors: Record<string, string> = {
  TypeScript: "var(--still-lake)",
  JavaScript: "var(--bruised-gold)",
  Python: "var(--shade-green)",
  "C#": "var(--terminal-green)",
  "C++": "var(--bleeder-red)",
  HTML: "var(--bruised-gold)",
  CSS: "var(--still-lake)",
}

export default function ProjectsClient({ repos }: { repos: Repository[] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="work"
      ref={ref}
      style={{
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
        01 / work
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
          marginBottom: "5rem",
          maxWidth: "600px",
        }}
      >
        things i have
        <br />
        <span style={{ color: "var(--bruised-gold)", fontStyle: "italic" }}>
          built & left.
        </span>
      </motion.h2>

      {/* repository grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1px",
          background: "var(--near-black)",
          border: "1px solid var(--near-black)",
        }}
      >
        {repos.map((repo, i) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.4 + i * 0.08,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              background: "var(--shade-self)",
              padding: "2rem",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.background = "var(--near-black)")
            }
            onMouseLeave={e =>
              (e.currentTarget.style.background = "var(--shade-self)")
            }
          >
            {/* repo name */}
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--journal-page)",
                opacity: 0.8,
                letterSpacing: "0.06em",
              }}
            >
              {repo.name}
            </span>

            {/* description */}
            <span
              style={{
                fontFamily: "var(--font-awe)",
                fontSize: "0.95rem",
                fontStyle: "italic",
                color: "var(--still-lake)",
                lineHeight: 1.6,
                opacity: 0.7,
                flex: 1,
              }}
            >
              {repo.description || "no description yet."}
            </span>

            {/* footer */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "auto",
              }}
            >
              {repo.language && (
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    color:
                      languageColors[repo.language] || "var(--journal-page)",
                    opacity: 0.6,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {repo.language}
                </span>
              )}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  color: "var(--journal-page)",
                  opacity: 0.2,
                  letterSpacing: "0.08em",
                }}
              >
                ★ {repo.stargazers_count}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}