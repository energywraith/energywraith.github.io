export const buttonVariants = {
  default: "bg-slate-700 text-white",
  accent:
    "btn-glass relative overflow-hidden border border-cyan-500/40 bg-cyan-500/20 text-cyan-950 backdrop-blur-md shadow-[0_10px_28px_-10px_rgba(6,182,212,0.45)] hover:bg-cyan-500/30 hover:border-cyan-500/60",
};

export type ButtonVariant = keyof typeof buttonVariants;
