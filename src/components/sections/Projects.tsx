import { getRepositories } from "@/lib/github"
import ProjectsClient from "./ProjectsClient"

export default async function Projects() {
  const repos = await getRepositories()

  return <ProjectsClient repos={repos} />
}