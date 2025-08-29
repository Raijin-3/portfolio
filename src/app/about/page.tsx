import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="rounded-2xl border border-[var(--border)] p-6 sm:p-10">
      <div className="grid gap-8 items-start">
        <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight section-title">About</h1>
        <p className="text-gray-700 dark:text-gray-300">
          I’m <strong>Meghanad Kheti</strong>, a Senior Full Stack Developer with strong experience in Core PHP and
          frameworks like <strong>CodeIgniter 4</strong> and <strong>Laravel</strong>, plus <strong>Python/Django</strong>. I build APIs, architect
          databases, and collaborate closely with teams and clients. On the frontend, I work with <strong>HTML, CSS,
          JavaScript, Bootstrap</strong> to deliver fast, accessible interfaces.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          I’ve shipped diverse solutions: data validation with <strong>SQLAlchemy, Pandas, NumPy</strong>; web scraping
          using <strong>Selenium</strong> and <strong>Scrapy</strong>; custom audio transcription; and chatbot systems powered by
          <strong>LLMs</strong> (Llama2, Vicuna, Mistral, Bloom). I enjoy turning complex requirements into reliable, maintainable
          software.
        </p>
        </div>
      </div>
    </section>
  );
}

