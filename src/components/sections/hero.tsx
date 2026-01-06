import { IconBrandGithub, IconMail } from "@tabler/icons-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { WebGLShader } from "@/components/web-gl-shader"
import { Button } from "../ui/button"

export const Hero = () => {
	const t = useTranslations()

	return (
		<section
			id="home"
			className="relative flex h-[90vh] items-center justify-center border-white border-b"
			aria-labelledby="hero-title"
		>
			<div className="absolute inset-0 -z-10">
				<WebGLShader />
			</div>
			<div className="flex w-full flex-col items-center justify-center space-y-5 p-4 text-center lg:p-0">
				<h2
					id="hero-title"
					className="font-extrabold font-mono text-5xl tracking-tighter sm:text-6xl md:text-7xl"
				>
					Miguel Cânepa
				</h2>
				<p className="max-w-2xl text-base text-gray-300 sm:text-lg">
					{t("hero.description")}
				</p>
				<div className="flex gap-4 pt-4">
					<Button
						nativeButton={false}
						size="lg"
						className="gap-2"
						render={<Link href={"mailto:me@miguelcanepa.com"} />}
					>
						<IconMail className="h-4 w-4" />
						{t("hero.contact")}
					</Button>
					<Button
						nativeButton={false}
						size="lg"
						variant="secondary"
						className="gap-2"
						render={
							<Link href={"https://github.com/MiguelCVA"} target="_blank" />
						}
					>
						<IconBrandGithub className="h-4 w-4" />
						{t("hero.viewWork")}
					</Button>
				</div>
			</div>
		</section>
	)
}
