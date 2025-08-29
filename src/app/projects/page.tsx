type Project = {
  title: string;
  summary: string;
  tags: string[];
  links?: { live?: string; code?: string };
};

const projects: Project[] = [
  {
    title: "Learning Platform Enhancements",
    summary: "Custom Moodle/Django integrations with React frontends and role‑based UX.",
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

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight mb-6 section-title">Projects</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="rounded-lg border border-[var(--border)] p-5 bg-[var(--surface)]">
            <h2 className="font-semibold text-lg">{p.title}</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{p.summary}</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {p.tags.map((t) => (
                <span key={t} className="px-2 py-1 rounded-md badge">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

