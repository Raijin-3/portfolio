import TypewriterText from "@/components/TypewriterText";
import FadeInText from "@/components/FadeInText";
import WordByWordReveal from "@/components/WordByWordReveal";
import StaggeredText from "@/components/StaggeredText";
import GlitchText from "@/components/GlitchText";

export default function AboutPage() {
  return (
    <section className="rounded-2xl border border-[var(--border)] p-6 sm:p-10 bg-gradient-to-br from-[var(--surface)] to-[var(--surface)]/50 backdrop-blur-sm">
      <div className="grid gap-10 items-start">
        {/* Animated Header */}
        <div className="space-y-6">
          <FadeInText delay={100} direction="up">
            <h1 className="text-4xl font-bold tracking-tight section-title text-shimmer">
              <GlitchText text="About Me" className="text-5xl" />
            </h1>
          </FadeInText>

          <FadeInText delay={300} direction="up">
            <div className="flex items-center gap-3 text-xl text-[var(--brand-600)]">
              <span className="text-2xl animate-bounce">✨</span>
              <TypewriterText
                text="Passionate Developer & Problem Solver"
                speed={70}
                delay={800}
                className="font-semibold"
              />
            </div>
          </FadeInText>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Text Content */}
          <div className="space-y-6">
            {/* Introduction */}
            <FadeInText delay={600} direction="up">
              <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--brand)]/5 to-[var(--brand-600)]/10 border border-[var(--brand)]/20 space-y-4">
                <WordByWordReveal
                  text="I&apos;m Meghanad Kheti, a Senior Full Stack Developer with strong experience in Core PHP and frameworks like CodeIgniter 4 and Laravel, plus Python/Django. I build APIs, architect databases, and collaborate closely with teams and clients."
                  className="text-gray-300 leading-relaxed text-lg"
                  delay={1200}
                  wordDelay={120}
                />
                <div>
                  <h3 className="text-[var(--brand)] font-semibold mb-2">At a glance</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>Core PHP with CodeIgniter 4 and Laravel</li>
                    <li>Python/Django for robust backend services</li>
                    <li>RESTful API design and integration</li>
                    <li>Relational database architecture and optimization</li>
                    <li>Close collaboration with teams and clients</li>
                  </ul>
                </div>
              </div>
            </FadeInText>

            {/* Technical Journey */}
            <FadeInText delay={900} direction="up">
              <div className="space-y-4">
                <StaggeredText
                  text="💡 My Technical Journey"
                  className="text-2xl font-bold text-[var(--brand)] mb-4"
                  staggerDelay={60}
                />

                <WordByWordReveal
                  text="On the frontend, I work with HTML, CSS, JavaScript, and Bootstrap to deliver fast, accessible interfaces. I've shipped diverse solutions: data validation with SQLAlchemy, Pandas, NumPy; web scraping using Selenium and Scrapy; custom audio transcription; and chatbot systems powered by LLMs (Llama2, Vicuna, Mistral, Bloom)."
                  className="text-gray-300 leading-relaxed"
                  delay={2000}
                  wordDelay={100}
                />
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-[var(--brand-600)] mb-2">Quick snapshot</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                    <li>Backend: Core PHP (CI4, Laravel), Python/Django</li>
                    <li>APIs: REST design, authentication, integrations</li>
                    <li>Data: MySQL/PostgreSQL modeling and performance</li>
                    <li>Collaboration: Agile workflows with teams and clients</li>
                  </ul>
                </div>
              </div>
            </FadeInText>

            {/* Philosophy */}
            <FadeInText delay={1200} direction="up">
              <div className="p-6 rounded-xl bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">💭</span>
                  <div>
                    <StaggeredText
                      text="My Philosophy"
                      className="text-xl font-bold text-red-400 mb-3"
                      staggerDelay={50}
                    />
                    <TypewriterText
                      text="I enjoy turning complex requirements into reliable, maintainable software that solves real-world problems."
                      speed={50}
                      delay={3000}
                      className="text-red-300 text-lg morph-text"
                    />
                  </div>
                </div>
              </div>
            </FadeInText>
          </div>

          {/* Skills & Achievements Side */}
          <div className="space-y-6">
            {/* Core Expertise */}
            <FadeInText delay={800} direction="left">
              <div className="p-6 rounded-xl border border-[var(--border)] hover:border-[var(--brand)]/30 transition-all duration-300 hover:shadow-lg">
                <StaggeredText
                  text="⚡ Core Expertise"
                  className="text-2xl font-bold text-[var(--brand)] mb-4"
                  staggerDelay={70}
                />

                <div className="grid gap-3">
                  {[
                    { icon: "🔧", skill: "Full-Stack Development", level: "Expert" },
                    { icon: "🐍", skill: "Python & Django", level: "Advanced" },
                    { icon: "🐘", skill: "PHP & Laravel", level: "Expert" },
                    { icon: "⚛️", skill: "React & Frontend", level: "Proficient" },
                    { icon: "🗄️", skill: "Database Design", level: "Advanced" },
                    { icon: "🤖", skill: "AI & Machine Learning", level: "Intermediate" }
                  ].map((item, index) => (
                    <FadeInText key={item.skill} delay={1400 + index * 150} direction="left">
                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-[var(--brand)]/5 transition-all duration-300 group">
                        <div className="flex items-center gap-3">
                          <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                          </span>
                          <span className="font-medium text-gray-200">
                            {item.skill}
                          </span>
                        </div>
                        <span className="text-sm text-[var(--brand-600)] font-semibold px-2 py-1 rounded-full bg-[var(--brand)]/10">
                          {item.level}
                        </span>
                      </div>
                    </FadeInText>
                  ))}
                </div>
              </div>
            </FadeInText>

            {/* Achievement Stats */}
            <FadeInText delay={1000} direction="left">
              <div className="p-6 rounded-xl bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30">
                <StaggeredText
                  text="🏆 Achievements"
                  className="text-2xl font-bold text-red-400 mb-4"
                  staggerDelay={60}
                />

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "💼", number: "3+", label: "Years Experience" },
                    { icon: "🚀", number: "15+", label: "Projects Delivered" },
                    { icon: "⚡", number: "5", label: "Tech Stacks" },
                    { icon: "🎯", number: "100%", label: "Client Satisfaction" }
                  ].map((stat, index) => (
                    <FadeInText key={stat.label} delay={1600 + index * 100}>
                      <div className="text-center p-3 rounded-lg bg-gray-800/50">
                        <div className="text-2xl mb-1">{stat.icon}</div>
                        <div className="text-2xl font-bold text-red-400 pulse-text">
                          {stat.number}
                        </div>
                        <div className="text-xs text-red-300 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </FadeInText>
                  ))}
                </div>
              </div>
            </FadeInText>

            {/* Contact CTA */}
            <FadeInText delay={1800} direction="left">
              <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--brand)]/10 to-[var(--brand-600)]/5 border border-[var(--brand)]/30 text-center">
                <div className="space-y-4">
                  <div className="text-2xl">📬</div>
                  <TypewriterText
                    text="Let's build something amazing together!"
                    speed={60}
                    delay={4000}
                    className="text-lg font-semibold text-[var(--brand)]"
                  />
                  <div className="pt-2">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-600)] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <span>✉️</span>
                      <StaggeredText text="Get In Touch" staggerDelay={40} />
                    </a>
                  </div>
                </div>
              </div>
            </FadeInText>
          </div>
        </div>
      </div>
    </section>
  );
}

