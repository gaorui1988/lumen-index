import { ArrowRight } from 'lucide-react'
import { demoDomains, hero, marqueeRows } from '../content'
import { Aurora } from './Aurora'
import { BrowserFrame } from './BrowserFrame'
import { MiniSite } from './MiniSite'
import { RevealOnLoad } from './Reveal'

function DemoCard({ id, copyKey }: { id: number; copyKey: string }) {
  return (
    <div className="demo-card mr-4 h-[132px] w-[200px] shrink-0 sm:h-[158px] sm:w-[240px] lg:h-[184px] lg:w-[280px]">
      <BrowserFrame domain={demoDomains[id]} decorative>
        <MiniSite key={copyKey} id={id} />
      </BrowserFrame>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[120px] lg:pt-[152px]" aria-labelledby="hero-title">
      <Aurora />
      <div className="hero-grid" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 text-center sm:px-6">
        <RevealOnLoad>
          <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-panel px-3 py-1.5 font-mono text-[12px] text-smoke">
            <span className="pulse-dot size-1.5 rounded-full bg-acid" />
            {hero.eyebrow}
          </p>
        </RevealOnLoad>
        <RevealOnLoad delay={0.06}>
          <h1
            id="hero-title"
            className="mx-auto mt-6 max-w-[980px] font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.03em] text-bone sm:text-[72px]"
          >
            {hero.title}
          </h1>
        </RevealOnLoad>
        <RevealOnLoad delay={0.12}>
          <p className="mx-auto mt-6 max-w-[640px] text-[19px] leading-[1.55] text-ash">{hero.sub}</p>
        </RevealOnLoad>
        <RevealOnLoad delay={0.18} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="#trending" className="btn-primary h-12 px-[22px] text-[16px]">
            {hero.primary}
            <ArrowRight size={18} strokeWidth={1.75} />
          </a>
          <a href="#how" className="btn-secondary h-12 px-[22px] text-[16px]">
            {hero.secondary}
          </a>
        </RevealOnLoad>
        <RevealOnLoad delay={0.24}>
          <p className="mx-auto mt-7 max-w-[640px] font-mono text-[12px] leading-relaxed text-smoke">{hero.worksWith}</p>
        </RevealOnLoad>
      </div>

      <div className="relative z-10 mt-[72px] flex flex-col gap-4">
        {marqueeRows.map((row) => (
          <div key={row.id} className={`marquee-row ${row.id === 'd' ? 'hidden lg:block' : ''}`}>
            <div className={`marquee-track marquee-${row.id}`}>
              {row.demos.map((id) => (
                <DemoCard key={`${row.id}-${id}`} id={id} copyKey={`${row.id}-${id}`} />
              ))}
              <div className="marquee-duplicate contents" aria-hidden="true">
                {row.demos.map((id) => (
                  <DemoCard key={`${row.id}-copy-${id}`} id={id} copyKey={`${row.id}-copy-${id}`} />
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[35%] bg-gradient-to-b from-transparent to-ink" />
      </div>
    </section>
  )
}
