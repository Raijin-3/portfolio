"use client";

import { useState, useEffect, useRef } from "react";

interface AnimatedTitleProps {
  titles: string[];
  className?: string;
  speed?: number;
  pauseDuration?: number;
}

export default function AnimatedTitle({ 
  titles, 
  className = "",
  speed = 100,
  pauseDuration = 2000 
}: AnimatedTitleProps) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  // Use a browser-safe timeout type and initialize with null
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    if (isPaused) {
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return;
    }

    if (isDeleting) {
      if (currentText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, speed / 2);
      } else {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    } else {
      if (currentText.length < currentTitle.length) {
        timeoutRef.current = setTimeout(() => {
          setCurrentText(currentTitle.slice(0, currentText.length + 1));
        }, speed);
      } else {
        setIsPaused(true);
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentText, isDeleting, isPaused, currentTitleIndex, titles, speed, pauseDuration]);

  return (
    <span className={`animated-title ${className}`}>
      {currentText}
      <span className="animated-cursor">|</span>
    </span>
  );
}
