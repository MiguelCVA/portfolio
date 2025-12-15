import { useTranslations } from "next-intl"

export const Footer = () => {
	const t = useTranslations()

	return (
		<footer className="border-white/20 border-t py-8 text-center text-gray-400">
			<p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
		</footer>
	)
}
