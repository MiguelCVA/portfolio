import { useTranslations } from "next-intl"

export const About = () => {
	const t = useTranslations()

	return (
		<section
			id="about"
			className="mx-auto w-full max-w-7xl -translate-y-25 border border-white bg-background p-8 font-mono"
			aria-labelledby="about-title"
		>
			<h2 id="about-title" className="font-bold text-3xl">
				{t("about.title")}
			</h2>
			<div className="space-y-4 text-gray-300">
				<p className="text-lg leading-relaxed">{t("about.paragraph1")}</p>
				<p className="text-lg leading-relaxed">{t("about.paragraph2")}</p>
			</div>
			<div className="grid gap-4 pt-4 sm:grid-cols-3">
				<div className="space-y-2 border border-white/10 p-4">
					<h3 className="font-semibold text-xl">
						{t("about.experience.title")}
					</h3>
					<p className="font-bold text-2xl text-blue-400">
						{t("about.experience.value")}
					</p>
				</div>
				<div className="space-y-2 border border-white/10 p-4">
					<h3 className="font-semibold text-xl">{t("about.projects.title")}</h3>
					<p className="font-bold text-2xl text-green-400">
						{t("about.projects.value")}
					</p>
				</div>
				<div className="space-y-2 border border-white/10 p-4">
					<h3 className="font-semibold text-xl">{t("about.clients.title")}</h3>
					<p className="font-bold text-2xl text-purple-400">
						{t("about.clients.value")}
					</p>
				</div>
			</div>
		</section>
	)
}
