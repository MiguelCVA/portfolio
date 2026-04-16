"use client"

import { IconMenu } from "@tabler/icons-react"
import { useLocale, useTranslations } from "next-intl"
import { useEffect, useState, useTransition } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Link, usePathname, useRouter } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

// ============================================================================
// Types
// ============================================================================

interface NavItem {
	hash: string
	label: string
}

// ============================================================================
// Custom Hooks
// ============================================================================

const useActiveHash = () => {
	const [activeHash, setActiveHash] = useState("#home")

	useEffect(() => {
		const handleHashChange = () => {
			setActiveHash(window.location.hash || "#home")
		}

		handleHashChange()

		window.addEventListener("hashchange", handleHashChange)
		return () => window.removeEventListener("hashchange", handleHashChange)
	}, [])

	return activeHash
}

const useLanguageToggle = () => {
	const locale = useLocale()
	const router = useRouter()
	const pathname = usePathname()
	const [isPending, startTransition] = useTransition()

	const toggleLanguage = () => {
		const newLang = locale === "en" ? "pt-BR" : "en"
		startTransition(() => {
			router.replace(pathname, { locale: newLang })
		})
	}

	return { locale, isPending, toggleLanguage }
}

// ============================================================================
// Components
// ============================================================================

interface LanguageToggleProps {
	locale: string
	isPending: boolean
	onToggle: () => void
	ariaLabel: string
	variant?: "outline" | "default"
	size?: "default" | "icon"
}

const LanguageToggle = ({
	locale,
	isPending,
	onToggle,
	ariaLabel,
	variant = "outline",
	size = "default",
}: LanguageToggleProps) => (
	<Button
		variant={variant}
		size={size}
		disabled={isPending}
		onClick={onToggle}
		aria-label={ariaLabel}
		title={ariaLabel}
	>
		{locale.startsWith("en") ? "🇺🇸" : "🇧🇷"}
	</Button>
)

interface NavLinksProps {
	items: NavItem[]
	activeHash: string
	onNavClick: (hash: string) => void
	className?: string
}

const NavLinks = ({
	items,
	activeHash,
	onNavClick,
	className,
}: NavLinksProps) => (
	<>
		{items.map((item) => (
			<Button
				key={item.hash}
				aria-current={activeHash === item.hash ? "page" : undefined}
				variant={activeHash === item.hash ? "link" : "link"}
				render={<Link href={item.hash} />}
				nativeButton={false}
				onClick={() => onNavClick(item.hash)}
				className={className}
			>
				{item.label}
			</Button>
		))}
	</>
)

interface DesktopNavProps {
	navItems: NavItem[]
	activeHash: string
	onNavClick: (hash: string) => void
	ariaLabel: string
	languageToggleProps: Omit<LanguageToggleProps, "variant" | "size">
}

const DesktopNav = ({
	navItems,
	activeHash,
	onNavClick,
	ariaLabel,
	languageToggleProps,
}: DesktopNavProps) => (
	<nav className="hidden items-center gap-2.5 md:flex" aria-label={ariaLabel}>
		<NavLinks
			items={navItems}
			activeHash={activeHash}
			onNavClick={onNavClick}
		/>
		<LanguageToggle {...languageToggleProps} />
	</nav>
)

interface MobileNavProps {
	navItems: NavItem[]
	activeHash: string
	onNavClick: (hash: string) => void
	ariaLabel: string
	isOpen: boolean
	onOpenChange: (open: boolean) => void
	languageToggleProps: Omit<LanguageToggleProps, "variant">
}

const MobileNav = ({
	navItems,
	activeHash,
	onNavClick,
	ariaLabel,
	isOpen,
	onOpenChange,
	languageToggleProps,
}: MobileNavProps) => (
	<div className="flex items-center gap-2 md:hidden">
		<LanguageToggle {...languageToggleProps} size="icon" />

		<Sheet open={isOpen} onOpenChange={onOpenChange}>
			<SheetTrigger
				render={<Button variant="outline" size="icon" aria-label="Menu" />}
			>
				<IconMenu className="h-5 w-5" />
			</SheetTrigger>
			<SheetContent side="right" className="w-62.5 sm:w-75">
				<nav className="mt-8 flex flex-col gap-4" aria-label={ariaLabel}>
					<NavLinks
						items={navItems}
						activeHash={activeHash}
						onNavClick={onNavClick}
						className="w-full justify-start"
					/>
				</nav>
			</SheetContent>
		</Sheet>
	</div>
)

// ============================================================================
// Main Component
// ============================================================================

export const Header = () => {
	const t = useTranslations("navigation")
	const activeHash = useActiveHash()
	const { locale, isPending, toggleLanguage } = useLanguageToggle()
	const [isOpen, setIsOpen] = useState(false)

	const handleNavClick = (hash: string) => {
		setIsOpen(false)
	}

	const navItems: NavItem[] = [
		{ hash: "/#home", label: t("home") },
		{ hash: "/#about", label: t("about") },
		{ hash: "/#projects", label: t("projects") },
		{ hash: "/#technologies", label: t("technologies") },
	]

	const languageToggleProps = {
		locale,
		isPending,
		onToggle: toggleLanguage,
		ariaLabel: t("changeLanguage"),
	}

	return (
		<header
			className={cn(
				"fixed right-0 left-0 z-50 border border-white bg-background/70 p-4 backdrop-blur-sm lg:top-5",
				"mx-auto w-full max-w-7xl font-mono",
			)}
		>
			<div className="flex items-center justify-between">
				<div className="text-white">
					<Link href={"/"} className="font-bold text-xl sm:text-2xl">
						Miguel Cânepa
					</Link>
				</div>

				<DesktopNav
					navItems={navItems}
					activeHash={activeHash}
					onNavClick={handleNavClick}
					ariaLabel={t("ariaLabel")}
					languageToggleProps={languageToggleProps}
				/>

				<MobileNav
					navItems={navItems}
					activeHash={activeHash}
					onNavClick={handleNavClick}
					ariaLabel={t("ariaLabel")}
					isOpen={isOpen}
					onOpenChange={setIsOpen}
					languageToggleProps={languageToggleProps}
				/>
			</div>
		</header>
	)
}
