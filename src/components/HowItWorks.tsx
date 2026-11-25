import { howItWorks } from '../content'
import { Reveal } from './Reveal'

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 px-5 py-[88px] sm:px-6 lg:py-[128px]">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <p className="mono-label">{howItWorks.label}</p>
          <h2 className="mt-4 max-w-[760px] font-display text-[34px] font-semibold leading-[1.05] tracking-[-0.025em] text-bone sm:text-[48px]">
            {howItWorks.title}
          </h2>
          <p className="mt-4 max-w-[620px] text-[17px] leading-[1.6] text-ash">{howItWorks.intro}</p>
        </Reveal>

        <div className="mt-12 grid border-y border-line md:grid-cols-3">
          {howItWorks.steps.map((step, index) => (
            <Reveal
              key={step.n}
              delay={index * 0.06}
              className={`p-10 ${index > 0 ? 'border-t border-line md:border-l md:border-t-0' : ''}`}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[40px] font-medium leading-none text-acid">{step.n}</span>
                <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-smoke">/ {step.label}</span>
              </div>
              <h3 className="mt-7 font-display text-[24px] font-semibold leading-snug text-bone">{step.title}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-ash">{step.text}</p>
              <p className="mt-6 rounded-[6px] border border-line bg-panel px-2.5 py-2 font-mono text-[12px] text-smoke">
                {step.artifact}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
