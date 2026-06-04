"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "6rem 2rem",
        position: "relative",
        maxWidth: "900px",
      }}
    >
      {/* section marker */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
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
        about
      </motion.p>

      {/* the big line — awe voice */}
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
        }}
      >
        a builder who
        <br />
        <span style={{ color: "var(--bruised-gold)", fontStyle: "italic" }}>
          feels first,
        </span>
        <br />
        codes after.
      </motion.h2>

      {/* body — intimate voice */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          maxWidth: "700px",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "var(--font-awe)",
            fontSize: "1.05rem",
            fontStyle: "italic",
            color: "var(--still-lake)",
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          I write code the way I write in journals —
          slowly, honestly, with the feeling that
          something is being worked out in the process.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "var(--font-awe)",
            fontSize: "1.05rem",
            fontStyle: "italic",
            color: "var(--still-lake)",
            lineHeight: 1.8,
            fontWeight: 300,
            opacity: 0.7,
          }}
        >
          Intermediate developer. Permanent student.
          Interested in the space where technology
          stops feeling like technology.
        </motion.p>
      </div>

      {/* skills — oriented voice */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.0 }}
        style={{
          marginTop: "4rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        {[
          "Python", "TypeScript", "JavaScript",
          "React", "Next.js", "Node.js",
          "C#", "C++"
        ].map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.0 + i * 0.08 }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--journal-page)",
              opacity: 0.4,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "0.5px solid currentColor",
              padding: "0.4rem 0.75rem",
              borderRadius: "2px",
            }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>

      {/* the hidden memory — weak voice */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, delay: 1.6 }}
        style={{
          fontFamily: "var(--font-awe)",
          fontSize: "0.8rem",
          fontStyle: "italic",
          color: "var(--bruised-gold)",
          opacity: 0.2,
          marginTop: "3rem",
          letterSpacing: "0.04em",
        }}
      >
        somewhere by a lake, carving something into a tree.
      </motion.p>

{/* currently */}
<motion.div
  initial={{ opacity: 0 }}
  animate={isInView ? { opacity: 1 } : {}}
  transition={{ duration: 1, delay: 1.4 }}
  style={{
    marginTop: "5rem",
    borderTop: "0.5px solid var(--near-black)",
    paddingTop: "3rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
  }}
>
  {/* listening */}
  <div>
    <p style={{
      fontFamily: "var(--font-mono)",
      fontSize: "9px",
      color: "var(--terminal-green)",
      opacity: 0.4,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      marginBottom: "1.5rem",
    }}>
      currently
    </p>
    <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
      <div>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          color: "var(--journal-page)",
          opacity: 0.3,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "0.4rem",
        }}>
          listening
        </p>
        <p style={{
          fontFamily: "var(--font-awe)",
          fontSize: "1rem",
          fontStyle: "italic",
          color: "var(--still-lake)",
          opacity: 0.7,
        }}>
          Puddle of Mudd
        </p>
        <p style={{
          fontFamily: "var(--font-awe)",
          fontSize: "0.85rem",
          fontStyle: "italic",
          color: "var(--journal-page)",
          opacity: 0.2,
          marginTop: "0.2rem",
        }}>
          Come Clean
        </p>
      </div>

      <div>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          color: "var(--journal-page)",
          opacity: 0.3,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "0.4rem",
        }}>
          reading
        </p>
        <p style={{
          fontFamily: "var(--font-awe)",
          fontSize: "1rem",
          fontStyle: "italic",
          color: "var(--still-lake)",
          opacity: 0.7,
        }}>
          Mirror Dance — Bujold
        </p>
      </div>

      <div>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          color: "var(--journal-page)",
          opacity: 0.3,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "0.4rem",
        }}>
          building
        </p>
        <p style={{
          fontFamily: "var(--font-awe)",
          fontSize: "1rem",
          fontStyle: "italic",
          color: "var(--still-lake)",
          opacity: 0.7,
        }}>
          this site
        </p>
      </div>
    </div>
  </div>

  {/* shelf */}
  <div>
    <p style={{
      fontFamily: "var(--font-mono)",
      fontSize: "9px",
      color: "var(--terminal-green)",
      opacity: 0.4,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      marginBottom: "1.5rem",
    }}>
      a small shelf
    </p>
    <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
      {[
        { type: "film", title: "Bleeder", year: "1999" },
        { type: "film", title: "All About Lily Chou-Chou", year: "2001" },
        { type: "book", title: "The Sailor Who Fell from Grace with the Sea", year: "Mishima" },
        { type: "album", title: "Souvlaki", year: "Slowdive" },
        { type: "album", title: "Come Clean", year: "Puddle of Mudd" },
        { type: "hobby", title: "chess", year: "ongoing" },
        { type: "hobby", title: "BMX", year: "always" },
      ].map(item => (
        <div key={item.title} style={{ display: "flex", gap: "1rem", alignItems: "baseline" }}>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "8px",
            color: "var(--bleeder-red)",
            opacity: 0.5,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            minWidth: "40px",
          }}>
            {item.type}
          </span>
          <span style={{
            fontFamily: "var(--font-awe)",
            fontSize: "0.95rem",
            fontStyle: "italic",
            color: "var(--still-lake)",
            opacity: 0.65,
          }}>
            {item.title}
          </span>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "8px",
            color: "var(--journal-page)",
            opacity: 0.2,
            letterSpacing: "0.06em",
            marginLeft: "auto",
          }}>
            {item.year}
          </span>
        </div>
      ))}
    </div>
  </div>
</motion.div>
    </section>
  )
}