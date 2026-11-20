import type { Locale } from "../../i18n";

export function ProfileInfobox({ locale = "fr" }: { locale?: Locale }) {
	const en = locale === "en";
	return (
		<aside className="infobox" aria-label="Mario Francisco information">
			<h2>Mario Francisco R.</h2>
			<div className="portrait-placeholder">
				<img src="/mario-francisco.png" alt="Mario Francisco" />
			</div>
			<h3>{en ? "Professional information" : "Informations professionnelles"}</h3>
			<dl>
				<div><dt>{en ? "Profile" : "Profil"}</dt><dd>{en ? "Full-Stack Software Engineer" : "Ingénieur logiciel Full-Stack"}</dd></div>
				<div><dt>{en ? "Specialties" : "Spécialités"}</dt><dd>SaaS · {en ? "AI · automation" : "IA · automatisation"}</dd></div>
				<div><dt>{en ? "Experience" : "Expérience"}</dt><dd>{en ? "Since 2022" : "Depuis 2022"}</dd></div>
			</dl>
			<a className="resume-download" href={en ? "/resumes/Resume-Mario-Francisco-EN.pdf" : "/resumes/CV-Mario-Francisco-FR.pdf"} download>
				<i className="fa-solid fa-download" aria-hidden="true" />
				{en ? "Download résumé (PDF)" : "Télécharger le CV (PDF)"}
			</a>
			<div className="infobox-footer">{en ? "Available for freelance work" : "Disponible pour missions freelance"}</div>
		</aside>
	);
}
