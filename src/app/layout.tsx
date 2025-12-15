import type { Metadata } from "next"
import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google"
import "@/styles/globals.css"
import { IntroAnimation } from "@/components/intro-animation"
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

export default async function LocaleLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html className={cn(nunitoSans.variable, "dark")}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}

				<IntroAnimation />
			</body>
		</html>
	)
}
