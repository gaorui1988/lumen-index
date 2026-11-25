import { brand } from '../content'

export function LogoMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="7" fill="#c6f432" />
      <rect x="10" y="9" width="4" height="14" fill="#0a0b0a" />
      <rect x="18" y="14" width="4" height="9" fill="#0a0b0a" />
    </svg>
  )
}

export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="font-display text-[18px] font-semibold tracking-[-0.02em] text-bone">{brand.name}</span>
    </span>
  )
}
