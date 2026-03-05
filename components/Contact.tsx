"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import Button from "./Button";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:me@shaqrivera.com",
    icon: FaEnvelope,
    display: "me@shaqrivera.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/shaqrivera",
    icon: FaGithub,
    display: "github.com/shaqrivera",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shaquille-rivera-b18b11150/",
    icon: FaLinkedin,
    display: "Shaquille Rivera",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-dark-light py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading title="Get in Touch" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-text-secondary"
        >
          I&apos;m always open to discussing new opportunities, interesting projects,
          or just connecting with fellow engineers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-dark-border bg-dark-card px-6 py-4 text-text-secondary transition-all hover:border-accent/30 hover:text-text-primary"
            >
              <link.icon size={20} className="text-accent" />
              <span className="text-sm">{link.display}</span>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button href="mailto:me@shaqrivera.com">Send me an email</Button>
        </motion.div>
      </div>
    </section>
  );
}
