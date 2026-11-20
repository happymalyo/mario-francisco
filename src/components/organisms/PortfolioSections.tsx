import { ContactIcon } from "../atoms/ContactIcon";
import { useRef, useState } from "react";
import type { Locale } from "../../i18n";

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
const skillsEn = [
	["Product development", "JavaScript/TypeScript, React, Next.js, Node.js (Express, NestJS, Fastify), Python, and PHP."],
	["SaaS & automation", "Multi-tenant systems, business workflows, Inngest, n8n, and scheduled jobs (cron)."],
	["Data & integrations", "PostgreSQL, MongoDB, Redis, Elasticsearch, S3, REST and GraphQL APIs."],
	["Queues & real time", "RabbitMQ, Cloudflare Queues, Ably, WebSockets, and Cloudflare Durable Objects."],
	["AI & agents", "OpenAI API, LangChain, CrewAI, VoltAgent, PydanticAI, and OpenClaw; familiar with Agent, Harness, and Factory Engineering concepts, with some patterns applied in projects."],
	["Front-end architecture", "Atomic Design, Feature-Sliced Design (FSD), and Container/Presentational."],
	["Cloud & local environments", "AWS, Docker, GitHub Actions, GitLab CI/CD, Floci, and LocalStack."],
];
const projectEn: Record<string, { shortDescription: string; details: string }> = {
	Agassi: {
		shortDescription: "A French-language learning platform where children aged 6 to 10 explore animals and space through eight interactive lessons.",
		details: "Rouxy the fox welcomes children aged 6 to 10 to a 3D campsite. Eight lessons in French explore animals and space, from identifying animal tracks to discovering how stars form. Each lesson includes an activity and a quiz that unlocks a badge. Built with Next.js, React, TypeScript, Three.js, and GSAP.",
	},
	"Ekraw Studios": {
		shortDescription: "A digital studio website showcasing custom web and mobile apps, online stores, and AI chatbots.",
		details: "Visitors can explore the studio’s services, from designing a visual identity to building an online store or integrating a chatbot. Built with Next.js 14, React 18, TypeScript and Tailwind CSS, the site uses next-intl for French and English, Zustand for chat state and Firebase Firestore to store project inquiries. GSAP and ScrollTrigger animate the cards on the About page as visitors scroll.",
	},
	Sckoob: {
		shortDescription: "A bilingual professional community for anonymous discussions about salaries, careers, and job listings. Sign-up is available without an email address.",
		details: "Founded in March 2026, Sckoob is a bilingual professional community for anonymous discussions about salaries, careers, and job listings. Members can sign up without an email address. Google and Microsoft sign-in are also available; email addresses are neither stored nor hashed, and are replaced with a dummy identifier. Sckoob is accompanied by Sckoobot, its AI agent. The platform has collected over 2,000 job listings, with 100+ new listings per day. Stack: Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, Prisma, tRPC, and Python.",
	},
	"Bandro Reisen": {
		shortDescription: "A bilingual tour website for Madagascar, with a back office for managing tours and bookings.",
		details: "A German–English website showcasing tours and tailor-made trips in Madagascar. Its back office manages tours and bookings; the site does not handle payments. Built with Next.js, React, TypeScript, Payload CMS, and PostgreSQL. 12 traveler testimonials published.",
	},
};
const experienceEn: Record<string, { role: string; period: string; detail: string }> = {
	Irok: { role: "Project Lead", period: "07/2025 – present", detail: "Led selected projects, including two major initiatives involving five engineering teams. Contributed to a multi-tenant SaaS product and to engineering practices." },
	"Opportunity France": { role: "Full-Stack Engineer", period: "06/2024 – 12/2024", detail: "Developed client-facing features and resolved technical issues across the platform." },
	SmartPredict: { role: "Full-Stack Engineer", period: "11/2023 – 05/2024", detail: "Automated application tracking, migrated the site from Gatsby to Next.js, and built AI tools for data discovery." },
	"Travelia Safari": { role: "JavaScript Developer Consultant", period: "02/2024 – 04/2024", detail: "Optimized the web platform and implemented OAuth authentication protocols." },
	"Andine Groupe": { role: "Full-Stack Engineer", period: "06/2022 – 07/2023", detail: "Designed an encoding system for storage areas to improve logistics organization and traceability." },
	Ingenosya: { role: "Full-Stack Intern", period: "01/2020 – 04/2020", detail: "Built an online technical assessment platform for candidates." },
};

type Project = {
	name: string;
	image: string;
	url: string;
	shortDescription: string;
	details: string;
};

const projects: Project[] = [
	{
		name: "Agassi",
		image: "/agassi-project.webp",
		url: "https://happymalyo.github.io/agassi/",
		shortDescription: "Une plateforme éducative en français où les 6 à 10 ans explorent les animaux et l’espace à travers huit leçons interactives.",
		details: "Rouxy le renard accueille les enfants de 6 à 10 ans dans son campement en 3D. Huit leçons en français les invitent à reconnaître des traces d’animaux ou à découvrir comment naissent les étoiles. Chaque leçon propose une activité et un quiz pour gagner un badge. Le projet utilise Next.js, React, TypeScript, Three.js et GSAP.",
	},
	{
		name: "Ekraw Studios",
		image: "/ekraw-studios-project.webp",
		url: "https://ekraw-studios.vercel.app/en",
		shortDescription: "Site vitrine d’un studio numérique spécialisé dans les applications web et mobiles, les boutiques en ligne et les chatbots IA.",
		details: "Le site présente les services d’Ekraw Studios, de la création d’une identité visuelle au développement d’une boutique en ligne ou à l’intégration d’un chatbot. Développé avec Next.js 14, React 18, TypeScript et Tailwind CSS, le site utilise next-intl pour le français et l’anglais, Zustand pour gérer l’état du chat et Firebase Firestore pour enregistrer les demandes de projet. GSAP et ScrollTrigger animent les cartes de la page À propos au fil du défilement.",
	},
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

export function SkillsSection({ locale = "fr" }: { locale?: Locale }) {
	const en = locale === "en";
	return (
		<section className="article-section" id="competences">
			<SectionHeading>{en ? "Skills" : "Compétences"}</SectionHeading>
			<ul className="skills-list">{skills.map(({ area, details }, index) => <li key={area}><strong>{en ? skillsEn[index]?.[0] : area}{en ? ":" : " :"}</strong> {en ? skillsEn[index]?.[1] : details}</li>)}</ul>
			<div className="system-design-note"><h3>Architecture & {en ? "performance" : "performance"}</h3><p>{en ? "System design, monoliths and microservices, scaling up and out, event-driven architecture, query optimization, batching, caching, streaming, and database sharding. I understand these approaches and have applied some of them in projects." : systemDesignTopics}</p></div>
		</section>
	);
}

function ProjectDescription({ summary, details, locale }: { summary: string; details: string; locale: Locale }) {
	const [expanded, setExpanded] = useState(false);
	const en = locale === "en";
	return (
		<div className="project-description">
			<p>{expanded ? details : summary}</p>
			<button type="button" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>
				{expanded ? (en ? "Show less" : "Voir moins") : (en ? "Show more" : "Voir plus")}
			</button>
		</div>
	);
}

export function ProjectsSection({ locale = "fr" }: { locale?: Locale }) {
	const en = locale === "en";
	const [previewIndex, setPreviewIndex] = useState<number | null>(null);
	const preview = previewIndex === null ? null : projects[previewIndex];
	const swipeStart = useRef<{ x: number; y: number } | null>(null);
	const [zoomed, setZoomed] = useState(false);
	const closePreview = () => {
		setPreviewIndex(null);
		setZoomed(false);
	};

	function movePreview(step: number) {
		setPreviewIndex(index => index === null ? null : (index + step + projects.length) % projects.length);
		setZoomed(false);
	}

	return (
		<section className="article-section projects-section" id="projets">
			<SectionHeading>{en ? "Projects" : "Projets"}</SectionHeading>
			<div className="projects-grid">
				{projects.map(({ name, image, url, shortDescription, details }, index) => (
					<article className="project-card" key={name}>
						<button className="project-image-button" type="button" onClick={() => { setPreviewIndex(index); setZoomed(false); }} aria-label={`${en ? "Enlarge screenshot of" : "Agrandir la capture de"} ${name}`}>
							<img className="project-image" src={image} alt={`${en ? "Screenshot of" : "Capture du site"} ${name}`} />
						</button>
						<a className="project-cta" href={url} target="_blank" rel="noreferrer">{en ? "View project" : "Voir le projet"} <span aria-hidden="true">↗</span></a>
						<h3>{name}</h3>
						<ProjectDescription
							summary={en ? projectEn[name].shortDescription : shortDescription}
							details={en ? projectEn[name].details : details}
							locale={locale}
						/>
					</article>
				))}
			</div>
			{preview && <div className={`project-lightbox${zoomed ? " is-zoomed" : ""}`} role="dialog" aria-modal="true" aria-label={`${en ? "Project screenshot" : "Capture du projet"} ${preview.name}`} tabIndex={-1} onKeyDown={(event) => {
				if (event.key === "Escape") closePreview();
				if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
					event.preventDefault();
					movePreview(event.key === "ArrowLeft" ? -1 : 1);
				}
			}} onClick={(event) => { if (event.target === event.currentTarget) closePreview(); }}>
				<button className="project-lightbox-zoom" type="button" onClick={() => setZoomed(!zoomed)} aria-label={zoomed ? (en ? "Zoom out" : "Réduire l’image") : (en ? "View image at full size" : "Afficher l’image en taille réelle")}>{zoomed ? "−" : "+"}</button>
				<button className="project-lightbox-close" type="button" autoFocus onClick={closePreview} aria-label={en ? "Close image" : "Fermer l’image"}>×</button>
				<a className="project-cta lightbox-project-link" href={preview.url} target="_blank" rel="noreferrer">{en ? "View project" : "Voir le projet"} <span aria-hidden="true">↗</span></a>
				<button type="button" className="lightbox-prev" onClick={() => movePreview(-1)} aria-label={en ? "Previous project" : "Projet précédent"}>‹</button>
				<button type="button" className="lightbox-next" onClick={() => movePreview(1)} aria-label={en ? "Next project" : "Projet suivant"}>›</button>
				<img className="project-lightbox-image"
					onTouchStart={(event) => {
						const touch = event.touches[0];
						swipeStart.current = !zoomed && event.touches.length === 1 ? { x: touch.clientX, y: touch.clientY } : null;
					}}
					onTouchCancel={() => { swipeStart.current = null; }}
					onTouchEnd={(event) => {
						const start = swipeStart.current;
						swipeStart.current = null;
						if (!start || event.touches.length) return;
						const touch = event.changedTouches[0];
						const dx = touch.clientX - start.x;
						if (Math.abs(dx) >= 48 && Math.abs(dx) > Math.abs(touch.clientY - start.y)) movePreview(dx < 0 ? 1 : -1);
					}} src={preview.image} alt={`${en ? "Enlarged screenshot of" : "Capture agrandie du projet"} ${preview.name}`} />
			</div>}
		</section>
	);
}

export function PortfolioSections({ locale = "fr" }: { locale?: Locale }) {
	const en = locale === "en";
	return (
		<>
			<section className="article-section" id="experience">
				<SectionHeading>{en ? "Professional experience" : "Expérience professionnelle"}</SectionHeading>
				<div className="experience-table-wrap">
					<table className="experience-table">
						<thead><tr><th>{en ? "Company" : "Entreprise"}</th><th>{en ? "Role" : "Poste"}</th><th>{en ? "Period" : "Période"}</th><th>{en ? "Highlights" : "Réalisations"}</th></tr></thead>
						<tbody>{experience.map(({ company, url, role, period, detail }) => (
							<tr key={company}><th scope="row"><a href={url} target="_blank" rel="noreferrer">{company}</a></th><td>{en ? experienceEn[company]?.role : role}</td><td className="experience-period">{en ? experienceEn[company]?.period : period}</td><td>{en ? experienceEn[company]?.detail : detail}</td></tr>
						))}</tbody>
					</table>
				</div>
			</section>
			<section className="article-section" id="mentorat">
				<SectionHeading>{en ? "Leadership & mentoring" : "Leadership & mentorat"}</SectionHeading>
				<p>{en ? "As a project lead, I facilitate collaboration between teams, clarify technical decisions, and help remove blockers. I contribute to code reviews and shared practices to improve quality without slowing delivery. Mentoring means sharing context and helping people find independent solutions." : "Dans mes missions de project lead, je facilite la collaboration entre équipes, clarifie les décisions techniques et aide à lever les blocages. Je contribue aux revues de code et au partage de pratiques pour renforcer la qualité sans ralentir la livraison. Le mentorat passe pour moi par la transmission du contexte et l’accompagnement vers des solutions autonomes."}</p>
			</section>
			<section className="article-section" id="soft-skills">
				<SectionHeading>{en ? "Soft skills & languages" : "Soft skills & langues"}</SectionHeading>
				<div className="soft-skills-grid">
					<div><h3>{en ? "Collaboration" : "Collaboration"}</h3><ul>{(en ? ["Leadership and project coordination", "Technical and cross-functional communication", "Mentoring and knowledge sharing", "Product mindset and agile methods"] : ["Leadership et coordination de projet", "Communication technique et interfonctionnelle", "Mentorat et partage de connaissances", "Sens produit et méthodes agiles"]).map((text) => <li key={text}>{text}</li>)}</ul></div>
					<div><h3>{en ? "Languages" : "Langues"}</h3><ul><li>{en ? "French" : "Français"}</li><li>{en ? "English" : "Anglais"}</li></ul></div>
				</div>
			</section>
			<section className="article-section" id="formation">
				<SectionHeading>{en ? "Education" : "Formation"}</SectionHeading>
				<ul className="education-list">
					<li><strong><a href="https://www.emit.mg/" target="_blank" rel="noreferrer">{en ? "EMIT University" : "Université de l’EMIT"}</a></strong> — {en ? "Master’s degree in computer science, modeling, and software engineering (graduated November 2022)." : "Master 2 en informatique, modélisation et ingénierie logicielle (diplômé en novembre 2022)."}</li>
				</ul>
			</section>
			<section className="article-section" id="contact">
				<SectionHeading>{en ? "Contact" : "Contact"}</SectionHeading>
				<p>{en ? "Do you have a web product to launch, an application to improve, or a process to automate with AI? Let’s talk about your needs and the outcome you want." : "Tu as un produit web à lancer, une application à faire évoluer ou un processus à automatiser avec l’IA ? Parlons de ton besoin et du résultat que tu veux obtenir."}</p>
				<p className="contact-cta">
					<a href="https://wa.me/261344432719" target="_blank" rel="noreferrer"><ContactIcon name="whatsapp" /> (+261) 34 44 327 19</a>
					<a href="mailto:rtafitamario@gmail.com"><ContactIcon name="email" /> rtafitamario@gmail.com</a>
				</p>
			</section>
		</>
	);
}
