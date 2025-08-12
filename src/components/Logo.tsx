import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 162 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        aria-label="NETFLOW Smart Homes Ltd Logo"
      >
        <g>
          <path
            d="M81.2434 0L0 41.455V138H56.8703V63.9213L81.2434 50.7303L105.617 63.9213V138H162.487V41.455L81.2434 0Z"
            fill="#007176"
          />
          <path
            d="M162.487 96.545V0H105.617V74.0787L81.2434 87.2697L56.8703 74.0787V0H0V96.545L81.2434 138L162.487 96.545Z"
            fill="#92C149"
          />
        </g>
      </svg>
      <div className="flex flex-col font-headline text-[#3c4043]">
        <span className="text-xs">RC 1337038</span>
        <span className="text-base font-bold leading-tight tracking-tighter">
          NETFLOW
        </span>
        <span className="text-base font-bold leading-tight tracking-tighter">
          SMART HOMES LTD
        </span>
      </div>
    </div>
  );
}
