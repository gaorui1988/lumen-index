export const brand = {
  name: 'Lumen Index',
  slug: 'lumen-index',
  email: 'hello@example.com',
  spotsTotal: 500,
  spotsClaimed: 312,
  year: 2026,
  creditHref: 'https://vibefather.ai/t/template-library-landing-page',
  creditLabel: 'Template by VibeFather',
} as const

export const spotsPercent = Math.round((brand.spotsClaimed / brand.spotsTotal) * 100)

export const proMailto = `mailto:${brand.email}?subject=${encodeURIComponent('Pro early access')}`

export const demoDomains: Record<number, string> = {
  1: 'fernhouse.demo',
  2: 'quarry.demo',
  3: 'tidepool.demo',
  4: 'kiln.demo',
  5: 'parceldocs.demo',
  6: 'stillwater.demo',
  7: 'mothradio.demo',
  8: 'gridline.demo',
  9: 'saltmarsh.demo',
  10: 'hexalabs.demo',
  11: 'pocketarcade.demo',
  12: 'copperline.demo',
}

export const marqueeRows = [
  { id: 'a', demos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  { id: 'b', demos: [7, 12, 9, 1, 10, 4, 11, 3, 6, 8, 2, 5] },
  { id: 'c', demos: [10, 5, 8, 11, 2, 9, 6, 12, 1, 7, 3, 4] },
  { id: 'd', demos: [4, 9, 6, 2, 12, 11, 8, 5, 7, 3, 10, 1] },
] as const

export const navLinks = [
  { label: 'How it works', href: '#how' },
  { label: 'Trending', href: '#trending' },
  { label: 'Types', href: '#types' },
  { label: 'Agent setup', href: '#agent' },
  { label: 'FAQ', href: '#faq' },
] as const

export const hero = {
  eyebrow: 'New templates every week · prompt + DESIGN.md included',
  title: 'Vibe-coding website templates, with the prompt that built them.',
  sub: 'Click through a live demo, copy its exact prompt and DESIGN.md, and paste them into Claude Code, Codex or Cursor. Your agent builds a near-identical site in one run.',
  primary: 'Browse templates',
  secondary: 'How it works',
  worksWith: 'WORKS WITH  Claude Code · Codex · Cursor · Lovable',
}

export const howItWorks = {
  label: 'HOW IT WORKS',
  title: 'How vibe-coding templates work: pick, copy, ship.',
  intro: 'Three steps from a demo you like to a site running on your machine.',
  steps: [
    {
      n: '01',
      label: 'PICK',
      title: 'Pick a live demo',
      text: 'Open any template and click through the real site before you commit. What you see is what the prompt produces.',
      artifact: 'demo/fernhouse → index.html',
    },
    {
      n: '02',
      label: 'COPY',
      title: 'Copy the prompt and DESIGN.md',
      text: 'Each template ships with its complete prompt and a DESIGN.md that fixes colors, type, spacing and motion. One click copies both.',
      artifact: 'prompt.md  ·  DESIGN.md',
    },
    {
      n: '03',
      label: 'SHIP',
      title: 'Ship it with your coding agent',
      text: 'Paste into Claude Code, Codex, Cursor or Lovable. The prompt names the stack, sections and copy, so the build lands close to the demo.',
      artifact: '$ npm run build  ✓ dist/',
    },
  ],
}

export const filters = ['All', 'Landing', 'Dashboard', 'Portfolio', 'Docs', 'Pricing', '3D'] as const

export type FilterName = (typeof filters)[number]

export const trending = {
  label: 'TRENDING',
  title: 'Trending website templates this week.',
  allTypes: 'All template types',
  cards: [
    { name: 'Fernhouse', preview: 1, tags: ['Landing', 'Editorial'], stack: 'Vite + React', filter: 'Landing' },
    { name: 'Copperline', preview: 12, tags: ['Dashboard', 'Dark'], stack: 'React + Tailwind', filter: 'Dashboard' },
    { name: 'Gridline', preview: 8, tags: ['Portfolio', 'Swiss'], stack: 'Astro', filter: 'Portfolio' },
    { name: 'Parcel Docs', preview: 5, tags: ['Docs', 'Minimal'], stack: 'Vite + React', filter: 'Docs' },
    { name: 'Stillwater', preview: 6, tags: ['Pricing', 'SaaS'], stack: 'React + Tailwind', filter: 'Pricing' },
    { name: 'Hexa Labs', preview: 10, tags: ['3D', 'WebGL'], stack: 'three.js', filter: '3D' },
  ],
}

export function promptPreview(name: string) {
  return `# ${name} — prompt preview\nBuild the ${name} template described on ${brand.name}.`
}

export const browse = {
  label: 'BROWSE BY TYPE',
  title: 'Browse templates by type.',
  intro: 'From one-screen landings to multi-panel dashboards. Every type comes with prompts tuned for that kind of build.',
  rows: [
    { name: 'Landing pages', desc: 'Hero, proof, pricing, CTA.', count: 28, previews: [1, 3, 9] },
    { name: 'SaaS', desc: 'Product tours and feature grids.', count: 19, previews: [3, 6, 12] },
    { name: 'Portfolio', desc: 'Case studies and image-led grids.', count: 16, previews: [4, 8, 1] },
    { name: 'Docs & blog', desc: 'Sidebars, code blocks, long reads.', count: 11, previews: [5, 2, 8] },
    { name: 'Pricing', desc: 'Plans, toggles and comparison tables.', count: 8, previews: [6, 3, 12] },
    { name: 'Dashboard', desc: 'Charts, KPIs and dense tables.', count: 9, previews: [12, 2, 6] },
    { name: '3D & WebGL', desc: 'Canvas scenes and shader heroes.', count: 7, previews: [10, 9, 11] },
    { name: 'Games', desc: 'Tiny playable sites.', count: 5, previews: [11, 7, 10] },
  ],
}

export type Tone = 'acid' | 'bone' | 'teal' | 'sand' | 'smoke'

export type CodeLine = { parts: { text: string; tone: Tone }[] }

export type Snippet = {
  id: 'cli' | 'mcp' | 'skill'
  label: string
  file: string
  plain: string
  lines: CodeLine[]
}

function lineText(lines: CodeLine[]) {
  return lines.map((line) => line.parts.map((part) => part.text).join('')).join('\n')
}

function cliLines(slug: string): CodeLine[] {
  return [
    {
      parts: [
        { text: '$', tone: 'acid' },
        { text: ` npx ${slug} search `, tone: 'bone' },
        { text: '"dark saas landing"', tone: 'sand' },
      ],
    },
    {
      parts: [
        { text: '$', tone: 'acid' },
        { text: ` npx ${slug} get lumen-index `, tone: 'bone' },
        { text: '--out', tone: 'teal' },
        { text: ' ./prompt.md', tone: 'bone' },
      ],
    },
    {
      parts: [
        { text: '$', tone: 'acid' },
        { text: ' claude ', tone: 'bone' },
        { text: '"Build the site described in ./prompt.md"', tone: 'sand' },
      ],
    },
  ]
}

function mcpLines(slug: string): CodeLine[] {
  const key = (value: string) => ({ text: `"${value}"`, tone: 'teal' as const })
  const str = (value: string) => ({ text: `"${value}"`, tone: 'sand' as const })
  const bone = (value: string) => ({ text: value, tone: 'bone' as const })
  return [
    { parts: [bone('{')] },
    { parts: [bone('  '), key('mcpServers'), bone(': {')] },
    { parts: [bone('    '), key(slug), bone(': {')] },
    { parts: [bone('      '), key('command'), bone(': '), str('npx'), bone(',')] },
    { parts: [bone('      '), key('args'), bone(': ['), str('-y'), bone(', '), str(`${slug}-mcp`), bone(']')] },
    { parts: [bone('    }')] },
    { parts: [bone('  }')] },
    { parts: [bone('}')] },
  ]
}

function skillLines(slug: string): CodeLine[] {
  const smoke = (value: string) => ({ text: value, tone: 'smoke' as const })
  const teal = (value: string) => ({ text: value, tone: 'teal' as const })
  const bone = (value: string) => ({ text: value, tone: 'bone' as const })
  return [
    { parts: [smoke('---')] },
    { parts: [teal('name: '), bone(`${slug}-templates`)] },
    { parts: [teal('description: '), bone('Find a website template and build it from its prompt.')] },
    { parts: [smoke('---')] },
    { parts: [smoke('# 1. Search the catalog for a template that fits the request.')] },
    { parts: [smoke('# 2. Fetch its prompt.md and DESIGN.md.')] },
    { parts: [smoke('# 3. Follow the prompt exactly and keep the stack it names.')] },
  ]
}

function snippet(id: Snippet['id'], label: string, file: string, lines: CodeLine[]): Snippet {
  return { id, label, file, lines, plain: lineText(lines) }
}

export const snippets: Snippet[] = [
  snippet('cli', 'CLI', '', cliLines(brand.slug)),
  snippet('mcp', 'MCP', 'mcp.json', mcpLines(brand.slug)),
  snippet('skill', 'Skill', 'SKILL.md', skillLines(brand.slug)),
]

export const agent = {
  label: 'AGENT SETUP',
  title: 'Use templates in your coding agent: CLI, MCP or Skill.',
  intro: 'Search the catalog and pull a prompt without leaving the terminal. Pick the setup your agent already speaks.',
  bullets: [
    { id: 'cli', text: 'CLI — search and download prompt.md in one command.' },
    { id: 'mcp', text: 'MCP — let the agent query templates as a tool.' },
    { id: 'skill', text: 'Skill — a drop-in instruction file for agents that support skills.' },
  ],
}

export const pro = {
  label: 'PRO · EARLY ACCESS',
  title: 'Pro early access — limited spots.',
  intro:
    'Pro is for people who ship sites every week. We are opening it in small batches so every early member gets a say in what we build next.',
  perks: [
    'Multi-page templates with full prompts',
    'New Pro templates on the day they land',
    'Vote on the next templates we build',
    'DESIGN.md exports as design tokens',
  ],
  button: 'Request early access',
  note: 'No payment now. We email you when your spot opens.',
}

export const faq = {
  label: 'FAQ',
  title: `Frequently asked questions about ${brand.name} templates.`,
  items: [
    {
      q: 'What is a vibe-coding template?',
      a: 'A website design plus the exact prompt that builds it. You hand the prompt to an AI coding agent and it writes the code, instead of you starting from an empty folder.',
    },
    {
      q: 'Which coding agents work with the prompts?',
      a: 'Any agent that can read a long prompt and edit files: Claude Code, Codex, Cursor, Lovable and similar tools. The prompts name the stack explicitly, so the agent does not have to guess.',
    },
    {
      q: 'Will my build look exactly like the demo?',
      a: 'Very close. The prompt fixes colors, fonts, sections, copy and motion, and our own demos are generated from the same prompt with nothing added. Small differences between runs are normal.',
    },
    {
      q: 'What is in the DESIGN.md file?',
      a: 'The design system behind the template: color tokens with roles, type scale, spacing, radius, motion rules and the things to avoid. Keep it in your repo so later edits stay on-style.',
    },
    {
      q: 'What can I build with a template?',
      a: 'Landing pages, portfolios, docs, dashboards and small games. Every template is original, uses permissively licensed libraries and self-hosted open-source fonts, and lists its license notes on its page.',
    },
    {
      q: 'Do I need a backend or an account?',
      a: 'No. Every template builds to static files you can host anywhere. You only need an account for Pro features when they open.',
    },
  ],
}

export const footer = {
  blurb: 'Original website templates with the prompts that build them.',
  backToTop: 'Back to top ↑',
  copyright: `© ${brand.year} ${brand.name}. Original templates; demo content is invented.`,
  staticNote: 'All demos are static files.',
  columns: [
    {
      heading: 'Templates',
      links: [
        { label: 'Landing pages', href: '#types' },
        { label: 'SaaS', href: '#types' },
        { label: 'Portfolio', href: '#types' },
        { label: 'Docs & blog', href: '#types' },
        { label: 'Dashboard', href: '#types' },
      ],
    },
    {
      heading: 'Product',
      links: [
        { label: 'How it works', href: '#how' },
        { label: 'Trending', href: '#trending' },
        { label: 'Agent setup', href: '#agent' },
        { label: 'Pro early access', href: '#pro' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { label: 'FAQ', href: '#faq' },
        { label: 'Prompt format', href: '#how' },
        { label: 'DESIGN.md guide', href: '#faq' },
        { label: 'Changelog', href: './index.html' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About', href: './index.html' },
        { label: 'Contact', href: `mailto:${brand.email}` },
        { label: 'Terms', href: './index.html' },
        { label: 'Privacy', href: './index.html' },
      ],
    },
  ],
}

export const toneClass: Record<Tone, string> = {
  acid: 'text-acid',
  bone: 'text-bone',
  teal: 'text-syntax-teal',
  sand: 'text-syntax-sand',
  smoke: 'text-smoke',
}
