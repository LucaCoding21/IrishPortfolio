import { cn } from "@/lib/cn";

export default function Container({ children, className = "" }) {
  return <div className={cn("container max-w-[1200px]", className)}>{children}</div>;
}

