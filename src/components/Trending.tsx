import { Check, Copy, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { demoDomains, filters, promptPreview, trending, type FilterName } from '../content'
import { BrowserFrame } from './BrowserFrame'
import { MiniSite } from './MiniSite'
import { Reveal } from './Reveal'
import { useCopy } from '../lib/useCopy'

export function Trending() {
  const [filter, setFilter] = useState<FilterName>('All')
  const { copied, copy } = useCopy()
  const reduce = useReducedMotion()
  const cards = trending.cards.filter((card) => filter === 'All' || card.filter === filter)

  return (
    <section id="trending" className="scroll-mt-20 px-5 py-[88px] sm:px-6 lg:py-[128px]">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mono-label">{trending.label}</p>
              <h2 className="mt-4 font-display text-[34px] font-semibold leading-[1.05] tracking-[-0.025em] text-bone sm:text-[48px]">
                {trending.title}
              </h2>
            </div>
            <a href="#types" className="inline-flex items-center gap-2 text-[15px] text-ash transition-colors hover:text-bone">
              {trending.allTypes}
              <ArrowRight size={16} strokeWidth={1.75} />
            </a>
          </div>
        </Reveal>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-1" role="toolbar" aria-label="Filter templates">
          {filters.map((name) => {
            const active = filter === name
            return (
              <button
                key={name}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(name)}
                className={`h-[30px] shrink-0 rounded-full border px-3 font-mono text-[12px] transition-colors ${
                  active ? 'border-bone text-bone' : 'border-line-strong text-smoke hover:text-bone'
                }`}
              >
                {name}
              </button>
            )
          })}
        </div>

        <motion.div layout className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {cards.map((card) => {
              const isCopied = copied === card.name
              return (
                <motion.article
                  layout
                  key={card.name}
                  initial={reduce ? false : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                  whileHover={reduce ? undefined : { y: -2, borderColor: 'rgba(198,244,50,0.55)' }}
                  transition={{
                    duration: reduce ? 0 : 0.25,
                    y: { duration: reduce ? 0 : 0.2 },
                    borderColor: { duration: reduce ? 0 : 0.2 },
                  }}
                  className="flex flex-col overflow-hidden rounded-[10px] border border-line bg-panel"
                >
                  <div className="aspect-[16/10]">
                    <BrowserFrame domain={demoDomains[card.preview]} decorative className="rounded-none border-0">
                      <MiniSite id={card.preview} />
                    </BrowserFrame>
                  </div>
                  <div className="flex flex-1 flex-col p-[18px]">
                    <h3 className="font-display text-[18px] font-semibold leading-[1.3] text-bone">{card.name}</h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {card.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-line px-2 py-0.5 font-mono text-[11px] text-smoke">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <span className="font-mono text-[12px] text-smoke">{card.stack}</span>
                      <button
                        type="button"
                        onClick={() => copy(card.name, promptPreview(card.name))}
                        className="inline-flex h-[30px] items-center gap-1.5 rounded-[8px] border border-line-strong px-2.5 font-sans text-[13px] font-medium text-bone transition-colors hover:bg-raised"
                      >
                        {isCopied ? (
                          <Check size={14} strokeWidth={1.75} className="text-acid" />
                        ) : (
                          <Copy size={14} strokeWidth={1.75} />
                        )}
                        {isCopied ? 'Copied' : 'Copy prompt'}
                      </button>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
