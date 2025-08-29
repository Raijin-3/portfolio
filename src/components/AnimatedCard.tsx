import { ReactNode } from "react";

type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
};

export default function AnimatedCard({ children, className }: AnimatedCardProps) {
  return (
    <div className={`float-card rounded-xl border border-[var(--border)] bg-[var(--surface)] ${className ?? ""}`}>
      {children}
    </div>
  );
}


