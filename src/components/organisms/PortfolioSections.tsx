import { ContactIcon } from "../atoms/ContactIcon";
import { useState } from "react";

const skills = [
	{ area: "Développement produit", details: "JavaScript/TypeScript, React, Next.js, Node.js (Express, NestJS, Fastify); Python et PHP." },
	{ area: "SaaS & automatisation", details: "Systèmes multi-tenant, workflows métier, Inngest, n8n et planification de tâches (cron jobs)." },
	{ area: "Données & intégration", details: "PostgreSQL, MongoDB, Redis, Elasticsearch, S3, API REST et GraphQL." },
	{ area: "Queues & temps réel", details: "RabbitMQ, Cloudflare Queues, Ably, WebSockets et Cloudflare Durable Objects." },
	{ area: "IA & agents", details: "OpenAI API, LangChain, CrewAI, VoltAgent, PydanticAI et OpenClaw; notions d’Agent, Harness et Factory Engineering, avec certains patterns appliqués en projet." },
	{ area: "Architecture front-end", details: "Atomic Design, Feature-Sliced Design (FSD), Container/Presentational." },
	{ area: "Cloud & environnements locaux", details: "AWS, Docker, GitHub Actions, GitLab CI/CD, Floci et LocalStack." },
];

const systemDesignTopics = "System design, monolithes et microservices, scaling up/out, event-driven architecture, optimisation de requêtes, batching, caching, streaming et database sharding. Je connais ces approches et en ai déjà appliqué certaines dans des projets.";

type Project = {
	name: string;
	image: string;
	url: string;
	shortDescription: string;
	details: string;
};

const projects: Project[] = [
	{
		name: "Sckoob",
		image: "/sckoob-project.png",
		url: "https://sckoob.com/",
		shortDescription: "Communauté professionnelle bilingue pour échanger anonymement sur les salaires, les carrières et les offres d’emploi. Inscription possible sans e-mail.",
		details: "Fondée en mars 2026, Sckoob est une communauté professionnelle bilingue où l’on échange anonymement sur les salaires, les carrières et les offres d’emploi. L’inscription peut se faire sans adresse e-mail. La connexion Google ou Microsoft est également proposée ; l’adresse e-mail n’est ni conservée ni hachée, et sa valeur est remplacée par un identifiant factice. Sckoob est accompagné de Sckoobot, son agent IA. Plus de 2 000 offres collectées, avec 100+ nouvelles offres par jour. Stack : Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, Prisma, tRPC et Python.",
	},
	{
		name: "Bandro Reisen",
		image: "/bandro-reisen-project.png",
		url: "https://madagaskar-bandroreisen.com/",
		shortDescription: "Site bilingue de circuits à Madagascar, avec un back-office pour gérer les circuits et les réservations.",
		details: "Site bilingue allemand–anglais présentant les circuits et voyages sur mesure à Madagascar. Son back-office permet de gérer les circuits et les réservations ; le site ne gère pas les paiements. Développé avec Next.js, React, TypeScript, Payload CMS et PostgreSQL. 12 témoignages de voyageurs publiés.",
	},
];

const experience = [
	{
		company: "Irok",
		url: "https://www.irok.fr/",
		role: "Project Lead",
		period: "07/2025 – aujourd’hui",
		detail: "Pilotage de certains projets, dont deux projets majeurs mobilisant cinq équipes d’ingénieurs. Contribution au développement d’un SaaS multi-tenant et aux pratiques de développement.",
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
	return (
		<section className="article-section" id="competences">
			<SectionHeading>Compétences</SectionHeading>
			<ul className="skills-list">{skills.map(({ area, details }) => <li key={area}><strong>{area} :</strong> {details}</li>)}</ul>
			<div className="system-design-note"><h3>Architecture & performance</h3><p>{systemDesignTopics}</p></div>
		</section>
	);
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
				{projects.map(({ name, image, url, shortDescription, details }) => (
					<article className="project-card" key={name}>
						<button className="project-image-button" type="button" onClick={() => { setPreview({ image, name }); setZoomed(false); }} aria-label={`Agrandir la capture de ${name}`}>
							<img className="project-image" src={image} alt={`Capture du site ${name}`} />
						</button>
						<h3>{name}</h3>
						<span className="project-mobile-description">{shortDescription}</span>
						<a className="project-cta" href={url} target="_blank" rel="noreferrer">Voir le projet <span aria-hidden="true">↗</span></a>
						<span className="project-description">{details}</span>
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
				<p>Dans mes missions de project lead, je facilite la collaboration entre équipes, clarifie les décisions techniques et aide à lever les blocages. Je contribue aux revues de code et au partage de pratiques pour renforcer la qualité sans ralentir la livraison. Le mentorat passe pour moi par la transmission du contexte et l’accompagnement vers des solutions autonomes.</p>
			</section>
			<section className="article-section" id="soft-skills">
				<SectionHeading>Soft skills & langues</SectionHeading>
				<div className="soft-skills-grid">
					<div><h3>Collaboration</h3><ul><li>Leadership et coordination de projet</li><li>Communication technique et interfonctionnelle</li><li>Mentorat et partage de connaissances</li><li>Sens produit et méthodes agiles</li></ul></div>
					<div><h3>Langues</h3><ul><li>Français</li><li>Anglais</li></ul></div>
				</div>
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
