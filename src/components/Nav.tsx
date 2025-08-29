"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
      <Link href="/" className="font-semibold">Meghanad Kheti</Link>

      <button
        className="sm:hidden inline-flex items-center justify-center rounded-md border border-[var(--border)] px-3 py-2 text-sm"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        Menu
      </button>

      <ul className="hidden sm:flex gap-4 text-sm">
        <li><Link href="/about" className="hover:text-[var(--brand)]">About</Link></li>
        <li><Link href="/skills" className="hover:text-[var(--brand)]">Skills</Link></li>
        <li><Link href="/experience" className="hover:text-[var(--brand)]">Experience</Link></li>
        <li><Link href="/projects" className="hover:text-[var(--brand)]">Projects</Link></li>
        <li><Link href="/resume" className="hover:text-[var(--brand)]">Resume</Link></li>
        <li><Link href="/contact" className="hover:text-[var(--brand)]">Contact</Link></li>
      </ul>

      {open && (
        <div className="sm:hidden absolute left-0 right-0 top-[56px] border-t border-[var(--border)] bg-[var(--surface)]">
          <ul className="px-4 py-3 space-y-2 text-sm">
            <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link href="/skills" onClick={() => setOpen(false)}>Skills</Link></li>
            <li><Link href="/experience" onClick={() => setOpen(false)}>Experience</Link></li>
            <li><Link href="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
            <li><Link href="/resume" onClick={() => setOpen(false)}>Resume</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}


