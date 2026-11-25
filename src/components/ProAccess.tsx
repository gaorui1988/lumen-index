import { ArrowRight, Check } from 'lucide-react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { brand, pro, proMailto, spotsPercent } from '../content'
import { Reveal } from './Reveal'

export function ProAccess() {
  const meterRef = useRef<HTMLDivElement>(null)
  const inView = useInView(meterRef, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()
  const shown = Boolean(reduce) || inView

  return (
    <section id="pro" className="scroll-mt-20 px-5 py-[88px] sm:px-6 lg:py-[128px]">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[14px] border border-line bg-panel px-7 py-7 lg:px-14 lg:py-14">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(198,244,50,0.5),transparent)]" />
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="mono-label">{pro.label}</p>
                <h2 className="mt-4 font-display text-[34px] font-semibold leading-[1.05] tracking-[-0.025em] text-bone sm:text-[48px]">
                  {pro.title}
                </h2>
                <p className="mt-4 max-w-[620px] text-[17px] leading-[1.6] text-ash">{pro.intro}</p>
                <ul className="mt-8 space-y-3">
                  {pro.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-[16px] leading-snug text-bone">
                      <Check className="mt-0.5 shrink-0 text-acid" size={16} strokeWidth={1.75} />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-baseline justify-between gap-4 font-mono text-[13px]">
                  <span className="text-smoke">
                    {brand.spotsClaimed} / {brand.spotsTotal} spots claimed
                  </span>
                  <span className="text-acid">{spotsPercent}%</span>
                </div>
                <div ref={meterRef} className="mt-3 h-2 overflow-hidden rounded-full border border-line-strong bg-[#1d211d]">
                  <motion.div
                    className="h-full bg-acid"
                    initial={false}
                    animate={{ width: shown ? `${spotsPercent}%` : '0%' }}
                    transition={{ duration: reduce ? 0 : 1.2, ease: 'easeOut' }}
                  />
                </div>
                <a href={proMailto} className="btn-primary mt-8 h-12 px-[22px] text-[16px]">
                  {pro.button}
                  <ArrowRight size={18} strokeWidth={1.75} />
                </a>
                <p className="mt-3 text-[13px] text-smoke">{pro.note}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
