import { ContactIcon } from "../atoms/ContactIcon";
import { useState } from "react";

const skills = [
	"Développement produit : JavaScript, TypeScript, React, Next.js, Node.js (Express, NestJS, Fastify), Python, PHP, HTML/CSS",
	"SaaS & workflows : architecture multi-tenant, modélisation de workflows métier, orchestration et automatisation de tâches avec Inngest et n8n",
	"IA & agents : API OpenAI, LangChain, CrewAI, VoltAgent, PydanticAI; conception d’intégrations IA adaptées aux produits",
	"Agent, Harness & Factory Engineering : notions des approches et mise en pratique de certains patterns selon les projets",
	"System design & montée en charge : scaling up/out, event-driven architecture et architectures SaaS; concepts étudiés et appliqués selon le contexte",
	"Performance & données : optimisation de requêtes, batching, caching, streaming et database sharding; notions et mise en pratique ciblée",
	"Infrastructure & livraison : Docker, AWS (eu-west-3), Scaleway, OVH, GitHub Actions, GitLab CI/CD",
	"Qualité & collaboration : Clean Code, OAuth, RGPD, revues de code, leadership technique, communication et mentorat",
];

type Project = {
	name: string;
	image: string;
	url: string;
	description: string;
};

const projects: Project[] = [
	{
		name: "Sckoob",
		image: "/sckoob-project.png",
		url: "https://sckoob.com/",
		description: "Plateforme communautaire professionnelle anonyme, lancée sur les marchés africains et européens. Plus de 700 utilisateurs et 100+ utilisateurs actifs quotidiens au premier mois.",
	},
	{
		name: "Bandro Reisen",
		image: "/bandro-reisen-project.png",
		url: "https://madagaskar-bandroreisen.com/",
		description: "Site de circuits touristiques à Madagascar, avec des filtres par durée, difficulté, prix et centres d’intérêt.",
	},
];

const experience = [
	{
		company: "Irok",
		url: "https://www.irok.fr/",
		role: "Lead technique",
		period: "07/2025 – aujourd’hui",
		detail: "Pilotage de projets SaaS multi-tenant, coordination de 5 équipes d’ingénieurs sur 2 projets majeurs et accompagnement des pratiques de développement.",
	},
	{
		company: "Opportunity France",
		url: "https://www.oppycx.fr/",
		role: "Ingénieur Full-Stack",
		period: "06/2024 – 12/2024",
		detail: "Développement de fonctionnalités côté client et résolution de problèmes techniques de la plateforme.",
	},
	{
		company: "SmartPredict",
		url: "https://www.valanotech.com/en",
		role: "Ingénieur Full-Stack",
		period: "11/2023 – 05/2024",
		detail: "Automatisation du suivi des candidatures, refonte Gatsby vers Next.js et développement d’outils IA de recherche de données.",
	},
	{
		company: "Travelia Safari",
		url: "https://www.traveliasafari.com/",
		role: "Consultant développeur JavaScript",
		period: "02/2024 – 04/2024",
		detail: "Optimisation de la plateforme web et mise en place de protocoles d’authentification OAuth.",
	},
	{
		company: "Andine Groupe",
		url: "https://www.andine-groupe.com/en/home-2/",
		role: "Ingénieur Full-Stack",
		period: "06/2022 – 07/2023",
		detail: "Conception d’un système d’encodage pour les zones de stockage, afin d’améliorer l’organisation et la traçabilité logistiques.",
	},
	{
		company: "Ingenosya",
		url: "https://ingenosya.com/",
		role: "Stagiaire Full-Stack",
		period: "01/2020 – 04/2020",
		detail: "Réalisation d’une plateforme d’évaluation technique en ligne pour des candidats.",
	},
];

function SectionHeading({ children }: { children: React.ReactNode }) {
	return <h2>{children}<span aria-hidden="true">☷</span></h2>;
}

export function SkillsSection() {
	return <section className="article-section" id="competences"><SectionHeading>Compétences</SectionHeading><ul className="skills-list">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></section>;
}

export function ProjectsSection() {
	const [preview, setPreview] = useState<{ image: string; name: string } | null>(null);
	const [zoomed, setZoomed] = useState(false);
	const closePreview = () => {
		setPreview(null);
		setZoomed(false);
	};

	return (
		<section className="article-section projects-section" id="projets">
			<SectionHeading>Projets</SectionHeading>
			<div className="projects-grid">
				{projects.map(({ name, image, url, description }) => (
					<article className="project-card" key={name}>
						<button className="project-image-button" type="button" onClick={() => { setPreview({ image, name }); setZoomed(false); }} aria-label={`Agrandir la capture de ${name}`}>
							<img className="project-image" src={image} alt={`Capture du site ${name}`} />
						</button>
						<h3>{name}</h3>
						<a className="project-cta" href={url} target="_blank" rel="noreferrer">Voir le projet <span aria-hidden="true">↗</span></a>
						<span className="project-description">{description}</span>
					</article>
				))}
			</div>
			{preview && <div className={`project-lightbox${zoomed ? " is-zoomed" : ""}`} role="dialog" aria-modal="true" aria-label={`Capture du projet ${preview.name}`} tabIndex={-1} onKeyDown={(event) => { if (event.key === "Escape") closePreview(); }} onClick={(event) => { if (event.target === event.currentTarget) closePreview(); }}>
				<button className="project-lightbox-zoom" type="button" onClick={() => setZoomed(!zoomed)} aria-label={zoomed ? "Réduire l’image" : "Afficher l’image en taille réelle"}>{zoomed ? "−" : "+"}</button>
				<button className="project-lightbox-close" type="button" autoFocus onClick={closePreview} aria-label="Fermer l’image">×</button>
				<img className="project-lightbox-image" src={preview.image} alt={`Capture agrandie du projet ${preview.name}`} />
			</div>}
		</section>
	);
}

export function PortfolioSections() {
	return (
		<>
			<section className="article-section" id="experience">
				<SectionHeading>Expérience professionnelle</SectionHeading>
				<div className="experience-table-wrap">
					<table className="experience-table">
						<thead><tr><th>Entreprise</th><th>Poste</th><th>Période</th><th>Réalisations</th></tr></thead>
						<tbody>{experience.map(({ company, url, role, period, detail }) => (
							<tr key={company}><th scope="row"><a href={url} target="_blank" rel="noreferrer">{company}</a></th><td>{role}</td><td className="experience-period">{period}</td><td>{detail}</td></tr>
						))}</tbody>
					</table>
				</div>
			</section>
			<section className="article-section" id="mentorat">
				<SectionHeading>Leadership & mentorat</SectionHeading>
				<p>En tant que lead technique, j’ai contribué aux choix d’architecture, animé des revues de code et coordonné des projets impliquant plusieurs équipes. J’accorde de l’importance au mentorat : partager le contexte, rendre les décisions techniques compréhensibles et aider les développeurs à débloquer des problèmes. Le but est de faire progresser ensemble la qualité du produit et l’autonomie de l’équipe.</p>
			</section>
			<section className="article-section" id="formation">
				<SectionHeading>Formation</SectionHeading>
				<ul className="education-list">
					<li><strong><a href="https://www.emit.mg/" target="_blank" rel="noreferrer">Université de l’EMIT</a></strong> — Master 2 en informatique, modélisation et ingénierie logicielle (diplômé en novembre 2022).</li>
				</ul>
			</section>
			<section className="article-section" id="contact">
				<SectionHeading>Contact</SectionHeading>
				<p>Tu as un produit web à lancer, une application à faire évoluer ou un processus à automatiser avec l’IA ? Parlons de ton besoin et du résultat que tu veux obtenir.</p>
				<p className="contact-cta">
					<a href="https://wa.me/261344432719" target="_blank" rel="noreferrer"><ContactIcon name="whatsapp" /> (+261) 34 44 327 19</a>
					<a href="mailto:rtafitamario@gmail.com"><ContactIcon name="email" /> rtafitamario@gmail.com</a>
				</p>
			</section>
		</>
	);
}
