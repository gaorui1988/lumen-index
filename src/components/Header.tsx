import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { brand, navLinks } from '../content'
import { Wordmark } from './Logo'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const onChange = () => {
      if (media.matches) setOpen(false)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  function close() {
    setOpen(false)
  }

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 h-16 transition-[background-color,border-color,backdrop-filter] duration-200 ${
        scrolled || open
          ? 'border-b border-line bg-[rgba(10,11,10,0.78)] backdrop-blur-[10px]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-6">
        <a href="#top" className="shrink-0" aria-label={brand.name}>
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="font-sans text-[14px] font-medium text-ash transition-colors hover:text-bone">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a href="#pro" className="hidden items-center gap-2 font-sans text-[14px] font-medium text-ash transition-colors hover:text-bone lg:inline-flex">
            <span className="size-1.5 rounded-full bg-acid" />
            Pro early access
          </a>
          <a href="#trending" className="btn-primary hidden h-9 px-3.5 text-[14px] min-[420px]:inline-flex">
            Browse templates
          </a>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center text-bone lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="absolute inset-x-0 top-full border-b border-line bg-ink lg:hidden">
          <nav className="mx-auto flex max-w-[1240px] flex-col px-5 sm:px-6" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="flex h-12 items-center border-b border-line font-sans text-[15px] font-medium text-ash"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pro"
              onClick={close}
              className="flex h-12 items-center gap-2 border-b border-line font-sans text-[15px] font-medium text-ash"
            >
              <span className="size-1.5 rounded-full bg-acid" />
              Pro early access
            </a>
            <a href="#trending" onClick={close} className="btn-primary my-4 h-12 text-[15px]">
              Browse templates
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
