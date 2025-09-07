"use client";

import { useState, useEffect, useRef } from 'react';

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education' | 'course';
  icon: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "CUR8",
    period: "Jun 2024 – Apr 2025",
    description: "AI Pitch Analyser (Core PHP, Python) • Django APIs • MySQL optimization • Core PHP (Moodle) & Python issue resolution • JSON outputs with LangChain • Moodle plugins • CRM in Laravel + AJAX",
    type: "work",
    icon: "💼"
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Indev Consultancy Pvt. Ltd.",
    period: "Feb 2022 – Jun 2024",
    description: "Core PHP/CI4/Laravel projects • Android APIs • Client meetings • DB design • Utilities (YouTube downloader, translation, audio tools) • Scraping (Selenium/Scrapy/BS4/PyAutoGUI) • Transcription (SpeechRecognition/PyAudio) • Chatbots (LangChain/FAISS/HF Llama2/OpenAI) • LLMs (Mistral/LLaMA/Vicuna/T5/GPT-2/Falcon/Bloom) • Django & Core PHP APIs",
    type: "work",
    icon: "🚀"
  },
  {
    id: 3,
    title: "Various Roles",
    company: "ANS Group, Rose International, Robosapiens Technologies",
    period: "2016 – 2020",
    description: "Technical Recruiter, Associate Recruiter, Business Development Executive",
    type: "work",
    icon: "📋"
  },
  {
    id: 4,
    title: "100 Days of Code (Python)",
    company: "Udemy",
    period: "2021 – 2025",
    description: "Comprehensive Python programming course covering fundamentals to advanced concepts",
    type: "course",
    icon: "🐍"
  },
  {
    id: 5,
    title: "Laravel 8 E‑commerce A‑Z",
    company: "Udemy",
    period: "2021 – 2025",
    description: "Complete Laravel e-commerce development course",
    type: "course",
    icon: "🛒"
  },
  {
    id: 6,
    title: "Django 4 & Python Full Stack",
    company: "Udemy",
    period: "2021 – 2025",
    description: "Full-stack development with Django and Python",
    type: "course",
    icon: "🌐"
  },
  {
    id: 7,
    title: "B.Tech",
    company: "Nalanda Institute of Technology, Bhubaneswar",
    period: "2011 – 2015",
    description: "Bachelor of Technology degree",
    type: "education",
    icon: "🎓"
  }
];

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleItems(prev => new Set(prev).add(id));
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRefs = itemRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'var(--brand)';
      case 'education':
        return '#00e5ff';
      case 'course':
        return '#ff9500';
      default:
        return 'var(--brand)';
    }
  };

  return (
    <div className="relative" ref={timelineRef}>
      {/* Main timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--brand)] via-[var(--brand-600)] to-[var(--brand-700)] opacity-30" />
      
      {/* Progress line */}
      <div 
        className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-[var(--brand)] via-[var(--brand-600)] to-[var(--brand-700)] transition-all duration-1000"
        style={{
          height: `${(visibleItems.size / timelineData.length) * 100}%`,
        }}
      />

      <div className="space-y-8">
        {timelineData.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => { itemRefs.current[index] = el; }}
            data-id={item.id}
            className={`
              relative pl-20 transition-all duration-700 transform
              ${visibleItems.has(item.id) 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
              }
            `}
            style={{ 
              transitionDelay: `${index * 100}ms`
            }}
          >
            {/* Timeline node */}
            <div 
              className={`
                absolute left-6 w-6 h-6 rounded-full border-4 border-[var(--background)]
                flex items-center justify-center text-xs font-bold transition-all duration-500
                shadow-lg hover:scale-110 cursor-pointer
                ${visibleItems.has(item.id) 
                  ? 'animate-pulse shadow-2xl' 
                  : ''
                }
              `}
              style={{ 
                backgroundColor: getTypeColor(item.type),
                boxShadow: visibleItems.has(item.id) 
                  ? `0 0 20px ${getTypeColor(item.type)}50` 
                  : 'none'
              }}
            >
              <span className="text-white text-[10px]">{item.icon}</span>
            </div>

            {/* Content card */}
            <div 
              className={`
                relative bg-[var(--surface)]/50 backdrop-blur-sm rounded-2xl p-6 
                border border-[var(--border)]/30 transition-all duration-500
                hover:bg-[var(--surface)]/70 hover:border-[var(--border)]/60
                hover:shadow-2xl group overflow-hidden
                ${visibleItems.has(item.id) 
                  ? 'hover:shadow-2xl hover:-translate-y-1' 
                  : ''
                }
              `}
              style={{
                boxShadow: visibleItems.has(item.id)
                  ? `0 8px 32px ${getTypeColor(item.type)}15`
                  : 'none'
              }}
            >
              {/* Animated background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${getTypeColor(item.type)}20, transparent)`
                }}
              />
              
              {/* Header */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 
                      className="text-lg font-bold mb-1 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r"
                      style={{
                        '--tw-gradient-from': getTypeColor(item.type),
                        '--tw-gradient-to': `${getTypeColor(item.type)}80`
                      } as React.CSSProperties}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-400 font-medium">{item.company}</p>
                  </div>
                  
                  {/* Period badge */}
                  <div 
                    className="px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: `${getTypeColor(item.type)}15`,
                      borderColor: `${getTypeColor(item.type)}30`,
                      color: getTypeColor(item.type)
                    }}
                  >
                    {item.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {item.description}
                </p>

                {/* Type indicator */}
                <div className="mt-4 flex items-center gap-2">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: getTypeColor(item.type) }}
                  />
                  <span 
                    className="text-xs font-medium capitalize"
                    style={{ color: getTypeColor(item.type) }}
                  >
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Hover line effect */}
              <div 
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ backgroundColor: getTypeColor(item.type) }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Summary stats */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="text-center p-4 rounded-xl bg-[var(--surface)]/30 border border-[var(--border)]/20">
          <div className="text-2xl font-bold text-[var(--brand)]">
            {timelineData.filter(item => item.type === 'work').length}
          </div>
          <div className="text-sm text-gray-400">Work Experiences</div>
        </div>
        <div className="text-center p-4 rounded-xl bg-[var(--surface)]/30 border border-[var(--border)]/20">
          <div className="text-2xl font-bold" style={{ color: '#00e5ff' }}>
            {timelineData.filter(item => item.type === 'education').length}
          </div>
          <div className="text-sm text-gray-400">Education</div>
        </div>
        <div className="text-center p-4 rounded-xl bg-[var(--surface)]/30 border border-[var(--border)]/20">
          <div className="text-2xl font-bold" style={{ color: '#ff9500' }}>
            {timelineData.filter(item => item.type === 'course').length}
          </div>
          <div className="text-sm text-gray-400">Courses</div>
        </div>
      </div>
    </div>
  );
}
