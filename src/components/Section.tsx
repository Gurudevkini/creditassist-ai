import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "min-h-screen flex items-center px-6 border-t border-white/10",
        className
      )}
    >
      <div className="max-w-6xl w-full mx-auto">{children}</div>
    </section>
  );
}