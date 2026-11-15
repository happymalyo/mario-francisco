import { createFileRoute } from "@tanstack/react-router";
import { ContentsNavigation } from "../components/molecules/ContentsNavigation";
import { ContactLinks } from "../components/molecules/ContactLinks";
import { ProfileInfobox } from "../components/organisms/ProfileInfobox";
import { PortfolioSections, ProjectsSection, SkillsSection } from "../components/organisms/PortfolioSections";

export const Route = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Mario Francisco — Ingénieur logiciel Full-Stack, SaaS & IA" }] }),
	component: Home,
});

function Home() {
	return (
		<main className="page-shell">
			<article className="wiki-page">
				<div className="article-category">in: <a href="#competences">Ingénierie logicielle · SaaS · IA</a></div>
				<div className="language-label">English <span aria-hidden="true">⌄</span></div>
				<header className="article-heading">
					<h1>Mario Francisco R.</h1>
					<ContactLinks />
				</header>
				<div className="wiki-columns">
					<div className="article-main">
						<p className="article-intro"><strong>Mario Francisco</strong> est ingénieur logiciel Full-Stack. Depuis 2022, il développe des applications SaaS et automatise des workflows avec JavaScript/TypeScript, Node.js et l’IA. Il a lancé Sckoob (700+ utilisateurs, 100+ actifs quotidiens au premier mois) et contribué à des projets SaaS multi-équipes. Il privilégie des systèmes simples à mesurer et à faire évoluer.</p>
						<ContentsNavigation />
						<section className="article-section" id="biography">
							<h2>Présentation <span aria-hidden="true">☷</span></h2>
							<p>J’interviens sur des produits numériques de bout en bout : cadrage du besoin, architecture, développement, intégrations et déploiement. Je privilégie des outils fiables, simples à utiliser et prêts à évoluer.</p>
						</section>
						<SkillsSection />
					</div>
					<ProfileInfobox />
				</div>
				<ProjectsSection />
				<PortfolioSections />
			</article>
		</main>
	);
}
