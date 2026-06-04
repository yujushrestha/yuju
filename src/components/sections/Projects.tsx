import { getRepositories, getLanguageStats } from "@/lib/github"
import ProjectsClient from "./ProjectsClient"

export default async function Projects() {
  const [repos, languages] = await Promise.all([
    getRepositories(),
    getLanguageStats(),
  ])

  return <ProjectsClient repos={repos} languages={languages} />
}
