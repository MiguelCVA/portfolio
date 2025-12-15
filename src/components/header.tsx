"use client"

import { IconMenu } from "@tabler/icons-react"
import { useLocale, useTranslations } from "next-intl"
import { useEffect, useState, useTransition } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Link, usePathname, useRouter } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

export const Header = () => {
	const t = useTranslations("navigation")
	const locale = useLocale()
	const router = useRouter()
	const pathname = usePathname()
	const [activeHash, setActiveHash] = useState("#home")
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const handleHashChange = () => {
			setActiveHash(window.location.hash || "#home")
		}

		handleHashChange()

		window.addEventListener("hashchange", handleHashChange)
		return () => window.removeEventListener("hashchange", handleHashChange)
	}, [])

	const [isPending, startTransition] = useTransition()

	const toggleLanguage = () => {
		const newLang = locale === "en" ? "pt-BR" : "en"
		startTransition(() => {
			router.replace(pathname, { locale: newLang })
		})
	}

	const handleNavClick = (hash: string) => {
		setActiveHash(hash)
		setIsOpen(false)
	}

	const navItems = [
		{ hash: "#home", label: t("home") },
		{ hash: "#about", label: t("about") },
		{ hash: "#projects", label: t("projects") },
		{ hash: "#technologies", label: t("technologies") },
	]

	return (
		<header
			className={cn(
				"fixed right-0 left-0 z-50 border border-white bg-background/70 p-4 backdrop-blur-sm lg:top-5",
				"mx-auto w-full max-w-7xl font-mono",
			)}
		>
			<div className="flex items-center justify-between">
				{/* Logo */}
				<div className="text-white">
					<h1 className="font-bold text-xl sm:text-2xl">Miguel Cânepa</h1>
				</div>

				{/* Desktop Navigation */}
				<nav
					className="hidden items-center gap-2.5 md:flex"
					aria-label={t("ariaLabel")}
				>
					{navItems.map((item) => (
						<Button
							key={item.hash}
							aria-current={activeHash === item.hash ? "page" : undefined}
							variant={activeHash === item.hash ? "default" : "outline"}
							render={<Link href={item.hash} />}
							nativeButton={false}
							onClick={() => handleNavClick(item.hash)}
						>
							{item.label}
						</Button>
					))}
					<Button
						variant="outline"
						disabled={isPending}
						onClick={toggleLanguage}
						aria-label={t("changeLanguage")}
						title={t("changeLanguage")}
					>
						{locale.startsWith("en") ? "🇺🇸" : "🇧🇷"}
					</Button>
				</nav>

				{/* Mobile Navigation */}
				<div className="flex items-center gap-2 md:hidden">
					<Button
						variant="outline"
						size="icon"
						disabled={isPending}
						onClick={toggleLanguage}
						aria-label={t("changeLanguage")}
						title={t("changeLanguage")}
					>
						{locale.startsWith("en") ? "🇺🇸" : "🇧🇷"}
					</Button>

					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger
							render={
								<Button variant="outline" size="icon" aria-label="Menu">
									<IconMenu className="h-5 w-5" />
								</Button>
							}
						></SheetTrigger>
						<SheetContent side="right" className="w-62.5 sm:w-75">
							<nav
								className="mt-8 flex flex-col gap-4"
								aria-label={t("ariaLabel")}
							>
								{navItems.map((item) => (
									<Button
										key={item.hash}
										aria-current={activeHash === item.hash ? "page" : undefined}
										variant={activeHash === item.hash ? "default" : "outline"}
										render={<Link href={item.hash} />}
										nativeButton={false}
										onClick={() => handleNavClick(item.hash)}
										className="w-full justify-start"
									>
										{item.label}
									</Button>
								))}
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	)
}
