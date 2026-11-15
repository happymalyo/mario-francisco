import { useState } from "react";

type TocSection = { id: string; label: string; children?: { id: string; label: string }[] };

const sections: TocSection[] = [
	{ id: "biography", label: "Présentation" },
	{ id: "competences", label: "Compétences" },
	{ id: "projets", label: "Projets" },
	{ id: "experience", label: "Expérience professionnelle" },
	{ id: "mentorat", label: "Leadership & mentorat" },
	{ id: "soft-skills", label: "Soft skills & langues" },
	{ id: "formation", label: "Formation" },
	{ id: "contact", label: "Contact" },
];

export function ContentsNavigation() {
	const [visible, setVisible] = useState(true);
	const copyContentsLink = async () => {
		await navigator.clipboard?.writeText(`${window.location.href}#contents`);
	};

	return (
		<nav className="wiki-toc-card" id="contents" aria-label="Contents">
			<div className="contents-title">
				<span className="contents-icon" aria-hidden="true">☷</span>
				<strong>Contents</strong>
				<button type="button" className="contents-toggle" onClick={() => setVisible(!visible)}>
					[{visible ? "hide" : "show"}]
				</button>
				<button type="button" className="contents-copy" aria-label="Copy contents link" title="Copy link" onClick={copyContentsLink}>
					<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="5" y="3" width="8" height="10"/><path d="M3 11V2h8"/></svg>
				</button>
			</div>
			{visible && <ol className="contents-list">
				{sections.map(({ id, label, children }) => (
					<li key={id}>
						<a href={`#${id}`}>{label}</a>
						{children && <ol>{children.map((child) => <li key={child.id}><a href={`#${child.id}`}>{child.label}</a></li>)}</ol>}
					</li>
				))}
			</ol>}
		</nav>
	);
}
