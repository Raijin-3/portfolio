import FadeInText from "@/components/FadeInText";
import StaggeredText from "@/components/StaggeredText";
import TypewriterText from "@/components/TypewriterText";

export default function ContactPage() {
  const items = [
    { label: "Email", value: "mkgganesh@gmail.com", href: "mailto:mkgganesh@gmail.com" },
    { label: "Phone", value: "+91 8093759699" },
    { label: "LinkedIn", value: "linkedin.com/in/meghanad-kheti-a8a7997a", href: "https://www.linkedin.com/in/meghanad-kheti-a8a7997a/" },
    { label: "Location", value: "Gurugram, Haryana" },
  ];

  return (
    <section className="max-w-xl">
      <FadeInText delay={100} direction="up">
        <h1 className="text-3xl font-bold tracking-tight mb-6 section-title">
          <StaggeredText text="Contact" staggerDelay={50} />
        </h1>
      </FadeInText>
      <FadeInText delay={250} direction="up">
        <p className="text-gray-300 mb-4">
          <TypewriterText
            text="Available for full-time roles and freelance engagements."
            speed={50}
            delay={400}
          />
        </p>
      </FadeInText>
      <ul className="space-y-2 text-sm">
        {items.map((it, idx) => (
          <FadeInText key={it.label} delay={400 + idx * 150} direction="up">
            <li>
              {it.href ? (
                <a className="underline text-[var(--brand)]" href={it.href} target={it.href.startsWith('http') ? '_blank' : undefined} rel={it.href.startsWith('http') ? 'noreferrer' : undefined}>
                  {it.value}
                </a>
              ) : (
                <span className="text-gray-300">{it.label}: {it.value}</span>
              )}
            </li>
          </FadeInText>
        ))}
      </ul>
    </section>
  );
}

