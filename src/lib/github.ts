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

  return repos
    .filter(repo => !repo.fork)
    .slice(0, 8)
}