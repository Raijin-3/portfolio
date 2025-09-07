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

import FadeInText from "@/components/FadeInText";
import StaggeredText from "@/components/StaggeredText";

type FeaturedSkill = { name: string; level: number };
const featured: FeaturedSkill[] = [
  { name: "PHP", level: 92 },
  { name: "Laravel", level: 90 },
  { name: "CodeIgniter 4", level: 88 },
  { name: "Python", level: 85 },
  { name: "Django", level: 84 },
  { name: "MySQL", level: 86 },
  { name: "React", level: 75 },
  { name: "Bootstrap", level: 80 },
];

export default function SkillsPage() {
  return (
    <section>
      <FadeInText delay={100} direction="up">
        <h1 className="text-3xl font-bold tracking-tight mb-6 section-title">
          <StaggeredText text="Skills" staggerDelay={50} />
        </h1>
      </FadeInText>
      {/* Core Skills with animated meters */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 items-stretch">
        {featured.map((s, idx) => (
          <FadeInText key={s.name} delay={150 + idx * 120} direction="up" className="h-full">
            <div className="h-full rounded-lg border border-[var(--border)] p-4 bg-[var(--surface)] float-card equal-card-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-100">
                  <StaggeredText text={s.name} staggerDelay={25} />
                </span>
                <span className="text-sm text-[var(--brand-600)] font-semibold">{s.level}%</span>
              </div>
              <div className="skill-meter" aria-label={`${s.name} proficiency`}>
                <div
                  className="skill-meter-fill"
                  style={{ ['--pct' as any]: `${s.level}%`, ['--delay' as any]: `${200 + idx * 120}ms` }}
                />
              </div>
            </div>
          </FadeInText>
        ))}
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {groups.map((group, index) => (
          <FadeInText key={group.title} delay={200 + index * 120} direction="up" className="h-full">
            <div className="h-full rounded-lg border border-[var(--border)] p-5 bg-[var(--surface)] float-card equal-card">
              <h2 className="font-semibold mb-3">
                <StaggeredText text={group.title} staggerDelay={40} />
              </h2>
              <ul className="flex flex-wrap gap-2 text-sm text-gray-300">
                {group.items.map((item) => (
                  <li key={item} className="px-2 py-1 rounded-md badge hover:scale-[1.03] transition-transform duration-200">{item}</li>
                ))}
              </ul>
            </div>
          </FadeInText>
        ))}
      </div>
    </section>
  );
}

