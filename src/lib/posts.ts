import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

const postsDirectory = path.join(process.cwd(), "content/posts")

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  readingTime: string
  content: string
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return []

  const fileNames = fs.readdirSync(postsDirectory)

  const posts = fileNames
    .filter(f => f.endsWith(".mdx"))
    .map(fileName => {
      const slug = fileName.replace(".mdx", "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)
      const stats = readingTime(content)

      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        description: data.description || "",
        readingTime: stats.text,
        content,
      }
    })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)
    const stats = readingTime(content)

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      description: data.description || "",
      readingTime: stats.text,
      content,
    }
  } catch {
    return null
  }
}