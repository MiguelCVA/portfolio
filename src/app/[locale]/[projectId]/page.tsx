import {
	IconBrandGithub,
	IconCode,
	IconDatabase,
	IconExternalLink,
	IconGardenCart,
	IconServer,
	IconShoppingCart,
	IconTrendingUp,
	IconUsers,
} from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { PaperDesignBackground } from "@/components/ui/neon-dither"

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ locale: string; projectId: string }>
}) {
	const { locale, projectId } = await params

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative flex h-[55vh] items-center justify-center border-white border-b">
				<div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
					<div className="border bg-background p-2">
						<IconGardenCart className="size-8" />
					</div>
					<h1 className="font-black text-3xl">Plataforma E-Commerce</h1>
					<p className="text-lg">
						Solução de e-commerce de alta performance com gerenciamento de
						estoque em tempo real e integração de pagamentos.
					</p>
				</div>
				<div className="absolute inset-0 -z-10">
					<PaperDesignBackground themeMode="dark" intensity={0.85} />
					<div className="absolute h-full w-full bg-background/50" />
				</div>
			</section>

			<div className="-translate-y-25 space-y-5">
				{/* Project Overview */}
				<section className="mx-auto mt-8 w-full max-w-7xl border border-white bg-background p-8">
					<h2 className="mb-6 font-bold text-3xl">Visão Geral</h2>
					<div className="space-y-4 text-gray-300">
						<p className="text-lg leading-relaxed">
							Esta plataforma de e-commerce foi desenvolvida para atender às
							demandas de um mercado cada vez mais exigente, oferecendo uma
							experiência de compra fluida e intuitiva. O sistema foi
							arquitetado pensando em escalabilidade e performance, suportando
							milhares de transações simultâneas sem comprometer a velocidade.
						</p>
						<p className="text-lg leading-relaxed">
							Implementamos recursos avançados como recomendações personalizadas
							baseadas em machine learning, gestão inteligente de estoque com
							alertas automáticos, e um dashboard analítico completo para tomada
							de decisões estratégicas. A integração com múltiplos gateways de
							pagamento garante flexibilidade e segurança nas transações.
						</p>
					</div>

					{/* Project Stats */}
					<div className="grid gap-4 pt-6 sm:grid-cols-4">
						<div className="space-y-2 border border-white/10 p-4">
							<IconUsers className="mb-2 size-6 text-blue-400" />
							<h3 className="font-semibold text-xl">Usuários Ativos</h3>
							<p className="font-bold text-2xl text-blue-400">50K+</p>
						</div>
						<div className="space-y-2 border border-white/10 p-4">
							<IconShoppingCart className="mb-2 size-6 text-green-400" />
							<h3 className="font-semibold text-xl">Transações/Mês</h3>
							<p className="font-bold text-2xl text-green-400">120K+</p>
						</div>
						<div className="space-y-2 border border-white/10 p-4">
							<IconTrendingUp className="mb-2 size-6 text-purple-400" />
							<h3 className="font-semibold text-xl">Tempo de Carregamento</h3>
							<p className="font-bold text-2xl text-purple-400">&lt;1.2s</p>
						</div>
						<div className="space-y-2 border border-white/10 p-4">
							<IconDatabase className="mb-2 size-6 text-orange-400" />
							<h3 className="font-semibold text-xl">Produtos Cadastrados</h3>
							<p className="font-bold text-2xl text-orange-400">25K+</p>
						</div>
					</div>
				</section>

				{/* Technical Stack */}
				<section className="mx-auto mt-8 w-full max-w-7xl border border-white bg-background p-8">
					<h2 className="mb-6 font-bold text-3xl">Stack Tecnológica</h2>
					<div className="grid gap-6 sm:grid-cols-3">
						<div className="space-y-4 border border-white/10 p-6">
							<div className="flex items-center gap-3">
								<IconCode className="size-6 text-blue-400" />
								<h3 className="font-semibold text-xl">Frontend</h3>
							</div>
							<div className="flex flex-wrap gap-2">
								{[
									"React",
									"Next.js",
									"TypeScript",
									"Tailwind CSS",
									"Redux Toolkit",
								].map((tech) => (
									<span
										key={tech}
										className="rounded border border-white/20 px-3 py-1 text-xs"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						<div className="space-y-4 border border-white/10 p-6">
							<div className="flex items-center gap-3">
								<IconServer className="size-6 text-green-400" />
								<h3 className="font-semibold text-xl">Backend</h3>
							</div>
							<div className="flex flex-wrap gap-2">
								{["Node.js", "Express", "GraphQL", "Redis", "JWT"].map(
									(tech) => (
										<span
											key={tech}
											className="rounded border border-white/20 px-3 py-1 text-xs"
										>
											{tech}
										</span>
									),
								)}
							</div>
						</div>

						<div className="space-y-4 border border-white/10 p-6">
							<div className="flex items-center gap-3">
								<IconDatabase className="size-6 text-purple-400" />
								<h3 className="font-semibold text-xl">Database & Cloud</h3>
							</div>
							<div className="flex flex-wrap gap-2">
								{[
									"PostgreSQL",
									"MongoDB",
									"AWS S3",
									"CloudFront",
									"Docker",
								].map((tech) => (
									<span
										key={tech}
										className="rounded border border-white/20 px-3 py-1 text-xs"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Key Features */}
				<section className="mx-auto mt-8 w-full max-w-7xl border border-white bg-background p-8">
					<h2 className="mb-6 font-bold text-3xl">Recursos Principais</h2>
					<div className="grid gap-6 sm:grid-cols-2">
						{[
							{
								title: "Gestão de Estoque em Tempo Real",
								description:
									"Sistema automatizado de controle de inventário com alertas inteligentes de reposição e sincronização multi-canal.",
							},
							{
								title: "Pagamentos Seguros",
								description:
									"Integração com Stripe, PayPal e PIX, com tokenização de cartões e prevenção avançada de fraudes.",
							},
							{
								title: "Dashboard Analítico",
								description:
									"Visualização em tempo real de métricas de vendas, comportamento do usuário e performance de produtos.",
							},
							{
								title: "Recomendações Personalizadas",
								description:
									"Engine de ML que analisa histórico de compras e navegação para sugerir produtos relevantes.",
							},
							{
								title: "Sistema de Avaliações",
								description:
									"Plataforma de reviews com moderação automatizada e verificação de compra confirmada.",
							},
							{
								title: "Carrinho Persistente",
								description:
									"Sincronização cross-device do carrinho de compras com recuperação de carrinhos abandonados.",
							},
						].map((feature, index) => (
							<div
								key={index}
								className="group space-y-3 border border-white/10 p-6 transition-all hover:border-white/30 hover:bg-white/5"
							>
								<h3 className="font-semibold text-xl">{feature.title}</h3>
								<p className="text-gray-400">{feature.description}</p>
							</div>
						))}
					</div>
				</section>

				{/* Challenges & Solutions */}
				<section className="mx-auto mt-8 w-full max-w-7xl border border-white bg-background p-8">
					<h2 className="mb-6 font-bold text-3xl">Desafios e Soluções</h2>
					<div className="space-y-6">
						<div className="border border-white/10 p-6">
							<h3 className="mb-3 font-semibold text-blue-400 text-xl">
								Escalabilidade em Black Friday
							</h3>
							<p className="mb-3 text-gray-300">
								O maior desafio foi garantir que o sistema suportasse picos de
								até 10x o tráfego normal durante eventos promocionais.
							</p>
							<p className="text-gray-400">
								<strong className="text-white">Solução:</strong> Implementamos
								arquitetura de microserviços com auto-scaling no AWS ECS, cache
								distribuído com Redis e CDN global para assets estáticos. O
								resultado foi 99.99% de uptime durante a Black Friday.
							</p>
						</div>

						<div className="border border-white/10 p-6">
							<h3 className="mb-3 font-semibold text-green-400 text-xl">
								Sincronização de Estoque Multi-canal
							</h3>
							<p className="mb-3 text-gray-300">
								Manter o estoque sincronizado entre loja física, e-commerce e
								marketplaces era propenso a overselling.
							</p>
							<p className="text-gray-400">
								<strong className="text-white">Solução:</strong> Desenvolvemos
								um sistema de reserva de estoque baseado em eventos com
								WebSockets, garantindo atualização em tempo real e lock otimista
								para prevenir conflitos de venda.
							</p>
						</div>

						<div className="border border-white/10 p-6">
							<h3 className="mb-3 font-semibold text-purple-400 text-xl">
								Performance de Busca
							</h3>
							<p className="mb-3 text-gray-300">
								Com 25K+ produtos, as buscas estavam lentas e os resultados
								pouco relevantes.
							</p>
							<p className="text-gray-400">
								<strong className="text-white">Solução:</strong> Integramos
								Elasticsearch com análise de sinônimos e fuzzy search, além de
								implementar faceted navigation e filtros dinâmicos. Tempo de
								resposta médio caiu de 3s para 180ms.
							</p>
						</div>
					</div>
				</section>

				{/* Project Links */}
				<section className="mx-auto mt-8 mb-8 w-full max-w-7xl border border-white bg-background p-8">
					<h2 className="mb-6 font-bold text-3xl">Links do Projeto</h2>
					<div className="flex flex-wrap gap-4">
						{/*<a
							href="#"
							className="flex items-center gap-2 border border-white/20 px-6 py-3 transition-all hover:border-white/50 hover:bg-white/5"
						>
							<IconExternalLink className="size-5" />
							<span>Ver Demo Online</span>
						</a>*/}
						<Button variant={"outline"} size={"lg"}>
							<IconExternalLink className="size-5" /> Ver Demo Online
						</Button>

						<Button variant={"outline"} size={"lg"}>
							<IconBrandGithub className="size-5" /> Código no GitHub
						</Button>

						{/*<a
							href="#"
							className="flex items-center gap-2 border border-white/20 px-6 py-3 transition-all hover:border-white/50 hover:bg-white/5"
						>
							<IconBrandGithub className="size-5" />
							<span>Código no GitHub</span>
						</a>*/}
					</div>
				</section>
			</div>
		</div>
	)
}
