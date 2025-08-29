export default function ContactPage() {
  return (
    <section className="max-w-xl">
      <h1 className="text-3xl font-bold tracking-tight mb-6 section-title">Contact</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">Available for full‑time roles and freelance engagements.</p>
      <ul className="space-y-2 text-sm">
        <li>
          <a className="underline text-[var(--brand-700)]" href="mailto:mkgganesh@gmail.com">mkgganesh@gmail.com</a>
        </li>
        <li>
          <span className="text-gray-700 dark:text-gray-300">Phone: +91 8093759699</span>
        </li>
        <li>
          <a className="underline text-[var(--brand-700)]" href="https://www.linkedin.com/in/meghanad-kheti-a8a7997a/" target="_blank" rel="noreferrer">LinkedIn</a>
        </li>
        <li className="text-gray-700 dark:text-gray-300">Location: Gurugram, Haryana</li>
      </ul>
    </section>
  );
}

