"use client"

import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconMail,
} from "@tabler/icons-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { Button } from "../ui/button"

export const Contact = () => {
	const t = useTranslations()

	return (
		<section
			id="contact"
			className="mx-auto w-full max-w-7xl space-y-6 border border-white p-8 backdrop-blur-sm"
			aria-labelledby="contact-title"
		>
			<h2 id="contact-title" className="font-bold text-3xl">
				{t("contact.title")}
			</h2>
			<p className="text-gray-300 text-lg">{t("contact.description")}</p>
			<div className="flex flex-wrap gap-4">
				<Button
					nativeButton={false}
					size="lg"
					className="gap-2"
					render={<Link href={"mailto:me@miguelcanepa.com"} />}
				>
					<IconMail className="h-5 w-5" />
					{t("contact.email")}
				</Button>
				<Button
					size="lg"
					variant="outline"
					className="gap-2"
					nativeButton={false}
					render={
						<Link href={"https://github.com/MiguelCVA"} target="_blank" />
					}
				>
					<IconBrandGithub className="h-5 w-5" />
					GitHub
				</Button>
				<Button
					size="lg"
					variant="outline"
					className="gap-2"
					nativeButton={false}
					render={
						<Link
							href={"www.linkedin.com/in/miguel-cânepa-08b92527a"}
							target="_blank"
						/>
					}
				>
					<IconBrandLinkedin className="h-5 w-5" />
					LinkedIn
				</Button>
			</div>

			<h1>
				Email: <span className="font-bold">me@miguelcanepa.com</span>
			</h1>
			<h1>
				Github: <span className="font-bold">MiguelCVA</span>
			</h1>
		</section>
	)
}
