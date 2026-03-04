"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const skills = {
  Frontend: ["React", "TypeScript", "JavaScript", "HTML5", "CSS", "Tailwind"],
  Backend: ["Node.js", "Python", "Express", "GraphQL", "Apollo"],
  Infrastructure: ["AWS", "Terraform", "Docker"],
  Databases: ["MySQL", "MongoDB"],
};

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="About Me" />

        <div className="grid gap-12 md:grid-cols-[280px_1fr]">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-dark-border">
              <Image
                src="/images/selfie.jpeg"
                alt="Shaquille Rivera"
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="mb-4 text-text-secondary leading-relaxed">
              I&apos;m a Senior Software Engineer at{" "}
              <span className="text-text-primary font-medium">Osano</span>, where I build
              privacy and compliance technology that helps organizations protect user data
              at scale. I specialize in building complex, user-facing products from the
              ground up — from initial architecture to production launch.
            </p>
            <p className="mb-8 text-text-secondary leading-relaxed">
              With 4+ years of professional experience and a Full Stack Development
              certificate from Georgia Tech, I&apos;m passionate about creating software
              that makes privacy accessible and compliance manageable for businesses of all
              sizes.
            </p>

            {/* Skills */}
            <div className="grid gap-4 sm:grid-cols-2">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="mb-2 text-sm font-medium text-text-muted uppercase tracking-wider">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-dark-card px-3 py-1 text-xs text-text-secondary border border-dark-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
