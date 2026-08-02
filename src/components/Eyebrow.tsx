export default function Eyebrow({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-2.5 mb-4">
      <span className="flag-accent w-3 h-4 bg-brand inline-block" aria-hidden="true" />
      <span className="text-xs font-semibold tracking-[0.18em] uppercase text-brand">
        {children}
      </span>
    </div>
  )
}
