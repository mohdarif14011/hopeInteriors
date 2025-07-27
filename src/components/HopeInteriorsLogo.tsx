import Link from "next/link";
import { cn } from "@/lib/utils";

export function HopeInteriorsLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-current"
      >
        <path
          d="M4 10C4 8.89543 4.89543 8 6 8H18C19.1046 8 20 8.89543 20 10V14H4V10Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 14V18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 8V6C6 4.89543 6.89543 4 8 4H10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-headline text-2xl font-bold tracking-wider uppercase">
        hope interiors
      </span>
    </div>
  );
}
