import { cn } from "@/utils/class-name";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={cn("sm:px-20 px-5 max-w-6xl mx-auto", className)}>
      {children}
    </div>
  );
}
