import type { ReactNode } from 'react'

export function BrowserFrame({
  domain,
  children,
  className = '',
  decorative = false,
}: {
  domain: string
  children: ReactNode
  className?: string
  decorative?: boolean
}) {
  return (
    <div
      className={`browser-frame relative flex h-full w-full flex-col overflow-hidden rounded-[10px] border border-line bg-panel ${className}`}
      aria-hidden={decorative ? true : undefined}
    >
      <div className="relative flex shrink-0 items-center bg-raised" style={{ height: '9%', minHeight: 18 }}>
        <div className="flex items-center gap-1 pl-2">
          <span className="size-[5px] rounded-full bg-[#3a3f3a]" />
          <span className="size-[5px] rounded-full bg-[#3a3f3a]" />
          <span className="size-[5px] rounded-full bg-[#3a3f3a]" />
        </div>
        <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-[54%] w-[46%] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-[#0f110f] px-1.5">
          <span className="truncate font-mono text-[8px] leading-none text-smoke">{domain}</span>
        </div>
      </div>
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  )
}
