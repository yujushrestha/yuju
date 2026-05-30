import { getAllPosts } from "@/lib/posts"
import Link from "next/link"

export default function Journal() {
  const posts = getAllPosts()

  return (
    <main style={{ padding: "10rem 2rem 6rem", maxWidth: "680px" }}>
      <p
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
        04 / journal
      </p>

      <h1
        style={{
          fontFamily: "var(--font-awe)",
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          fontWeight: 300,
          color: "var(--journal-page)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          marginBottom: "5rem",
        }}
      >
        notes &{" "}
        <span style={{ color: "var(--bruised-gold)", fontStyle: "italic" }}>
          fragments.
        </span>
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        {posts.map(post => (
          <Link
            key={post.slug}
            href={`/journal/${post.slug}`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                borderTop: "0.5px solid var(--near-black)",
                paddingTop: "2rem",
                cursor: "none",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--still-lake)",
                  opacity: 0.5,
                  letterSpacing: "0.1em",
                  marginBottom: "0.75rem",
                }}
              >
                {post.date} · {post.readingTime}
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-awe)",
                  fontSize: "1.6rem",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--journal-page)",
                  marginBottom: "0.75rem",
                  lineHeight: 1.3,
                }}
              >
                {post.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-awe)",
                  fontSize: "0.95rem",
                  fontStyle: "italic",
                  color: "var(--still-lake)",
                  opacity: 0.6,
                  lineHeight: 1.7,
                }}
              >
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}