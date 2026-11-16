import { createFileRoute, useNavigate } from "@tanstack/react-router";
import type { Locale } from "../i18n";
import { ContentsNavigation } from "../components/molecules/ContentsNavigation";
import { ContactLinks } from "../components/molecules/ContactLinks";
import { ProfileInfobox } from "../components/organisms/ProfileInfobox";
import { PortfolioSections, ProjectsSection, SkillsSection } from "../components/organisms/PortfolioSections";

export const Route = createFileRoute("/{-$locale}")({
  beforeLoad: ({ params }) => {
    if (params.locale && params.locale !== "fr" && params.locale !== "en") {
      throw new Error(`Unsupported locale: ${params.locale}`);
    }
    return { locale: (params.locale ?? "en") as Locale };
  },
  head: ({ params }) => ({
    meta: [{ title: params.locale === "fr" ? "Mario Francisco — Ingénieur logiciel Full-Stack, SaaS & IA" : "Mario Francisco — Full-Stack Software Engineer, SaaS & AI" }],
    links: [{ rel: "icon", href: "/favicon.ico", sizes: "any" }],
  }),
  component: Home,
});

function Home() {
  const { locale } = Route.useRouteContext();
  const en = locale === "en";
  const navigate = useNavigate();
  return (
    <main className="page-shell">
      <div className="site-brand"><img className="wiki-brand" src="/mario-francisco-logo.png" alt="Mario Francisco Randrianandrasana" /></div>
      <article className="wiki-page">
        <div className="article-category">{en ? "in:" : "in:"} <a href="#competences">{en ? "Software engineering · SaaS · AI" : "Ingénierie logicielle · SaaS · IA"}</a></div>
        <label className="language-label" aria-label={en ? "Choose language" : "Choisir la langue"}>
          <svg className="language-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>
          <select value={locale} onChange={(event) => navigate({ to: "/{-$locale}", params: { locale: event.target.value === "en" ? undefined : "fr" } })}>
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </label>
        <header className="article-heading"><h1>Mario Francisco R.</h1><ContactLinks /></header>
        <div className="wiki-columns">
          <div className="article-main">
            <p className="article-intro">{en ? <><strong>Full-stack engineer since 2022</strong>, I put AI agents into production to automate repetitive tasks. I founded Sckoob in March 2026: an anonymous professional community accompanied by Sckoobot, its AI agent. The platform has over 700 users and passed 100 daily active users in its first month.</> : <><strong>Ingénieur full-stack depuis 2022</strong>, j’intègre des agents IA en production pour automatiser les tâches répétitives. J’ai fondé Sckoob en mars 2026 : une communauté professionnelle anonyme accompagnée de Sckoobot, son agent IA. La plateforme compte plus de 700 utilisateurs et a dépassé 100 utilisateurs actifs quotidiens dès son premier mois.</>}</p>
            <ContentsNavigation locale={locale} />
            <section className="article-section" id="biography"><h2>{en ? "About" : "Présentation"} <span aria-hidden="true">☷</span></h2><p>{en ? "I handle the journey from requirements to production: architecture, APIs, development, integrations, and operations automation. My goal is to deliver clear, measurable systems that can grow without unnecessary complexity." : "Je prends en charge le parcours du besoin à la production : architecture, API, développement, intégrations et automatisation des opérations. Mon objectif : livrer des systèmes lisibles, mesurables et capables d’évoluer sans complexité inutile."}</p></section>
            <SkillsSection locale={locale} />
          </div>
          <ProfileInfobox locale={locale} />
        </div>
        <ProjectsSection locale={locale} /><PortfolioSections locale={locale} />
      </article>
    </main>
  );
}
