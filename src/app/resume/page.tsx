import Timeline from '@/components/Timeline';

export default function ResumePage() {
  return (
    <section className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4 section-title">Resume</h1>
        <p className="text-lg text-gray-400 mb-2">Meghanad Kheti · Senior Full Stack Developer</p>
        <p className="text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
          Extensive experience in Core PHP and frameworks (CodeIgniter 4, Laravel) and Python/Django. Strong at API
          development, database design, and client collaboration. Frontend skills in HTML, CSS, JavaScript, Bootstrap.
          Built data pipelines (SQLAlchemy, Pandas, NumPy), scrapers (Selenium, Scrapy), and AI features (transcription,
          chatbots) leveraging LLMs like Llama2.
        </p>
      </header>

      {/* Interactive Timeline */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[var(--brand)] to-[var(--brand-600)] bg-clip-text text-transparent">
          Professional Journey
        </h2>
        <Timeline />
      </section>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <section className="bg-[var(--surface)]/30 backdrop-blur-sm rounded-2xl p-6 border border-[var(--border)]/20">
          <h2 className="font-bold mb-4 text-lg flex items-center gap-2">
            <span className="text-xl">⚡</span>
            Tools & Technologies
          </h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              'PHP', 'Python', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Django', 
              'Laravel', 'CodeIgniter 4', 'MySQL', 'MongoDB', 'SQLAlchemy', 'Pandas', 
              'NumPy', 'Selenium', 'Scrapy', 'BeautifulSoup', 'PyAutoGUI', 'Git', 'GitHub', 
              'Postman', 'XAMPP', 'Wamp', 'VSCode', 'WinSCP', 'Moqups', 'JSON', 'AJAX', 
              'Highcharts', 'amCharts', 'Llama2', 'Vicuna', 'Mistral', 'Bloom', 'ChatGPT', 'Claude'
            ].map((tech, index) => (
              <span 
                key={tech} 
                className="px-2 py-1 bg-[var(--brand)]/10 text-[var(--brand)] rounded-full border border-[var(--brand)]/20 hover:bg-[var(--brand)]/20 transition-colors duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-[var(--surface)]/30 backdrop-blur-sm rounded-2xl p-6 border border-[var(--border)]/20">
          <h2 className="font-bold mb-4 text-lg flex items-center gap-2">
            <span className="text-xl">🌍</span>
            Languages
          </h2>
          <div className="space-y-3">
            {[
              { lang: 'English', level: 90 },
              { lang: 'Hindi', level: 95 },
              { lang: 'Odia', level: 100 }
            ].map((item, index) => (
              <div key={item.lang} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{item.lang}</span>
                  <span className="text-[var(--brand)]">{item.level}%</span>
                </div>
                <div className="w-full bg-[var(--border)]/30 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[var(--brand)] to-[var(--brand-600)] rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${item.level}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[var(--surface)]/30 backdrop-blur-sm rounded-2xl p-6 border border-[var(--border)]/20">
          <h2 className="font-bold mb-4 text-lg flex items-center gap-2">
            <span className="text-xl">🎯</span>
            Interests
          </h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              { icon: '🤖', name: 'AI/ML' },
              { icon: '📚', name: 'Manga' },
              { icon: '📖', name: 'Manhwa' },
              { icon: '🎌', name: 'Anime' },
              { icon: '🎮', name: 'Gaming' },
              { icon: '💻', name: 'Coding' }
            ].map((interest, index) => (
              <div 
                key={interest.name} 
                className="flex items-center gap-2 p-2 rounded-lg bg-[var(--brand)]/5 hover:bg-[var(--brand)]/10 transition-colors duration-300 cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="group-hover:scale-110 transition-transform duration-300">{interest.icon}</span>
                <span className="text-gray-300 group-hover:text-[var(--brand)] transition-colors duration-300">{interest.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}


