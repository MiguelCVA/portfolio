"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export const IntroAnimation = () => {
	const [exit, setExit] = useState(false)
	const [hidden, setHidden] = useState(false)

	useEffect(() => {
		const timeout1 = setTimeout(() => {
			setExit(true)
		}, 500)

		const timeout2 = setTimeout(() => {
			setHidden(true)
		}, 700)

		return () => {
			clearTimeout(timeout1)
			clearTimeout(timeout2)
		}
	}, [])

	if (hidden) return null

	return (
		<div className="pointer-events-none fixed inset-0 z-9999 overflow-hidden">
			{/* Fundo secundário que desliza um pouco depois */}
			{/* <div
				className={cn(
					"absolute inset-0 bg-secondary transition-transform duration-700 ease-in-out",
					exit ? "translate-x-full" : "translate-x-0",
				)}
			/> */}
			<div
				className={cn(
					"absolute inset-0 bg-secondary transition-transform duration-700 ease-in-out",
					exit ? "translate-x-full" : "translate-x-0",
				)}
			/>

			{/* Camada principal com o texto */}
			<div
				className={cn(
					"absolute inset-0 flex items-center justify-center bg-background transition-all duration-500 ease-in-out",
					exit ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100",
				)}
			>
				<h1 className="inline-flex items-center gap-1.5 font-black font-serif text-7xl text-foreground">
					{/* <ZapIcon className="size-16" /> Thunder CMS */}
					{/* <ZapIcon className="size-96" /> */}
					MIGUEL CÂNEPA
				</h1>
			</div>
		</div>
	)
}
