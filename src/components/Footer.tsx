import { brand, footer } from '../content'
import { Wordmark } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-line px-5 pt-[72px] sm:px-6">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ash">{footer.blurb}</p>
          </div>
          <a href="#top" className="font-mono text-[12px] text-smoke transition-colors hover:text-bone">
            {footer.backToTop}
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
          {footer.columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <p className="mono-label">{column.heading}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="font-sans text-[14px] text-ash transition-colors hover:text-bone">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="mt-[72px] overflow-hidden" aria-hidden="true">
        <p className="giant-wordmark whitespace-nowrap text-center font-display font-bold">{brand.name}</p>
      </div>

      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 border-t border-line py-5 font-mono text-[12px] text-smoke">
        <p>{footer.copyright}</p>
        <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <a href={brand.creditHref} className="transition-colors hover:text-bone">
            {brand.creditLabel}
          </a>
          <span>{footer.staticNote}</span>
        </p>
      </div>
    </footer>
  )
}
