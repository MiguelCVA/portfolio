import { useTranslations } from "next-intl"

const TECHNOLOGIES = {
	frontend: {
		titleKey: "technologies.frontend.title",
		items: [
			"React",
			"TypeScript",
			"Next.js",
			"Tailwind CSS",
			"Vite",
			"Svelte",
			"SvelteKit",
			"Laravel",
			"PHP",
			"Vue.js",
		],
		colorClass: "blue",
	},
	backend: {
		titleKey: "technologies.backend.title",
		items: ["Node.js", "PostgreSQL", "MongoDB", "Bun", "Java Spring", "PHP"],
		colorClass: "green",
	},
	cloud: {
		titleKey: "technologies.cloud.title",
		items: ["AWS", "OCI", "Docker", "Docker Swarm", "CI/CD"],
		colorClass: "purple",
	},
	tools: {
		titleKey: "technologies.tools.title",
		items: ["Git", "VS Code", "Zed", "Homebrew", "Nix", "MacOS"],
		colorClass: "orange",
	},
} as const

export const Technologies = () => {
	const t = useTranslations()

	return (
		<section
			id="technologies"
			className="mx-auto w-full max-w-7xl space-y-6 border border-white p-8 backdrop-blur-sm"
			aria-labelledby="tech-title"
		>
			<h2 id="tech-title" className="font-bold text-3xl">
				{t("technologies.title")}
			</h2>
			<div className="grid gap-10 sm:grid-cols-2">
				{Object.entries(TECHNOLOGIES).map(([key, tech]) => (
					<div key={key} className="space-y-4">
						<h3 className={`font-semibold text-xl text-${tech.colorClass}-400`}>
							{t(tech.titleKey)}
						</h3>
						<div className="flex flex-wrap gap-3">
							{tech.items.map((item) => (
								<span
									key={item}
									className={`rounded-full border border-${tech.colorClass}-400/30 bg-${tech.colorClass}-400/10 px-4 py-2`}
								>
									{item}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
