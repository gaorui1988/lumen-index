import { BookOpen, Check, Copy, Plug, Terminal } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { agent, snippets, toneClass, type Snippet } from '../content'
import { useCopy } from '../lib/useCopy'
import { Reveal } from './Reveal'

const icons = {
  cli: Terminal,
  mcp: Plug,
  skill: BookOpen,
} as const

export function AgentSetup() {
  const [activeId, setActiveId] = useState<Snippet['id']>('cli')
  const { copied, copy } = useCopy()
  const reduce = useReducedMotion()
  const active = snippets.find((snippet) => snippet.id === activeId) ?? snippets[0]
  const isCopied = copied === 'agent-snippet'

  return (
    <section id="agent" className="scroll-mt-20 px-5 py-[88px] sm:px-6 lg:py-[128px]">
      <div className="mx-auto grid min-w-0 max-w-[1240px] items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="min-w-0 lg:col-span-5">
          <Reveal>
            <p className="mono-label">{agent.label}</p>
            <h2 className="mt-4 font-display text-[34px] font-semibold leading-[1.05] tracking-[-0.025em] text-bone sm:text-[48px]">
              {agent.title}
            </h2>
            <p className="mt-4 text-[17px] leading-[1.6] text-ash">{agent.intro}</p>
          </Reveal>
          <div className="mt-8 space-y-4">
            {agent.bullets.map((bullet, index) => {
              const Icon = icons[bullet.id as keyof typeof icons]
              return (
                <Reveal key={bullet.id} delay={index * 0.06}>
                  <p className="flex gap-3 text-[15px] leading-relaxed text-ash">
                    <Icon className="mt-0.5 shrink-0 text-smoke" size={18} strokeWidth={1.75} />
                    <span>{bullet.text}</span>
                  </p>
                </Reveal>
              )
            })}
          </div>
        </div>

        <Reveal className="min-w-0 lg:col-span-7" delay={0.08}>
          <div className="w-full min-w-0 overflow-hidden rounded-[14px] border border-line bg-panel">
            <div className="flex h-11 items-center gap-2 border-b border-line px-2">
              <div role="tablist" aria-label="Agent setup" className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto">
                {snippets.map((snippet) => {
                  const Icon = icons[snippet.id]
                  const selected = snippet.id === active.id
                  return (
                    <button
                      key={snippet.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveId(snippet.id)}
                      className={`inline-flex h-8 shrink-0 items-center gap-2 rounded-[8px] px-3 font-mono text-[12px] transition-colors ${
                        selected ? 'bg-raised text-bone' : 'text-smoke hover:text-bone'
                      }`}
                    >
                      <Icon size={14} strokeWidth={1.75} />
                      {snippet.label}
                    </button>
                  )
                })}
              </div>
              {active.file ? <span className="hidden font-mono text-[11px] text-smoke sm:inline">{active.file}</span> : null}
              <button
                type="button"
                aria-label={isCopied ? 'Copied' : 'Copy snippet'}
                onClick={() => copy('agent-snippet', active.plain)}
                className="inline-flex size-8 shrink-0 items-center justify-center text-smoke transition-colors hover:text-bone"
              >
                {isCopied ? <Check size={16} strokeWidth={1.75} className="text-acid" /> : <Copy size={16} strokeWidth={1.75} />}
              </button>
            </div>
            <div className="min-h-[220px] px-6 py-6" role="tabpanel">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={active.id}
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.15 }}
                  className="max-w-full overflow-x-auto font-mono text-[13.5px] leading-[1.7]"
                >
                  {active.lines.map((line, index) => (
                    <div key={`${active.id}-${index}`}>
                      {line.parts.map((part, partIndex) => (
                        <span key={partIndex} className={toneClass[part.tone]}>
                          {part.text}
                        </span>
                      ))}
                      {index === active.lines.length - 1 ? <span className="caret" /> : null}
                    </div>
                  ))}
                </motion.pre>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
