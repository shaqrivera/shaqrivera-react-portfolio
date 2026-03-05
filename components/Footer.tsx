import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/shaqrivera",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shaquille-rivera-b18b11150/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:me@shaqrivera.com",
    icon: FaEnvelope,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Shaquille Rivera
        </p>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-accent"
              aria-label={link.label}
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
