import { cn } from "@/utils/class-name";

export function Grid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div
      className={cn(
        "grid sm:grid-cols-2 sm:gap-x-20 lg:grid-cols-6 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
