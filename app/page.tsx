import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"
import Resume from "@/components/sections/Resume"

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Resume />
      <About />
      <Contact />
    </main>
  )
}