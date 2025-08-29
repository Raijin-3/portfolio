const groups = [
  { title: "Languages", items: ["PHP", "Python", "JavaScript"] },
  { title: "Frameworks", items: ["Django", "Laravel", "CodeIgniter 4", "Bootstrap"] },
  { title: "Frontend", items: ["HTML", "CSS", "jQuery"] },
  { title: "Databases", items: ["MySQL", "MongoDB"] },
  { title: "Data/Automation", items: ["SQLAlchemy", "Pandas", "NumPy", "Selenium", "Scrapy", "BeautifulSoup", "PyAutoGUI"] },
  { title: "AI/LLMs", items: ["Llama2", "Vicuna", "Mistral", "Bloom", "ChatGPT", "Claude", "FAISS", "LangChain"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "XAMPP", "Wamp", "VSCode", "WinSCP", "Moqups", "JSON", "AJAX", "Highcharts", "amCharts"] },
  { title: "OS", items: ["Windows", "Linux"] },
];

export default function SkillsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight mb-6 section-title">Skills</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div key={group.title} className="rounded-lg border border-[var(--border)] p-5 bg-[var(--surface)]">
            <h2 className="font-semibold mb-3">{group.title}</h2>
            <ul className="flex flex-wrap gap-2 text-sm text-gray-700 dark:text-gray-300">
              {group.items.map((item) => (
                <li key={item} className="px-2 py-1 rounded-md badge">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

