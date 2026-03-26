import Image from "next/image";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Section } from "@/components/Section";
import { ProjectItem } from "@/components/ProjectItem";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center px-6 pt-24">
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 items-center gap-16">
          {/* IMAGE */}
          <div className="flex justify-start">
            <Image
              src="/image/gurudev.png-removebg-preview.png"
              alt="Gurudev Kini"
              width={340}
              height={340}
              className="rounded-xl"
              priority
            />
          </div>

          {/* TEXT */}
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Hi, I&apos;m Gurudev Kini
            </h1>

            <p className="mt-6 text-gray-400 text-lg max-w-xl">
              Backend Developer focused on scalable systems, cloud, and AI.
            </p>

            <div className="mt-8 flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FileText size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <Section id="about">
        <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
        <p className="mt-6 text-gray-400 leading-relaxed max-w-4xl">
          I&apos;m a Computer Science undergraduate passionate about building scalable backend systems and leveraging AI to solve complex problems. With experience in cloud technologies and modern web development, I focus on creating efficient, maintainable solutions that make a real impact.
        </p>
      </Section>

      {/* PROJECTS SECTION */}
      <Section id="projects">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">Projects</h2>
        <div className="space-y-0">
          <ProjectItem
            index="01"
            title="CEC Maps"
            description="A comprehensive mapping solution for campus navigation with real-time updates and accessibility features."
            techStack="React, Node.js, PostgreSQL, Google Maps API"
            githubUrl="#"
            externalUrl="#"
          />
          <ProjectItem
            index="02"
            title="Kini's Chess Analyzer"
            description="An AI-powered chess analysis tool that provides move suggestions, game evaluation, and learning insights."
            techStack="Python, TensorFlow, Flask, React"
            githubUrl="#"
            externalUrl="#"
          />
          <ProjectItem
            index="03"
            title="Stock Recommendation System"
            description="A machine learning-based system for stock analysis and personalized investment recommendations."
            techStack="Python, scikit-learn, FastAPI, MongoDB"
            githubUrl="#"
            externalUrl="#"
          />
        </div>
      </Section>

      {/* INVOLVEMENT SECTION */}
      <Section id="involvement">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">Involvement</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Technical Lead - Student Developer Community</h3>
            <p className="text-gray-400">Leading workshops and mentoring junior developers in modern web technologies.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Open Source Contributor</h3>
            <p className="text-gray-400">Active contributor to various open-source projects focusing on backend optimization and API design.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Hackathon Organizer</h3>
            <p className="text-gray-400">Co-organizing university hackathons and promoting innovation in technology.</p>
          </div>
        </div>
      </Section>

      {/* SKILLS SECTION */}
      <Section id="skills">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Backend</h3>
            <div className="space-y-2 text-gray-400">
              <div>Node.js</div>
              <div>Python</div>
              <div>PostgreSQL</div>
              <div>MongoDB</div>
              <div>REST APIs</div>
              <div>GraphQL</div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Frontend</h3>
            <div className="space-y-2 text-gray-400">
              <div>React</div>
              <div>Next.js</div>
              <div>TypeScript</div>
              <div>Tailwind CSS</div>
              <div>JavaScript</div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Tools</h3>
            <div className="space-y-2 text-gray-400">
              <div>Docker</div>
              <div>AWS</div>
              <div>Git</div>
              <div>Linux</div>
              <div>CI/CD</div>
            </div>
          </div>
        </div>
      </Section>
      {/* CONTACT SECTION */}
      <Section id="contact">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Contact</h2>
        <p className="text-gray-400 mb-8">Let&apos;s connect and build something amazing together.</p>
        <div className="flex gap-6">
          <a
            href="mailto:gurudev@example.com"
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <Mail size={20} />
            Email
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </Section>
    </main>
  );
}