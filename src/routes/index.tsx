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
						<p className="article-intro"><strong>Ingénieur full-stack depuis 2022</strong>, j’intègre des agents IA en production pour automatiser les tâches répétitives. J’ai fondé Sckoob en mars 2026 : une communauté professionnelle anonyme accompagnée de Sckoobot, son agent IA. La plateforme compte plus de 700 utilisateurs et a dépassé 100 utilisateurs actifs quotidiens dès son premier mois.</p>
						<ContentsNavigation />
						<section className="article-section" id="biography">
							<h2>Présentation <span aria-hidden="true">☷</span></h2>
							<p>Je prends en charge le parcours du besoin à la production : architecture, API, développement, intégrations et automatisation des opérations. Mon objectif : livrer des systèmes lisibles, mesurables et capables d’évoluer sans complexité inutile.</p>
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
