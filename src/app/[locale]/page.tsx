import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { Technologies } from "@/components/sections/technologies"

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Projects />
			<Technologies />
			<Contact />
		</>
	)
}
