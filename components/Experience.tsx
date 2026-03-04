"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    company: "Osano",
    location: "Remote",
    roles: [
      {
        title: "Senior Software Engineer",
        period: "Feb 2025 – Present",
        description:
          "Leading development of privacy compliance products. Built Compliance Check from inception to launch — a platform that scans websites and generates compliance artifacts for privacy analysis. Serving as SME on the Unified Consent product.",
      },
      {
        title: "Software Engineer",
        period: "Nov 2023 – Feb 2025",
        description:
          "Built and shipped the Unified Consent product from day one, an enterprise consent management suite that helps organizations manage user privacy preferences at scale.",
      },
    ],
  },
  {
    company: "WireWheel",
    location: "Arlington, VA",
    roles: [
      {
        title: "Software Engineer",
        period: "Aug 2023 – Nov 2023",
        description:
          "Continued development on the UPCP platform through WireWheel's acquisition by Osano, ensuring a smooth transition of the product that became the foundation for Osano's Unified Consent.",
      },
      {
        title: "Associate Software Engineer",
        period: "Jun 2022 – Aug 2023",
        description:
          "Built the Universal Privacy Control Platform (UPCP), which became the foundation for Osano's Unified Consent product after acquisition.",
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-dark-light py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey in software engineering"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-dark-border md:block" />

          <div className="space-y-12">
            {experiences.map((exp, expIndex) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: expIndex * 0.1 }}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1 hidden h-3 w-3 rounded-full border-2 border-accent bg-dark md:block" />

                <div className="rounded-xl border border-dark-border bg-dark-card p-6">
                  <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-semibold text-text-primary">
                      {exp.company}
                    </h3>
                    <span className="text-sm text-text-muted">{exp.location}</span>
                  </div>

                  <div className="space-y-6">
                    {exp.roles.map((role, roleIndex) => (
                      <div
                        key={roleIndex}
                        className={
                          roleIndex > 0
                            ? "border-t border-dark-border pt-6"
                            : ""
                        }
                      >
                        <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <h4 className="font-medium text-accent-light">
                            {role.title}
                          </h4>
                          <span className="text-sm text-text-muted">
                            {role.period}
                          </span>
                        </div>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {role.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
