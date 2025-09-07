import Link from "next/link";
import AnimatedCard from "@/components/AnimatedCard";
import AnimatedTitle from "@/components/AnimatedTitle";
import TypewriterText from "@/components/TypewriterText";
import FadeInText from "@/components/FadeInText";
import WordByWordReveal from "@/components/WordByWordReveal";
import StaggeredText from "@/components/StaggeredText";

export default function Home() {
  const titles = [
    "Full-Stack Developer",
    "Senior Software Engineer", 
    "AI & ML Enthusiast",
    "Problem Solver",
    "Code Artist"
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 items-start">
      <section className="space-y-8">
        {/* Animated Main Title */}
        <div className="space-y-4">
          <FadeInText delay={100} className="text-lg font-medium text-[var(--brand)] text-shimmer">
            👋 Hello, I'm Meghanad Kheti
          </FadeInText>
          
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
            <AnimatedTitle 
              titles={titles}
              className="block text-float"
              speed={80}
              pauseDuration={3000}
            />
          </h1>
          
          <FadeInText delay={500} direction="up" className="text-xl font-medium text-[var(--brand-600)] pulse-text">
            <TypewriterText 
              text="Crafting Digital Experiences with Code & Creativity"
              speed={60}
              delay={1500}
            />
          </FadeInText>
        </div>

        {/* Animated Description */}
        <FadeInText delay={800} direction="up" duration={1000}>
          <WordByWordReveal 
            text="I'm a senior full-stack developer with 3+ years of experience building production web apps in PHP (Laravel, CodeIgniter) and Python (Django), plus hands-on work with LLMs and data pipelines. At CUR8, I built an AI Pitch Analyzer in PHP/Python, developed a Laravel-based CRM, optimized MySQL performance, and shipped Moodle plugins."
            className="text-gray-300 max-w-prose leading-relaxed"
            delay={2800}
            wordDelay={150}
          />
        </FadeInText>

        <FadeInText delay={1200} direction="up">
          <p className="text-gray-400 max-w-prose morph-text">
            I enjoy turning messy data into reliable, user-friendly products that make a difference.
          </p>
        </FadeInText>

        {/* Animated Action Buttons */}
        <FadeInText delay={1500} direction="up" className="flex flex-wrap gap-4">
          <Link 
            href="/projects" 
            className="group btn-primary px-6 py-3 rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            <span className="flex items-center gap-2">
              🚀 <StaggeredText text="View Projects" staggerDelay={30} />
            </span>
          </Link>
          <Link 
            href="/contact" 
            className="group btn-outline px-6 py-3 rounded-xl text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              💬 <StaggeredText text="Let's Talk" staggerDelay={30} />
            </span>
          </Link>
        </FadeInText>

        {/* Status Badge */}
        <FadeInText delay={2000} direction="right">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-900/20 to-red-800/20 border border-red-500/30 rounded-full">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <TypewriterText 
              text="Available for exciting projects!"
              speed={40}
              delay={3000}
              className="text-sm text-red-400 font-medium"
            />
          </div>
        </FadeInText>
      </section>

      <section className="space-y-6">
        <FadeInText delay={1800} direction="left">
          <AnimatedCard className="p-6 sm:p-8 hover:shadow-2xl transition-all duration-500">
            {/* Skills Header */}
            <div className="mb-6">
              <StaggeredText 
                text="⚡ Tech Stack" 
                className="text-2xl font-bold text-[var(--brand)] mb-2"
                staggerDelay={80}
              />
              <div className="h-1 w-16 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-600)] rounded-full"></div>
            </div>

            <ul className="grid grid-cols-1 gap-4 text-sm">
              {[
                { icon: "🎨", label: "Frontend:", tech: "HTML, CSS, JS, React, Bootstrap" },
                { icon: "⚙️", label: "Backend:", tech: "Python, PHP, Django, Laravel, CodeIgniter" },
                { icon: "🗄️", label: "Database:", tech: "MySQL, MongoDB, SQLAlchemy" },
                { icon: "🛠️", label: "Tools:", tech: "GitHub, Postman, AJAX, Docker" },
                { icon: "🤖", label: "AI/ML:", tech: "LLMs, LangChain, RAG, Pandas, NumPy" },
                { icon: "☁️", label: "Cloud:", tech: "AWS, Linux, CI/CD" }
              ].map((item, index) => (
                <li key={item.label} className="group">
                  <FadeInText 
                    delay={2200 + index * 200} 
                    direction="up"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-[var(--brand)]/5 transition-all duration-300"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <div>
                      <strong className="text-[var(--brand)] font-semibold">
                        {item.label}
                      </strong>
                      <span className="ml-2 text-gray-300">
                        {item.tech}
                      </span>
                    </div>
                  </FadeInText>
                </li>
              ))}
            </ul>
          </AnimatedCard>
        </FadeInText>

        {/* Fun Stats Card */}
        <FadeInText delay={2500} direction="left">
          <AnimatedCard className="p-6 bg-gradient-to-br from-[var(--brand)]/5 via-transparent to-[var(--brand-600)]/5 border-[var(--brand)]/20">
            <div className="text-center space-y-4">
              <StaggeredText 
                text="📊 Fun Stats"
                className="text-xl font-bold text-[var(--brand)]"
                staggerDelay={60}
              />
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                {[
                  { number: "3+", label: "Years Experience" },
                  { number: "50+", label: "Projects Built" },
                  { number: "100K+", label: "Lines of Code" },
                  { number: "∞", label: "Coffee Consumed" }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <FadeInText delay={3000 + index * 150}>
                      <div className="text-2xl font-bold text-[var(--brand)] pulse-text">
                        {stat.number}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {stat.label}
                      </div>
                    </FadeInText>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>
        </FadeInText>
      </section>
    </div>
  );
}