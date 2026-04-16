import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/sections/footer"
import { routing } from "@/i18n/routing"
import "@/styles/globals.css"
import { CustomRedirect } from "./custom-redirect"

type Props = {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params

	const localeKey = locale as "en" | "pt-BR"
	if (!routing.locales.includes(localeKey)) {
		return <CustomRedirect />
	}

	const messages = await getMessages()

	return (
		<NextIntlClientProvider locale={localeKey} messages={messages}>
			<Header />
			<main className="space-y-8">{children}</main>
			<Footer />
		</NextIntlClientProvider>
	)
}
