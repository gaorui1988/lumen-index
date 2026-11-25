import { useId } from 'react'

function Fernhouse() {
  return (
    <div className="absolute inset-0 bg-[#efe9dc]">
      <div className="absolute left-[6%] top-[8%] h-[3%] w-[18%] rounded-[2px] bg-[#1d1b17]" />
      <div className="absolute right-[6%] top-[8%] h-[3%] w-[6%] rounded-[2px] bg-[#1d1b17]" />
      <div className="absolute right-[14%] top-[8%] h-[3%] w-[6%] rounded-[2px] bg-[#1d1b17]" />
      <div className="absolute right-[22%] top-[8%] h-[3%] w-[6%] rounded-[2px] bg-[#1d1b17]" />
      <div className="absolute left-[6%] top-[24%] h-[9%] w-[62%] rounded-[2px] bg-[#1d1b17]" />
      <div className="absolute left-[6%] top-[36%] h-[9%] w-[44%] rounded-[2px] bg-[#1d1b17]" />
      <div className="absolute left-[6%] top-[52%] h-[7%] w-[16%] rounded-full bg-[#c8643b]" />
      <div className="absolute right-[8%] top-[18%] aspect-square w-[30%] rounded-full bg-[#c8643b]" />
      <div className="absolute right-[20%] top-[36%] aspect-square w-[22%] rounded-full bg-[#d9c9a8]" />
    </div>
  )
}

function Quarry() {
  return (
    <div className="absolute inset-0 bg-[#e8e4d8]">
      <div className="absolute inset-[8%] grid grid-cols-2 grid-rows-2 border-2 border-[#111]">
        <div className="border-b-2 border-r-2 border-[#111] bg-[#e0b341]" />
        <div className="border-b-2 border-[#111]" />
        <div className="border-r-2 border-[#111]" />
        <div className="relative">
          <div className="absolute left-[14%] top-[28%] h-[16%] w-[72%] bg-[#111]" />
          <div className="absolute left-[14%] top-[56%] h-[16%] w-[48%] bg-[#111]" />
        </div>
      </div>
    </div>
  )
}

function Tidepool() {
  return (
    <div className="absolute inset-0 bg-[#0f2a28]">
      <div className="absolute left-1/2 top-[20%] h-[8%] w-[58%] -translate-x-1/2 rounded-[2px] bg-[#e6efe9]" />
      <div className="absolute left-1/2 top-[31%] h-[8%] w-[40%] -translate-x-1/2 rounded-[2px] bg-[#e6efe9]" />
      <div className="absolute left-1/2 top-[45%] h-[8%] w-[18%] -translate-x-1/2 rounded-full bg-[#d39a3a]" />
      <div className="absolute bottom-[8%] left-1/2 h-[30%] w-[80%] -translate-x-1/2 rounded-[4px] bg-[#163a37]">
        <div className="absolute left-[8%] top-[36%] h-[18%] w-[24%] rounded-[2px] bg-[#5fb3a3]" />
        <div className="absolute left-[38%] top-[36%] h-[18%] w-[18%] rounded-[2px] bg-[#5fb3a3]" />
        <div className="absolute left-[62%] top-[36%] h-[18%] w-[26%] rounded-[2px] bg-[#5fb3a3]" />
      </div>
    </div>
  )
}

const kilnTiles = [
  'linear-gradient(145deg, #b5653a, #7a3b22)',
  'linear-gradient(145deg, #d9c9a8, #a8946c)',
  'linear-gradient(145deg, #5b6b4a, #39432d)',
  'linear-gradient(145deg, #c8643b, #e0b341)',
  'linear-gradient(145deg, #3a3f3a, #1d1b17)',
  'linear-gradient(145deg, #a8946c, #5b6b4a)',
]

function Kiln() {
  return (
    <div className="absolute inset-0 bg-[#1a1816]">
      <div className="absolute left-[6%] top-[8%] h-[3%] w-[20%] rounded-[2px] bg-[#d9c9a8]" />
      <div className="absolute inset-x-[6%] bottom-[8%] top-[18%] grid grid-cols-3 grid-rows-2 gap-[4%]">
        {kilnTiles.map((background) => (
          <div key={background} className="rounded-[3px]" style={{ background }} />
        ))}
      </div>
    </div>
  )
}

const sidebarWidths = [78, 92, 54, 84, 46, 70, 62]

function ParcelDocs() {
  return (
    <div className="absolute inset-0 bg-[#f4f2ec]">
      <div className="absolute bottom-0 left-0 top-0 flex w-[22%] flex-col justify-center gap-[7%] border-r border-[#ddd8cb] px-[8%]">
        {sidebarWidths.map((width) => (
          <div key={width} className="h-[3.2%] rounded-[2px] bg-[#c9c4b6]" style={{ width: `${width}%` }} />
        ))}
      </div>
      <div className="absolute left-[30%] top-[12%] h-[7%] w-[36%] rounded-[2px] bg-[#1d1b17]" />
      <div className="absolute left-[30%] top-[24%] h-[3%] w-[52%] rounded-[2px] bg-[#c9c4b6]" />
      <div className="absolute left-[30%] top-[30%] h-[3%] w-[44%] rounded-[2px] bg-[#c9c4b6]" />
      <div className="absolute left-[30%] top-[36%] h-[3%] w-[36%] rounded-[2px] bg-[#c9c4b6]" />
      <div className="absolute bottom-[10%] left-[30%] h-[34%] w-[58%] rounded-[3px] bg-[#1b1d1b] p-[4%]">
        <div className="mb-[9%] h-[12%] w-[46%] rounded-[1px] bg-[#7fb8a8]" />
        <div className="mb-[9%] h-[12%] w-[62%] rounded-[1px] bg-[#d8c08a]" />
        <div className="mb-[9%] h-[12%] w-[34%] rounded-[1px] bg-[#ecefe8]" />
        <div className="h-[12%] w-[50%] rounded-[1px] bg-[#7fb8a8]" />
      </div>
    </div>
  )
}

function PriceColumn({ left, top, accent = false }: { left: string; top: string; accent?: boolean }) {
  return (
    <div
      className="absolute flex h-[70%] w-[26%] flex-col px-[7%] pb-[8%] pt-[10%]"
      style={{
        left,
        top,
        border: `1px solid ${accent ? '#8fa05a' : '#232723'}`,
        borderRadius: 3,
        background: '#121512',
      }}
    >
      {accent ? <div className="absolute inset-x-0 top-0 h-[5%] bg-[#8fa05a]" /> : null}
      <div className="h-[9%] w-[54%] rounded-[2px] bg-[#ecefe8]" />
      <div className="mt-[16%] h-[3%] w-[86%] rounded-[1px] bg-[#3a3f3a]" />
      <div className="mt-[9%] h-[3%] w-[74%] rounded-[1px] bg-[#3a3f3a]" />
      <div className="mt-[9%] h-[3%] w-[80%] rounded-[1px] bg-[#3a3f3a]" />
      <div className="mt-[9%] h-[3%] w-[66%] rounded-[1px] bg-[#3a3f3a]" />
      <div className="mt-auto h-[11%] w-full rounded-[2px]" style={{ background: accent ? '#8fa05a' : '#2a2e2a' }} />
    </div>
  )
}

function Stillwater() {
  return (
    <div className="absolute inset-0 bg-[#121512]">
      <PriceColumn left="8%" top="18%" />
      <PriceColumn left="37%" top="14%" accent />
      <PriceColumn left="66%" top="18%" />
    </div>
  )
}

function MothRadio() {
  return (
    <div className="absolute inset-0 bg-[#d8cfbd]">
      <div className="absolute left-1/2 top-1/2 h-[66%] w-[70%] -translate-x-1/2 -translate-y-1/2 border-2 border-[#2a2620] bg-[#efe8da]">
        <div
          className="h-[18%] border-b-2 border-[#2a2620]"
          style={{ backgroundImage: 'repeating-linear-gradient(90deg, #2a2620 0 2px, transparent 2px 7px)' }}
        />
        <svg viewBox="0 0 100 36" className="absolute left-[8%] right-[8%] top-[36%] h-[30%] w-[84%]" fill="none" aria-hidden="true">
          <polyline
            points="0,18 8,18 14,6 20,30 28,12 36,24 44,16 54,20 62,4 70,32 78,14 86,22 94,18 100,18"
            stroke="#2a2620"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <svg viewBox="0 0 12 14" className="absolute bottom-[14%] right-[10%] h-[16%] w-[8%]" aria-hidden="true">
          <polygon points="1,1 11,7 1,13" fill="#2a2620" />
        </svg>
      </div>
    </div>
  )
}

function Gridline() {
  return (
    <div
      className="absolute inset-0 bg-[#f2f0ea]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)',
        backgroundSize: '12.5% 12.5%',
      }}
    >
      <div className="absolute bottom-[5%] left-0 top-[5%] w-[40%] bg-[#d9472b]" />
      <div className="absolute right-[6%] top-[24%] h-[7%] w-[48%] bg-[#111]" />
      <div className="absolute right-[6%] top-[40%] h-[7%] w-[38.4%] bg-[#111]" />
      <div className="absolute right-[6%] top-[56%] h-[7%] w-[28.8%] bg-[#111]" />
    </div>
  )
}

function Saltmarsh() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-[#e9c88f] to-[#7fa9a0]" />
      <div className="absolute left-[62%] top-[30%] aspect-square w-[18%] rounded-full bg-[#f3e3b8]" />
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-[#2f5d58]">
        <div className="absolute left-[8%] right-[8%] top-[28%] h-px bg-white/25" />
        <div className="absolute left-[14%] right-[10%] top-[50%] h-px bg-white/25" />
        <div className="absolute left-[6%] right-[16%] top-[72%] h-px bg-white/25" />
      </div>
      <div className="absolute left-[6%] top-[10%] h-[4%] w-[18%] rounded-[2px] bg-white" />
      <div className="absolute left-[6%] top-[18%] h-[3%] w-[11%] rounded-[2px] bg-white" />
    </div>
  )
}

function HexaLabs() {
  return (
    <div
      className="absolute inset-0 bg-[#0b0f0e]"
      style={{
        backgroundImage: 'radial-gradient(rgba(236,239,232,0.22) 0.7px, transparent 0.7px)',
        backgroundSize: '12% 16%',
      }}
    >
      <svg viewBox="0 0 120 104" className="absolute left-1/2 top-[14%] h-[58%] w-[48%] -translate-x-1/2" fill="none" aria-hidden="true">
        <polygon points="60,2 116,32 116,74 60,102 4,74 4,32" stroke="#5fb3a3" strokeWidth="1" />
        <polyline points="60,52 60,2" stroke="#5fb3a3" strokeWidth="1" />
        <polyline points="60,52 4,74" stroke="#5fb3a3" strokeWidth="1" />
        <polyline points="60,52 116,74" stroke="#5fb3a3" strokeWidth="1" />
      </svg>
      <div className="absolute bottom-[14%] left-[8%] h-[5%] w-[28%] rounded-[2px] bg-[#ecefe8]" />
    </div>
  )
}

const snake = new Set(['1,2', '2,2', '3,2', '4,2', '4,3', '4,4', '3,4', '2,4', '1,4'])

function PocketArcade() {
  return (
    <div className="absolute inset-0 bg-[#10170f]">
      <div className="absolute right-[6%] top-[7%] h-[5%] w-[18%] rounded-[2px] bg-[#c9d4c4]" />
      <div className="absolute inset-x-[6%] bottom-[8%] top-[18%] grid grid-cols-10 grid-rows-6 gap-[8%]">
        {Array.from({ length: 60 }, (_, index) => {
          const key = `${index % 10},${Math.floor(index / 10)}`
          const background = key === '7,3' ? '#e0b341' : snake.has(key) ? '#9bd36a' : '#1a2419'
          return <div key={key} className="rounded-[1px]" style={{ background }} />
        })}
      </div>
    </div>
  )
}

function Copperline() {
  const gid = `copper${useId().replace(/[^a-zA-Z0-9]/g, '')}`
  return (
    <div className="absolute inset-0 bg-[#111311]">
      <div className="absolute bottom-0 left-0 top-0 flex w-[14%] flex-col justify-center gap-[14%] bg-[#171a17] px-[3%]">
        {[0, 1, 2, 3].map((bar) => (
          <div key={bar} className="mx-auto h-[3.5%] w-[62%] rounded-[1px] bg-[#6b7268]" />
        ))}
      </div>
      <div className="absolute left-[18%] right-[4%] top-[8%] grid h-[30%] grid-cols-3 gap-[4%]">
        {[0, 1, 2].map((card) => (
          <div key={card} className="border border-[#232723] px-[10%] pt-[16%]">
            <div className="h-[22%] w-[62%] rounded-[1px] bg-[#ecefe8]" />
            <div className="mt-[18%] h-[12%] w-[84%] rounded-[1px] bg-[#9aa197]" />
          </div>
        ))}
      </div>
      <svg viewBox="0 0 200 80" className="absolute bottom-[6%] left-[20%] h-[44%] w-[74%]" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d39a3a" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#d39a3a" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points="0,58 24,46 48,50 78,28 108,34 136,16 164,26 200,10 200,80 0,80" fill={`url(#${gid})`} />
        <polyline
          points="0,58 24,46 48,50 78,28 108,34 136,16 164,26 200,10"
          fill="none"
          stroke="#d39a3a"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}

const recipes = [
  Fernhouse,
  Quarry,
  Tidepool,
  Kiln,
  ParcelDocs,
  Stillwater,
  MothRadio,
  Gridline,
  Saltmarsh,
  HexaLabs,
  PocketArcade,
  Copperline,
]

export function MiniSite({ id }: { id: number }) {
  const Recipe = recipes[id - 1] ?? Fernhouse
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Recipe />
    </div>
  )
}
