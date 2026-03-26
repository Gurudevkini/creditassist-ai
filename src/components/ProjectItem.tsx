import { ExternalLink, Github } from "lucide-react";

interface ProjectItemProps {
  index: string;
  title: string;
  description: string;
  techStack: string;
  githubUrl?: string;
  externalUrl?: string;
}

export function ProjectItem({
  index,
  title,
  description,
  techStack,
  githubUrl,
  externalUrl,
}: ProjectItemProps) {
  return (
    <div className="group flex items-start gap-8 py-8 border-b border-white/10 last:border-b-0">
      <div className="text-2xl font-mono text-gray-500 flex-shrink-0">
        {index}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-2 group-hover:text-gray-300 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
        <p className="text-sm text-gray-500 mb-4">{techStack}</p>
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}