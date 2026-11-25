import { ArrowUpRight } from 'lucide-react'
import { browse, demoDomains } from '../content'
import { BrowserFrame } from './BrowserFrame'
import { MiniSite } from './MiniSite'
import { Reveal } from './Reveal'

export function BrowseByType() {
  return (
    <section id="types" className="scroll-mt-20 px-5 py-[88px] sm:px-6 lg:py-[128px]">
      <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-12">
        <div className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
          <Reveal>
            <p className="mono-label">{browse.label}</p>
            <h2 className="mt-4 font-display text-[34px] font-semibold leading-[1.05] tracking-[-0.025em] text-bone sm:text-[48px]">
              {browse.title}
            </h2>
            <p className="mt-4 max-w-[620px] text-[17px] leading-[1.6] text-ash">{browse.intro}</p>
          </Reveal>
        </div>

        <div className="min-w-0 lg:col-span-8">
          {browse.rows.map((row, index) => (
            <Reveal key={row.name} delay={index * 0.06} className={index === 0 ? 'border-t border-line' : ''}>
              <a href="#trending" className="type-row block border-b border-line px-2 py-[22px]">
                <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4">
                  <div className="min-w-0">
                    <p className="font-display text-[22px] font-medium leading-tight text-bone lg:text-[28px]">{row.name}</p>
                    <p className="mt-1 text-[15px] text-ash">{row.desc}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="type-count font-mono text-[36px] font-medium leading-none tabular-nums text-bone">{row.count}</span>
                    <ArrowUpRight className="type-arrow text-smoke" size={20} strokeWidth={1.75} />
                  </div>
                  <div className="type-strip col-span-2 min-w-0 lg:col-span-1">
                    <div className="flex h-[76px] items-end gap-2">
                      {row.previews.map((id) => (
                        <div key={id} className="h-[76px] w-[116px] shrink-0">
                          <BrowserFrame domain={demoDomains[id]} decorative>
                            <MiniSite id={id} />
                          </BrowserFrame>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
