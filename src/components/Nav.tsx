"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Floating orb that follows cursor */}
      <div 
        className="fixed pointer-events-none z-30 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.4) 0%, rgba(16,185,129,0.1) 40%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <nav className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
        ${scrolled 
          ? 'backdrop-blur-xl bg-[var(--background)]/80 shadow-2xl shadow-[var(--brand)]/10 border-b border-[var(--border)]/50' 
          : 'bg-transparent'
        }
      `}>
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand)]/5 via-transparent to-[var(--brand-600)]/5 opacity-0 hover:opacity-100 transition-opacity duration-700" />
        
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between relative">
          {/* Unified Logo */}
          <Link 
            href="/" 
            className="group relative font-bold text-xl tracking-tight hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            {/* Combined Logo - Initials with Name */}
            <div className="relative flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-600)] flex items-center justify-center text-white font-black text-sm shadow-lg group-hover:shadow-xl group-hover:shadow-red-500/50 transition-all duration-300">
                MK
              </div>
              <span className="relative z-10 bg-gradient-to-r from-[var(--brand)] via-[var(--brand-600)] to-[var(--brand-700)] bg-clip-text text-transparent">
                Meghanad Kheti
              </span>
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-[var(--brand)]/20 via-[var(--brand-600)]/20 to-[var(--brand-700)]/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          {/* Futuristic mobile menu button */}
          <button
            className={`
              sm:hidden relative inline-flex items-center justify-center w-12 h-12 rounded-xl
              bg-gradient-to-br from-[var(--surface)] to-[var(--surface)]/80 backdrop-blur-sm
              border border-[var(--border)] shadow-lg hover:shadow-xl
              transition-all duration-300 hover:scale-105 group overflow-hidden
              ${open ? 'border-[var(--brand)]/50 shadow-[var(--brand)]/20' : ''}
            `}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex flex-col justify-center items-center w-6 h-6">
              <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-0.5' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current mt-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current mt-1 transition-all duration-300 ${open ? '-rotate-45 -translate-y-0.5' : ''}`} />
            </div>
          </button>

          {/* Desktop navigation with magnetic hover effects */}
          <ul className="hidden sm:flex items-center gap-1 text-sm font-medium">
            {[
              { href: '/about', label: 'About' },
              { href: '/skills', label: 'Skills' },
              { href: '/experience', label: 'Experience' },
              { href: '/projects', label: 'Projects' },
              { href: '/resume', label: 'Resume' },
              { href: '/contact', label: 'Contact' },
            ].filter((item) => item.href !== '/experience').map((item, index) => (
              <li key={item.href} className="relative">
                <Link 
                  href={item.href}
                  className={`
                    group relative px-4 py-3 rounded-xl transition-all duration-300
                    hover:bg-gradient-to-br hover:from-[var(--brand)]/10 hover:to-[var(--brand-600)]/5
                    hover:shadow-lg hover:shadow-[var(--brand)]/10 hover:scale-105
                    hover:text-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/50
                    nav-link
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Animated underline */}
                  <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-600)] rounded-full transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4" />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--brand)] to-[var(--brand-600)] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu with glass morphism and stunning animations */}
        {open && (
          <div className="sm:hidden">
            <div 
              className="absolute inset-x-0 top-full bg-[var(--background)]/95 backdrop-blur-2xl border-b border-[var(--border)]/30 shadow-2xl shadow-[var(--brand)]/5"
              style={{
                animation: 'slideDown 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/5 via-transparent to-[var(--brand-600)]/5 opacity-50" />
              
              <ul className="relative px-6 py-6 space-y-1">
                {[
                  { href: '/about', label: 'About', icon: '👤' },
                  { href: '/skills', label: 'Skills', icon: '🚀' },
                  { href: '/experience', label: 'Experience', icon: '💼' },
                  { href: '/projects', label: 'Projects', icon: '⚡' },
                  { href: '/resume', label: 'Resume', icon: '📄' },
                  { href: '/contact', label: 'Contact', icon: '📬' },
                ].filter((item) => item.href !== '/experience').map((item, index) => (
                  <li key={item.href} className="mobile-nav-item" style={{ animationDelay: `${index * 50}ms` }}>
                    <Link 
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`
                        group flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300
                        hover:bg-gradient-to-r hover:from-[var(--brand)]/10 hover:to-[var(--brand-600)]/5
                        hover:shadow-lg hover:shadow-[var(--brand)]/10 hover:translate-x-2
                        border border-transparent hover:border-[var(--border)]/50
                        backdrop-blur-sm text-base font-medium
                      `}
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                      <span className="relative">
                        {item.label}
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-600)] rounded-full transition-all duration-300 group-hover:w-full" />
                      </span>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[var(--brand)]">
                        →
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Backdrop with blur effect */}
            <div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
              onClick={() => setOpen(false)}
              style={{
                animation: 'fadeIn 0.3s ease-out'
              }}
            />
          </div>
        )}
      </nav>
    </>
  );
}


