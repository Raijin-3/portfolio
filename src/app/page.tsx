import Link from "next/link";
import AnimatedCard from "@/components/AnimatedCard";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 items-start">
      <section className="space-y-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
          UI/UX & Full‑Stack
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-prose">
          6 years total experience: Sales & HR foundations, a COVID sabbatical, then a self‑taught
          leap into code. I build accessible, performant, and elegant products.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/projects" className="btn-primary px-5 py-2.5 rounded-md text-sm font-medium shadow">
            View Projects
          </Link>
          <Link href="/contact" className="btn-outline px-5 py-2.5 rounded-md text-sm font-medium">
            Contact
          </Link>
        </div>
      </section>

      <section>
        <AnimatedCard className="p-6 sm:p-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Frontend:</strong> HTML, CSS, JS, React</li>
            <li><strong>Backend:</strong> Python, PHP, Django, Laravel, CodeIgniter</li>
            <li><strong>DB/Cloud:</strong> MySQL, AWS</li>
            <li><strong>Tools:</strong> GitHub, Postman, AJAX</li>
            <li><strong>AI:</strong> LLMs, LangChain, RAG</li>
          </ul>
        </AnimatedCard>
      </section>
    </div>
  );
}
