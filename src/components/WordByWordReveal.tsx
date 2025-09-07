"use client";

import { useState, useEffect, useRef } from "react";

interface WordByWordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
  threshold?: number;
}

export default function WordByWordReveal({ 
  text, 
  className = "",
  delay = 0,
  wordDelay = 200,
  threshold = 0.1
}: WordByWordRevealProps) {
  const [visibleWords, setVisibleWords] = useState<boolean[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  
  const words = text.split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          setTimeout(() => {
            setVisibleWords(new Array(words.length).fill(false));
            
            words.forEach((_, index) => {
              setTimeout(() => {
                setVisibleWords(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * wordDelay);
            });
          }, delay);
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
  }, [words.length, wordDelay, delay, threshold, hasStarted]);

  return (
    <div ref={elementRef} className={`word-reveal ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`word-reveal-item ${visibleWords[index] ? 'visible' : ''}`}
          style={{
            opacity: visibleWords[index] ? 1 : 0,
            transform: `translateY(${visibleWords[index] ? 0 : 20}px)`,
            transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`,
          }}
        >
          {word}{index < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </div>
  );
}