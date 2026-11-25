import { Plus } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { faq } from '../content'
import { Reveal } from './Reveal'

export function Faq() {
  const [open, setOpen] = useState(0)
  const reduce = useReducedMotion()

  return (
    <section id="faq" className="scroll-mt-20 px-5 py-[88px] sm:px-6 lg:py-[128px]">
      <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="mono-label">{faq.label}</p>
            <h2 className="mt-4 font-display text-[34px] font-semibold leading-[1.05] tracking-[-0.025em] text-bone sm:text-[48px]">
              {faq.title}
            </h2>
          </Reveal>
        </div>
        <div className="min-w-0 lg:col-span-8">
          {faq.items.map((item, index) => {
            const isOpen = open === index
            return (
              <Reveal key={item.q} delay={index * 0.06}>
                <div className="border-b border-line">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen((current) => (current === index ? -1 : index))}
                    className="flex w-full items-center justify-between gap-6 py-[22px] text-left"
                  >
                    <span className="min-w-0 flex-1 font-sans text-[18px] font-medium text-bone">{item.q}</span>
                    <Plus
                      size={18}
                      strokeWidth={1.75}
                      className={`shrink-0 text-smoke transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0 }}
                    transition={{ duration: reduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-[640px] pb-[22px] text-[16px] leading-[1.65] text-ash">{item.a}</p>
                  </motion.div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
