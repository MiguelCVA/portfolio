import { IconExternalLink } from "@tabler/icons-react"
import { useTranslations } from "next-intl"

const PROJECTS = [
	{
		id: "project1",
		titleKey: "projects.items.project1.title",
		descriptionKey: "projects.items.project1.description",
		tags: ["React", "Node.js", "PostgreSQL", "AWS"],
	},
	{
		id: "project2",
		titleKey: "projects.items.project2.title",
		descriptionKey: "projects.items.project2.description",
		tags: ["TypeScript", "D3.js", "FastAPI", "Redis"],
	},
	{
		id: "project3",
		titleKey: "projects.items.project3.title",
		descriptionKey: "projects.items.project3.description",
		tags: ["Go", "MongoDB", "Docker"],
	},
] as const

export const Projects = () => {
	const t = useTranslations()

	return (
		<section
			id="projects"
			className="mx-auto w-full max-w-7xl space-y-6 border border-white p-8 backdrop-blur-sm"
			aria-labelledby="projects-title"
		>
			<h2 id="projects-title" className="font-bold text-3xl">
				{t("projects.title")}
			</h2>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{PROJECTS.map((project) => (
					<article
						key={project.id}
						className="group space-y-4 border border-white/10 p-6 transition-all hover:border-white/30 hover:bg-white/5"
					>
						<div className="flex items-start justify-between">
							<h3 className="font-semibold text-xl">{t(project.titleKey)}</h3>
							<IconExternalLink className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
						</div>
						<p className="text-gray-400">{t(project.descriptionKey)}</p>
						<div className="flex flex-wrap gap-2">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className="rounded border border-white/20 px-3 py-1 text-xs"
								>
									{tag}
								</span>
							))}
						</div>
					</article>
				))}
			</div>
		</section>
	)
}
