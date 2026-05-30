import { getPostBySlug, getAllPosts } from "@/lib/posts"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  return (
    <main style={{ padding: "10rem 2rem 6rem", maxWidth: "640px" }}>
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--terminal-green)",
          opacity: 0.5,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: "3rem",
        }}
      >
        {post.date} · {post.readingTime}
      </p>

      <h1
        style={{
          fontFamily: "var(--font-awe)",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 300,
          fontStyle: "italic",
          color: "var(--journal-page)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          marginBottom: "4rem",
        }}
      >
        {post.title}
      </h1>

      <div
        style={{
          fontFamily: "var(--font-awe)",
          fontSize: "1.1rem",
          fontStyle: "italic",
          color: "var(--still-lake)",
          lineHeight: 1.9,
          opacity: 0.85,
        }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  )
}