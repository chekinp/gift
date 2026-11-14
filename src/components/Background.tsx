import type { CSSProperties } from 'react'

const asset = (name: string) => `${import.meta.env.BASE_URL}${name}`

type FilmPhoto = {
  name: string
  /** Точка фокуса, чтобы кадрирование не срезало лица на вертикальных снимках. */
  position: string
  /** Ширина к высоте. У вертикальных снимков кадр уже, но такой же высокий. */
  ratio?: number
}

type FilmStrip = {
  angle: number
  duration: number
  reverse: boolean
  /** Какой кадр начинает ленту. */
  offset: number
  /** Шаг по общему списку: все кадры попадают в ленту ровно один раз. */
  stride: number
  opacity: number
}

const PHOTOS: FilmPhoto[] = [
  { name: 'photo_2026-11-14_00-59-06', position: '50% 38%' },
  { name: 'photo_2026-11-14_00-59-08', position: '50% 36%' },
  { name: 'photo_2026-11-14_00-59-10', position: '50% 34%' },
  { name: 'photo_2026-11-14_00-59-12', position: '50% 36%' },
  { name: 'photo_2026-11-14_00-59-19', position: '50% 30%', ratio: 0.75 },
  { name: 'photo_2026-11-14_00-59-21', position: '50% 42%' },
  { name: 'photo_2026-11-14_00-59-23', position: '50% 34%', ratio: 0.75 },
  { name: 'photo_2026-11-14_00-59-25', position: '50% 40%' },
  { name: 'photo_2026-11-14_00-59-28', position: '50% 30%', ratio: 0.75 },
  { name: 'photo_2026-11-14_00-59-29', position: '50% 44%' },
  { name: 'photo_2026-11-14_00-59-31', position: '50% 40%' },
  { name: 'photo_2026-11-14_00-59-32', position: '50% 36%' },
  { name: 'photo_2026-11-14_00-59-33', position: '50% 38%' },
  { name: 'photo_2026-11-14_00-59-34', position: '50% 36%' },
  { name: 'photo_2026-11-14_00-59-35', position: '50% 44%' },
]

// Три ленты различаются наклоном, скоростью, направлением и порядком кадров.
// Верхняя и нижняя обрамляют сцену, средняя уходит за конверт и работает
// глубинным слоем: она медленнее и приглушённее. Шаги 1, 7 и 8 не дают
// вертикальным кадрам встать вплотную друг к другу. Углы небольшие, потому
// что кадры стали крупными и не должны срезаться о верхнюю и нижнюю кромки.
const STRIPS: FilmStrip[] = [
  { angle: -1.4, duration: 252, reverse: false, offset: 0, stride: 1, opacity: 0.82 },
  { angle: 1.1, duration: 308, reverse: true, offset: 5, stride: 7, opacity: 0.7 },
  { angle: -1.2, duration: 272, reverse: false, offset: 10, stride: 8, opacity: 0.8 },
]

const TAPE_COPIES = 3

function photoAt(index: number) {
  return PHOTOS[((index % PHOTOS.length) + PHOTOS.length) % PHOTOS.length]
}

function FilmTape({ strip, lane }: { strip: FilmStrip; lane: number }) {
  // Каждая лента — своя перестановка всех пятнадцати снимков без повторов.
  const frames = Array.from({ length: PHOTOS.length }, (_, index) => (
    photoAt(strip.offset + index * strip.stride)
  ))

  return (
    <div
      className="film-row"
      style={
        {
          gridRow: lane + 1,
          '--film-angle': `${strip.angle}deg`,
          '--film-duration': `${strip.duration}s`,
          '--film-direction': strip.reverse ? 'reverse' : 'normal',
          '--film-opacity': strip.opacity,
        } as CSSProperties
      }
    >
      <div className="film-track">
        {Array.from({ length: TAPE_COPIES }, (_, copy) => (
          <div className="film-tape" key={copy}>
            {frames.map((photo, index) => (
              <figure
                className="film-frame"
                key={`${copy}-${index}`}
                style={
                  {
                    '--photo-position': photo.position,
                    '--photo-ratio': photo.ratio ?? 4 / 3,
                  } as CSSProperties
                }
              >
                <img
                  src={asset(`lent/${photo.name}-960.jpg`)}
                  srcSet={`${asset(`lent/${photo.name}-480.jpg`)} 480w, ${asset(`lent/${photo.name}-960.jpg`)} 960w`}
                  sizes="(max-width: 640px) 52vw, (max-width: 1024px) 28vw, 24vw"
                  alt=""
                  loading="eager"
                  decoding="async"
                  fetchPriority="low"
                  draggable={false}
                />
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Background() {
  return (
    <div className="background" aria-hidden="true">
      <div className="film-backdrop">
        {STRIPS.map((strip, index) => (
          <FilmTape key={`${strip.offset}-${index}`} strip={strip} lane={index} />
        ))}
      </div>
      <span className="background__grain" />
      <span className="background__vignette" />
    </div>
  )
}
