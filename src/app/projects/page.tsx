type Project = {
  title: string;
  summary: string;
  tags: string[];
  links?: { live?: string; code?: string };
};

const projects: Project[] = [
  {
    title: "Learning Platform Enhancements",
    summary: "Custom Moodle/Django integrations with React frontends and role-based UX.",
    tags: ["Moodle", "Django", "React", "MySQL"],
  },
  {
    title: "RAG Knowledge Assistant",
    summary: "Built a LangChain RAG pipeline with vector search and prompt tooling.",
    tags: ["LangChain", "RAG", "LLM"],
  },
  {
    title: "Operations Portal",
    summary: "Laravel/CI backend APIs with React dashboards and AWS deployment.",
    tags: ["Laravel", "CodeIgniter", "React", "AWS"],
  },
];

import FadeInText from "@/components/FadeInText";
import StaggeredText from "@/components/StaggeredText";

export default function ProjectsPage() {
  return (
    <section>
      <FadeInText delay={100} direction="up">
        <h1 className="text-3xl font-bold tracking-tight mb-6 section-title">
          <StaggeredText text="Projects" staggerDelay={50} />
        </h1>
      </FadeInText>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {projects.map((p, index) => (
          <FadeInText key={p.title} delay={200 + index * 150} direction="up">
            <article className="rounded-lg border border-[var(--border)] p-5 bg-[var(--surface)] float-card">
              <h2 className="font-semibold text-lg">
                <StaggeredText text={p.title} staggerDelay={35} />
              </h2>
              <p className="text-sm text-gray-300 mb-3">{p.summary}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-1 rounded-md badge">{t}</span>
                ))}
              </div>
            </article>
          </FadeInText>
        ))}
      </div>
    </section>
  );
}

