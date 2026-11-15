export type ContactIconName = "whatsapp" | "linkedin" | "github" | "email";

const iconClass: Record<ContactIconName, string> = {
	whatsapp: "fa-brands fa-whatsapp",
	linkedin: "fa-brands fa-linkedin-in",
	github: "fa-brands fa-github",
	email: "fa-solid fa-envelope",
};

export function ContactIcon({ name }: { name: ContactIconName }) {
	return <i className={iconClass[name]} aria-hidden="true" />;
}
