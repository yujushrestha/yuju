export interface Repository {
  id: number
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  html_url: string
  topics: string[]
  updated_at: string
  fork: boolean
}

export interface LanguageStat {
  language: string
  percentage: number
  color: string
}

export async function getRepositories(): Promise<Repository[]> {
  const token = process.env.GITHUB_TOKEN
  const username = "yujushrestha"

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=20`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 },
    }
  )

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`)
  }

  const repos: Repository[] = await response.json()
  return repos.filter(repo => !repo.fork).slice(0, 8)
}

export async function getLanguageStats(): Promise<LanguageStat[]> {
  const token = process.env.GITHUB_TOKEN
  const username = "yujushrestha"

  const reposResponse = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=20`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 },
    }
  )

  if (!reposResponse.ok) return []

  const repos: Repository[] = await reposResponse.json()
  const ownRepos = repos.filter(repo => !repo.fork)

  const langCounts: Record<string, number> = {}

  await Promise.all(
    ownRepos.slice(0, 10).map(async repo => {
      const res = await fetch(
        `https://api.github.com/repos/${username}/${repo.name}/languages`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.v3+json",
          },
          next: { revalidate: 3600 },
        }
      )
      if (!res.ok) return
      const langs: Record<string, number> = await res.json()
      Object.entries(langs).forEach(([lang, bytes]) => {
        langCounts[lang] = (langCounts[lang] || 0) + bytes
      })
    })
  )

  const total = Object.values(langCounts).reduce((a, b) => a + b, 0)
  if (total === 0) return []

  const colorMap: Record<string, string> = {
    TypeScript: "var(--still-lake)",
    JavaScript: "var(--bruised-gold)",
    Python: "var(--shade-green)",
    "C#": "var(--terminal-green)",
    "C++": "var(--bleeder-red)",
    HTML: "var(--bruised-gold)",
    CSS: "var(--still-lake)",
  }

  return Object.entries(langCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6)
    .map(([language, bytes]) => ({
      language,
      percentage: Math.round((bytes / total) * 100),
      color: colorMap[language] || "var(--journal-page)",
    }))
}