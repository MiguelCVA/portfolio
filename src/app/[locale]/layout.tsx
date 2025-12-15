import type { Metadata } from "next"
import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/sections/footer"
import { routing } from "@/i18n/routing"
import "@/styles/globals.css"
import { cn } from "@/lib/utils"

const nunitoSans = Nunito_Sans({ variable: "--font-sans" })

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Miguel Cânepa Portfolio",
	description:
		"Portfolio website of Miguel Cânepa, a software developer specializing in web development and modern technologies.",
	icons: {
		icon: "/favicon.ico",
	},
}

type Props = {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params
	if (!routing.locales.includes(locale as any)) {
		notFound()
	}

	const messages = await getMessages()

	return (
		<html lang={locale} className={cn(nunitoSans.variable, "dark")}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<NextIntlClientProvider messages={messages}>
					<Header />
					<main className="space-y-8">{children}</main>
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
