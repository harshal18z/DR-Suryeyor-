import logo from "@/assets/logo.jpeg";

export function Logo({ className = "h-10 w-10", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-3 group">
      <span className={`${className} rounded-xl overflow-hidden ring-1 ring-border bg-white shadow-sm group-hover:shadow-glow transition-shadow`}>
        <img src={logo} alt="D R Surveyor logo" className="h-full w-full object-cover" />
      </span>
      {showText && (
        <span className="hidden sm:flex flex-col leading-tight">
          <span className="font-display font-bold text-[15px] tracking-wide text-foreground">D R Surveyor</span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Land Surveyor</span>
        </span>
      )}
    </a>
  );
}
