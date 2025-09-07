"use client";

import { useEffect, useRef, useState } from "react";

interface StaggeredTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  threshold?: number;
}

export default function StaggeredText({ 
  text, 
  className = "",
  delay = 0,
  staggerDelay = 50,
  threshold = 0.1
}: StaggeredTextProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, hasStarted]);

  // Use code point iteration to preserve emoji and surrogate pairs
  const chars = Array.from(text);

  return (
    <div ref={elementRef} className={`stagger-chars ${className}`}>
      {chars.map((char, index) => (
        <span
          key={index}
          style={{
            animationDelay: hasStarted ? `${delay + index * staggerDelay}ms` : 'none',
            animationPlayState: hasStarted ? 'running' : 'paused'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}
