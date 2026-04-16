"use client"

import { redirect, usePathname } from "next/navigation"
import { routing } from "@/i18n/routing"

export const CustomRedirect = () => {
	const pathname = usePathname()
	const pathWithoutLocale = "/" + pathname.split("/").slice(2).join("/")

	redirect(`/${routing.defaultLocale}/${pathWithoutLocale}`)
}
