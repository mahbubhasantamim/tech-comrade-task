import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function MySectionTitle({
  title,
  className,
}: {
  title: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold text-center text-themePrimary",
        className
      )}
    >
      {title}
    </h2>
  );
}
