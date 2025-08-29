type TimelineItem = {
  period: string;
  title: string;
  details: string;
};

const timeline: TimelineItem[] = [
  {
    period: "Jun 2024 – Apr 2025",
    title: "Senior Full Stack Developer · CUR8",
    details: [
      "Built AI Pitch Analyser in Core PHP and Python (Transform+)",
      "Created Python/Django APIs for AI-driven features",
      "Optimized MySQL queries to speed up page loads",
      "Resolved Core PHP (Moodle) and Python issues across modules",
      "Implemented JSON outputs from LLMs using LangChain",
      "Developed Moodle plugins",
      "Built a CRM with Laravel + AJAX for leads, tasks, agent tracking, and employee management",
    ].join(" • "),
  },
  {
    period: "Feb 2022 – Jun 2024",
    title: "Software Engineer · Indev Consultancy Pvt. Ltd.",
    details: [
      "Delivered projects in Core PHP, CodeIgniter 4, Laravel",
      "Built Android-consumed APIs in Core PHP",
      "Led client meetings and daily technical syncs",
      "Designed and maintained databases per project needs",
      "Built utilities: YouTube downloader, translation, audio-to-audio",
      "Web scraping with Selenium, Scrapy, BeautifulSoup, PyAutoGUI",
      "Custom audio transcription (SpeechRecognition, PyAudio)",
      "Audio-to-audio and audio-to-text chatbots using LangChain, FAISS, HuggingFace (Llama2) and OpenAI (ChatGPT-3.5)",
      "Extracted relevant information from audio clips",
      "Experimented with LLMs: Mistral, LLaMA, Vicuna, T5, GPT-2, Falcon, Bloom",
      "APIs using Django and Core PHP",
    ].join(" • "),
  },
  {
    period: "2019 – 2020",
    title: "Technical Recruiter · ANS Group",
    details: "Sourcing and screening candidates across technical roles.",
  },
  {
    period: "2019",
    title: "Associate Recruiter · Rose International",
    details: "Partnered with stakeholders for hiring pipelines.",
  },
  {
    period: "2016 – 2019",
    title: "Business Development Executive · Robosapiens Technologies",
    details: "Client engagement, demos, and business growth initiatives.",
  },
];

export default function ExperiencePage() {
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight mb-6 section-title">Experience</h1>
      <ol className="relative border-s border-[var(--border)] pl-2 sm:pl-4">
        {timeline.map((item) => (
          <li key={item.period} className="ms-4 sm:ms-6 mb-8">
            <span className="absolute -start-3.5 rounded-full bg-[var(--brand)] h-3 w-3 mt-2" />
            <time className="text-xs text-gray-500">{item.period}</time>
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{item.details}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

