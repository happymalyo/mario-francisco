export function ProfileInfobox() {
	return (
		<aside className="infobox" aria-label="Mario Francisco information">
			<h2>Mario Francisco R.</h2>
			<div className="portrait-placeholder">
				<img src="/mario-francisco.png" alt="Mario Francisco" />
			</div>
			<h3>Informations professionnelles</h3>
			<dl>
				<div><dt>Profil</dt><dd>Ingénieur logiciel Full-Stack</dd></div>
				<div><dt>Spécialités</dt><dd>SaaS · IA · automatisation</dd></div>
				<div><dt>Expérience</dt><dd>Depuis 2022</dd></div>
			</dl>
			<div className="infobox-footer">Disponible pour missions freelance</div>
		</aside>
	);
}
