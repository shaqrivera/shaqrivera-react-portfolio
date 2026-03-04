"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Compliance Check",
    description:
      "A website scanning and privacy compliance analysis platform. Scans web properties, generates compliance artifacts, and provides actionable insights for privacy teams to assess and improve their compliance posture.",
    tags: ["React", "TypeScript", "Node.js", "AWS", "GraphQL"],
    type: "Osano",
  },
  {
    title: "Unified Consent",
    description:
      "Enterprise consent management suite that helps organizations manage user privacy preferences at scale. Built from day one, handling millions of consent interactions across global web properties.",
    tags: ["React", "TypeScript", "GraphQL", "Apollo", "Terraform"],
    type: "Osano",
  },
  {
    title: "Real Estate Lead Extractor",
    description:
      "Automated public data extraction tool built for real estate investors. Aggregates and processes publicly available property and owner data to generate qualified leads.",
    tags: ["Python", "Node.js", "MongoDB"],
    type: "Personal",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Projects"
          subtitle="Products and tools I've built"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col rounded-xl border border-dark-border bg-dark-card p-6 transition-all duration-300 hover:border-accent/30 hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {project.type}
                </span>
                <FiExternalLink className="text-text-muted transition-colors group-hover:text-accent" />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-text-primary">
                {project.title}
              </h3>

              <p className="mb-6 flex-1 text-sm text-text-secondary leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-dark px-2.5 py-1 text-xs text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
