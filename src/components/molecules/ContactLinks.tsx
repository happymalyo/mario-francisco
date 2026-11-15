import { ContactIcon, type ContactIconName } from "../atoms/ContactIcon";

const contacts: { label: string; icon: ContactIconName; href: string }[] = [
	{ label: "WhatsApp", icon: "whatsapp", href: "https://wa.me/261344432719" },
	{ label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/happymalyo/" },
	{ label: "GitHub", icon: "github", href: "https://github.com/happymalyo" },
	{ label: "E-mail", icon: "email", href: "mailto:rtafitamario@gmail.com" },
];

export function ContactLinks() {
	return (
		<nav className="contact-links" aria-label="Contact links">
			{contacts.map(({ label, icon, href }) => (
				<a key={icon} className="contact-icon" href={href} title={label} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
					<ContactIcon name={icon} />
				</a>
			))}
		</nav>
	);
}
