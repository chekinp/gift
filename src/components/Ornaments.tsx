import { useId } from 'react'

type OrnamentProps = {
  className?: string
}

export function Sprig({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 180 68"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* Soft watercolour wash behind the spray */}
      <ellipse
        cx="92"
        cy="34"
        rx="66"
        ry="16"
        fill="currentColor"
        fillOpacity="0.04"
        transform="rotate(-9 92 34)"
      />

      <g
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* One flowing pen line for the stem, thinning towards the bud */}
        <path d="M6 57C33 56 55 49 77 41 94 35 111 29 126 24" />
        <path d="M152 21C160 19 167 16 173 12" strokeOpacity="0.95" />

        {/* Open leaf loops, alternating above and below the stem */}
        <path
          d="M27 53C18 48 16 38 24 31 33 37 35 47 27 53Z"
          fill="currentColor"
          fillOpacity="0.16"
        />
        <path d="M51 47C58 51 67 46 70 37 62 33 53 38 51 47" />
        <path
          d="M73 39C65 33 64 23 71 17 80 22 82 33 73 39Z"
          fill="currentColor"
          fillOpacity="0.16"
        />
        <path d="M95 31C102 34 110 29 112 21 104 18 96 23 95 31" />
        <path
          d="M114 25C109 20 109 13 114 9 119 13 120 20 114 25Z"
          fill="currentColor"
          fillOpacity="0.16"
        />

        {/* The rose: outer cup, curled middle petal, tight centre */}
        <path
          d="M140 10C149 11 155 18 153 26 151 34 143 38 136 35 128 32 126 23 131 18 135 14 141 12 145 15"
          fill="currentColor"
          fillOpacity="0.2"
        />
        <path d="M140 17C136 16 133 19 134 23 135 27 140 28 143 25 146 22 144 18 140 17" />
        <path d="M139 20C140 19 141.4 20 140.8 21.6" />

        {/* Sepals and a small bud at the very tip */}
        <path d="M133 34C131 37 128 38 125 37 127 34 130 33 133 34Z" fill="currentColor" fillOpacity="0.22" />
        <path d="M148 33C151 35 152 38 151 40 148 38 147 35 148 33Z" fill="currentColor" fillOpacity="0.22" />
        <path
          d="M172 12C172 6 176 2 181 2 180 7 177 11 172 12Z"
          fill="currentColor"
          fillOpacity="0.18"
        />

        {/* Fine tendrils and a few dusty berries */}
        <path d="M36 49C40 51 44 50 46 47" strokeOpacity="0.7" />
        <path d="M82 35C86 38 90 37 92 34" strokeOpacity="0.7" />
        <path d="M105 27C108 30 112 30 114 28" strokeOpacity="0.7" />
        <circle cx="44" cy="40" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="88" cy="25" r="1.15" fill="currentColor" stroke="none" />
        <circle cx="160" cy="13" r="1.05" fill="currentColor" stroke="none" />
        <circle cx="128" cy="11" r="0.8" fill="currentColor" stroke="none" opacity="0.6" />
        <circle cx="153" cy="33" r="0.7" fill="currentColor" stroke="none" opacity="0.55" />
      </g>
    </svg>
  )
}

export function TinyFlower({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M12 12C10.3 8.6 10.5 4.9 12.2 3.7 14 4.8 13.9 8.6 12 12"
          fill="currentColor"
          fillOpacity="0.18"
        />
        <path d="M12 12C15.3 10.4 18.7 11.1 19.4 13 18 14.7 14.6 13.9 12 12" />
        <path d="M12 12C15.1 13.8 16.9 16.8 15.9 18.7 13.8 18.4 12.1 15.5 12 12" />
        <path
          d="M12 12C10.2 15.1 7.3 16.9 5.5 15.8 5.9 13.7 8.8 12.1 12 12"
          fill="currentColor"
          fillOpacity="0.18"
        />
        <path d="M12 12C8.6 11.3 5.6 9 5.9 6.9 8.1 6.6 10.8 8.9 12 12" />
        <path d="M12 10.7C13.4 10.6 14.1 11.6 13.5 12.7 12.8 13.8 11.1 13.5 10.9 12.2 10.8 11.1 11.9 10.2 12.9 10.8" />
        <circle cx="12" cy="12" r="0.65" fill="currentColor" stroke="none" />
      </g>
    </svg>
  )
}

export function Heart({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 44 38"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* A single continuous calligraphic stroke: heart, then a released swash */}
      <path
        d="M22 32C14.5 26 6.5 20.5 5.5 13.5 4.5 6.4 12.4 3.9 18 9.8 19.2 11 20.7 12.8 22 14.6 23.6 12.2 25.3 10 27 8.8 33.1 4.5 40.2 7.8 39 14.9 37.9 21.9 29.9 26.8 22 32 26.4 34.3 31.6 34.2 35.2 31.6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CornerFlourish({ className }: OrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g
        stroke="currentColor"
        strokeWidth="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 30C2 14.5 14.5 2 30 2" />
        <path d="M8.5 30C8.5 18.7 18.7 8.5 30 8.5" />
        <path
          d="M29 9C23.5 9.4 19.8 12.8 18.6 18.2 23.8 17.4 27.6 14.2 29 9Z"
          fill="currentColor"
          fillOpacity="0.14"
        />
        <circle cx="15.6" cy="15.6" r="0.8" fill="currentColor" stroke="none" />
      </g>
    </svg>
  )
}

const sealOuterPath =
  'M52.6 1.7c2.6-.5 6.7 3.1 11.6 4.2 4.9 1.1 8.4 3.8 12.3 6.8 3.9 3 6.2 6.9 9.1 10.8 2.9 3.9 5.8 7.9 6.1 12.9.3 5 3.7 9.2 2.9 14.1-.8 4.9-2.1 9.8-5.2 13.9-3.1 4.1-2.3 8.9-6.1 12.7-3.8 3.8-6.2 8.7-11.1 10.9-4.9 2.2-8.3 5.9-13.2 5.8-4.9-.1-7.9 3.7-12.8 2.1-4.9-1.6-9.2 0.9-13.9-2.3-4.7-3.2-9.8-3.4-12.9-7.2-3.1-3.8-7.9-5.7-9.8-10.2-1.9-4.5-3.9-7.9-4.8-12.9-.9-5-3.7-8.1-2.9-13 0.8-4.9-0.9-8.9 1.9-13.8 2.8-4.9 3.2-9.7 7.1-13.7 3.9-4 5.3-7.9 10.2-10.8 4.9-2.9 8.1-6.8 12.9-7.9 4.8-1.1 8.9-2.8 13.1-2.3 1.5-0.2 4.1 0.2 5.5-0.1Z'

/* Углубление оттиска — не идеальный круг: воск «плывёт» под печатью */
const sealWellPath =
  'M84.6 50C84.4 58.6 80.6 67.3 73.6 73.6 67 79.6 59 84.6 50 85.2 41.1 85.8 32.2 81.7 26.1 73.9 19.8 65.9 15.6 57.8 15.6 50 15.6 41.2 19.7 32.4 25 25 30.5 17.4 40.2 16.1 50 16.8 59.8 17.5 67.6 21.7 74.6 25.4 81.3 28.9 84.9 41.4 84.6 50Z'

/* Роза на печати: венчик с лепестками, спиральная сердцевина и стебель с листьями */
const roseOuterPath =
  'M41.96 31.71 C43.17 25.76 57.18 25.9 57.88 31.84 C64.05 30.66 68.13 44.35 62.24 46.37 C65.27 51.25 54.15 59.51 49.95 55.5 C45.66 59.77 34.41 51.29 37.64 46.34 C32.45 44.22 36.45 30.99 41.96 31.71 Z'

const roseSeamPaths = [
  'M57.88 31.84 C59.33 34.75 58.87 40.25 57.05 44.19 S54.39 46.39 52.32 47.28',
  'M62.24 46.37 C60.13 48.73 54.77 50.05 50.46 49.59 S47.52 47.76 46.02 46.09',
  'M49.95 55.5 C47.06 53.93 44.13 49.25 43.22 45.01 S44.04 41.65 45.15 39.7',
  'M37.64 46.34 C38.03 43.16 41.56 38.91 45.3 36.72 S48.74 36.43 50.95 36.88',
  'M41.96 31.71 C45.27 31.27 50.44 33.21 53.74 36.03 S55.13 39.19 55.43 41.42',
]

const roseSpiralPath =
  'M46.2 43.4 C45.5 40.4 47.2 37.9 50 37.8 C53.2 37.7 55 40 54.5 42.6 C54 45.4 51.5 46.8 49 46.2 C46.5 45.6 45.2 43.4 45.9 41.2 C46.6 39 48.7 38.2 50.5 39 C52.3 39.8 52.5 41.8 51.6 43 C50.7 44.2 49.1 44.3 48.4 43.4 C47.7 42.5 48.2 41.4 49.1 41.4 C49.9 41.4 50.4 42.1 50.2 42.8'

const roseStemPath = 'M50 57.5 C50.9 62 49.6 67.4 50.1 73.5'
const roseLeafLeftPath =
  'M50.1 63.8 C44.3 60.2 37.7 59.4 32.6 61.7 C36.3 66.4 42.9 68.4 50.1 63.8 Z'
const roseLeafLeftVeinPath = 'M50.1 63.8 C44.5 62.9 38.7 62 33.6 61.9'
const roseLeafRightPath =
  'M50 68.6 C55.8 64.7 62.4 63.8 67.1 66 C63.2 70.7 56.6 72.8 50 68.6 Z'
const roseLeafRightVeinPath = 'M50 68.6 C55.6 67.5 61.1 66.6 66.2 66.2'

export function WaxSeal() {
  const rawId = useId()
  const id = rawId.replace(/[^a-zA-Z0-9_-]/g, '')
  const waxBody = `wax-body-${id}`
  const waxRimOuter = `wax-rim-outer-${id}`
  const waxRimInner = `wax-rim-inner-${id}`
  const waxWell = `wax-well-${id}`
  const waxHighlight = `wax-highlight-${id}`
  const waxShadow = `wax-shadow-${id}`
  const roseEmboss = `rose-emboss-${id}`
  const waxGrain = `wax-grain-${id}`
  const waxGrainFine = `wax-grain-fine-${id}`

  return (
    <svg
      className="wax-seal"
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Тело печати: общий свет для всех слоёв (userSpaceOnUse) */}
        <radialGradient
          id={waxBody}
          gradientUnits="userSpaceOnUse"
          cx="34"
          cy="30"
          r="82"
        >
          <stop offset="0%" stopColor="var(--wax-pale)" />
          <stop offset="12%" stopColor="var(--wax-blush)" />
          <stop offset="30%" stopColor="var(--wax-mid-light)" />
          <stop offset="54%" stopColor="var(--wax-mid)" />
          <stop offset="79%" stopColor="var(--wax-dark)" />
          <stop offset="100%" stopColor="var(--wax-deep)" />
        </radialGradient>

        {/* Валик: контраст приглушён, иначе воск читается как металл */}
        <linearGradient
          id={waxRimOuter}
          gradientUnits="userSpaceOnUse"
          x1="14"
          y1="12"
          x2="80"
          y2="86"
        >
          <stop offset="0%" stopColor="var(--wax-rim-light)" stopOpacity="0.7" />
          <stop offset="34%" stopColor="var(--wax-rim-mid)" />
          <stop offset="68%" stopColor="var(--wax)" />
          <stop offset="100%" stopColor="var(--wax-dark)" />
        </linearGradient>

        {/* Внутренняя тень углубления */}
        <linearGradient
          id={waxRimInner}
          gradientUnits="userSpaceOnUse"
          x1="22"
          y1="16"
          x2="76"
          y2="82"
        >
          <stop offset="0%" stopColor="var(--wax-deep)" stopOpacity="0.44" />
          <stop offset="52%" stopColor="var(--wax-dark)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--wax-well)" stopOpacity="0.04" />
        </linearGradient>

        {/* Дно оттиска */}
        <radialGradient
          id={waxWell}
          gradientUnits="userSpaceOnUse"
          cx="46"
          cy="45"
          r="40"
        >
          <stop offset="0%" stopColor="var(--wax-mid-light)" />
          <stop offset="46%" stopColor="var(--wax-well)" />
          <stop offset="78%" stopColor="var(--wax-mid)" />
          <stop offset="100%" stopColor="var(--wax-dark)" />
        </radialGradient>

        {/* Блик слабый и широкий — матовый сургуч почти не «стеклит» */}
        <radialGradient
          id={waxHighlight}
          gradientUnits="userSpaceOnUse"
          cx="34"
          cy="29"
          r="34"
        >
          <stop offset="0%" stopColor="var(--deboss-light)" stopOpacity="0.42" />
          <stop offset="55%" stopColor="var(--wax-sheen)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--wax-sheen)" stopOpacity="0" />
        </radialGradient>

        {/* Нижняя тень — мягкая, без резкого края */}
        <radialGradient
          id={waxShadow}
          gradientUnits="userSpaceOnUse"
          cx="66"
          cy="70"
          r="35"
        >
          <stop offset="0%" stopColor="var(--wax-shadow)" stopOpacity="0" />
          <stop offset="55%" stopColor="var(--wax-edge-shadow)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--wax-shadow)" stopOpacity="0.26" />
        </radialGradient>

        {/* Рельеф розы: свет сверху-слева, мягче к нижнему краю */}
        <linearGradient
          id={roseEmboss}
          gradientUnits="userSpaceOnUse"
          x1="34"
          y1="28"
          x2="68"
          y2="74"
        >
          <stop offset="0%" stopColor="var(--wax-rose-light)" />
          <stop offset="58%" stopColor="var(--wax-rose-mid)" />
          <stop offset="100%" stopColor="var(--wax-highlight)" />
        </linearGradient>

        {/* Мелкие поры воска: два векторных паттерна под разными углами —
            сетка не читается, фильтров нет */}
        <pattern
          id={waxGrain}
          width="4.6"
          height="4.6"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(17)"
        >
          <circle cx="0.9" cy="1.1" r="0.22" fill="var(--wax-shadow)" opacity="0.5" />
          <circle cx="3.2" cy="2.9" r="0.18" fill="var(--wax-deep)" opacity="0.45" />
          <circle cx="2.1" cy="3.8" r="0.14" fill="var(--wax-rim-light)" opacity="0.5" />
        </pattern>
        <pattern
          id={waxGrainFine}
          width="7.9"
          height="7.9"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-23)"
        >
          <circle cx="1.7" cy="2.3" r="0.3" fill="var(--wax-shadow)" opacity="0.4" />
          <circle cx="5.6" cy="5.1" r="0.24" fill="var(--wax-rim-light)" opacity="0.4" />
          <circle cx="6.4" cy="1.2" r="0.2" fill="var(--wax-deep)" opacity="0.36" />
        </pattern>
      </defs>

      {/* Вторая, чуть провернутая кромка — воск натёк вторым слоем */}
      <path
        d={sealOuterPath}
        fill="var(--wax-deep)"
        opacity="0.26"
        transform="translate(50 50) scale(1.006) translate(-50 -50)"
      />

      {/* Наплывы по контуру — силуэт перестаёт быть ровным кружком */}
      <g fill={`url(#${waxBody})`}>
        <ellipse cx="84.5" cy="30" rx="6.2" ry="4.4" transform="rotate(28 84.5 30)" />
        <ellipse cx="19.5" cy="70" rx="5.4" ry="4" transform="rotate(-32 19.5 70)" />
        <ellipse cx="55" cy="93.5" rx="6.4" ry="3.6" transform="rotate(-8 55 93.5)" />
        <ellipse cx="31" cy="9.5" rx="5" ry="3.4" transform="rotate(12 31 9.5)" />
      </g>

      {/* Тело печати */}
      <path d={sealOuterPath} fill={`url(#${waxBody})`} />

      {/* Внешняя кромка: тонкая и приглушённая */}
      <path
        d={sealOuterPath}
        fill="none"
        stroke={`url(#${waxRimOuter})`}
        strokeWidth="1.4"
        strokeOpacity="0.26"
      />

      {/* Рассеянные свет и тень — асимметрия света сверху-слева */}
      <ellipse
        cx="38"
        cy="32"
        rx="22"
        ry="16"
        fill={`url(#${waxHighlight})`}
        opacity="0.28"
      />
      <ellipse
        cx="62"
        cy="68"
        rx="19"
        ry="15"
        fill={`url(#${waxShadow})`}
        opacity="0.8"
      />

      {/* Валик вокруг углубления — наплыв воска, слегка смещённый от центра */}
      <path
        d={sealWellPath}
        fill="none"
        stroke={`url(#${waxRimOuter})`}
        strokeWidth="5.6"
        strokeOpacity="0.55"
        transform="translate(50.4 50.2) scale(1.06) translate(-50 -50)"
      />

      {/* Дно углубления */}
      <path d={sealWellPath} fill={`url(#${waxWell})`} />

      {/* Внутренняя тень валика — мягкая, не «монетная» обводка */}
      <path
        d={sealWellPath}
        fill="none"
        stroke={`url(#${waxRimInner})`}
        strokeWidth="4.2"
        strokeOpacity="0.58"
        transform="translate(50.2 50.1) scale(0.985) translate(-50 -50)"
      />

      {/* Поры: только внутри силуэта */}
      <path d={sealOuterPath} fill={`url(#${waxGrain})`} opacity="0.4" />
      <path d={sealOuterPath} fill={`url(#${waxGrainFine})`} opacity="0.28" />

      {/* Тиснёная роза: мягкая тень, затем светлый рельеф */}
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <g
          transform="translate(0.7, 0.95)"
          stroke="var(--wax-shadow)"
          strokeOpacity="0.4"
          strokeWidth="1.32"
        >
          <path d={roseOuterPath} />
          {roseSeamPaths.map((d) => (
            <path key={d} d={d} />
          ))}
          <path d={roseSpiralPath} />
          <path d={roseStemPath} />
          <path d={roseLeafLeftPath} />
          <path d={roseLeafLeftVeinPath} strokeOpacity="0.6" />
          <path d={roseLeafRightPath} />
          <path d={roseLeafRightVeinPath} strokeOpacity="0.6" />
        </g>

        <g stroke={`url(#${roseEmboss})`} strokeWidth="1.26" strokeOpacity="1">
          <path
            d={roseOuterPath}
            fill={`url(#${roseEmboss})`}
            fillOpacity="0.26"
          />
          {roseSeamPaths.map((d) => (
            <path key={d} d={d} />
          ))}
          <path d={roseSpiralPath} />
          <path d={roseStemPath} />
          <path d={roseLeafLeftPath} />
          <path d={roseLeafLeftVeinPath} strokeOpacity="0.65" />
          <path d={roseLeafRightPath} />
          <path d={roseLeafRightVeinPath} strokeOpacity="0.65" />
        </g>
      </g>

      {/* Крупные поры и пузырьки — тактильная неровность поверхности */}
      <circle cx="28" cy="32" r="0.85" fill="var(--wax-rim-mid)" opacity="0.4" />
      <circle cx="72" cy="37" r="0.7" fill="var(--wax-well)" opacity="0.34" />
      <circle cx="33" cy="69" r="0.75" fill="var(--wax-texture)" opacity="0.4" />
      <circle cx="68" cy="64" r="0.8" fill="var(--wax)" opacity="0.32" />
      <circle cx="24" cy="50" r="0.55" fill="var(--wax-deep)" opacity="0.26" />
      <circle cx="78" cy="54" r="0.6" fill="var(--wax-deep)" opacity="0.24" />
      <circle cx="45" cy="88" r="0.5" fill="var(--wax-shadow)" opacity="0.22" />
    </svg>
  )
}
