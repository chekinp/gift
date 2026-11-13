import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useEffect, useState } from 'react'
import { invitation } from '../content/invitation'
import { WaxSeal } from './Ornaments'

type EnvelopeProps = {
  opening: boolean
  reduceMotion: boolean
  onOpen: () => void
}

const EASE_OUT = [0.22, 1, 0.36, 1] as const
const EASE_SOFT = [0.45, 0, 0.55, 1] as const
const EASE_FALL = [0.55, 0, 0.86, 0.35] as const
// Письмо: медленный отрыв, разгон в середине, длинный мягкий выкат.
// Кривая без перелома скорости — в отличие от склейки ease-in-out + ease-out.
const EASE_PULL = [0.35, 0, 0.2, 1] as const

/**
 * Один таймлайн на всё открытие. InvitationScene берёт ENVELOPE_OPEN_MS,
 * чтобы письмо появлялось ровно в момент, когда карточка закончила выезд.
 */
const TIMING = {
  sealDelay: 0.09,
  sealDuration: 0.62,
  flapDelay: 0.32,
  flapDuration: 0.9,
  flapSettleAt: 0.72,
  cardDelay: 0.46,
  cardDuration: 1.78,
  envelopeFadeDelay: 1.52,
}

export const ENVELOPE_OPEN_MS = 2280

// Крупные колотые осколки сургуча — стартуют вдоль линии трещины
const WAX_CRUMBS = [
  { size: 6.5, x: -2, y: -8, dx: -28, dy: 38, rotate: -165, delay: 0.03, shape: 'polygon(30% 0%, 70% 5%, 90% 35%, 75% 80%, 15% 95%, 0% 40%)' },
  { size: 7, x: 3, y: -12, dx: 32, dy: 35, rotate: 145, delay: 0.04, shape: 'polygon(15% 8%, 85% 0%, 95% 50%, 60% 90%, 5% 75%, 0% 30%)' },
  { size: 5.5, x: -1, y: 6, dx: -22, dy: 42, rotate: 195, delay: 0.06, shape: 'polygon(40% 0%, 100% 20%, 85% 70%, 50% 100%, 0% 65%, 10% 25%)' },
  { size: 6, x: 2, y: 10, dx: 26, dy: 45, rotate: -185, delay: 0.07, shape: 'polygon(25% 5%, 75% 0%, 100% 45%, 70% 95%, 20% 90%, 0% 50%)' },
  { size: 5, x: -3, y: -4, dx: -35, dy: 28, rotate: 175, delay: 0.08, shape: 'polygon(50% 0%, 95% 30%, 80% 80%, 35% 100%, 5% 60%, 15% 20%)' },
  { size: 6.8, x: 1, y: 14, dx: 18, dy: 48, rotate: -210, delay: 0.09, shape: 'polygon(35% 0%, 80% 10%, 100% 55%, 65% 95%, 10% 85%, 0% 35%)' },
  { size: 5.2, x: -1, y: -15, dx: -16, dy: 32, rotate: 158, delay: 0.1, shape: 'polygon(45% 5%, 90% 0%, 100% 40%, 75% 90%, 25% 100%, 5% 50%)' },
  { size: 4.8, x: 2, y: 18, dx: 24, dy: 52, rotate: -225, delay: 0.11, shape: 'polygon(30% 0%, 85% 15%, 90% 65%, 55% 100%, 15% 80%, 0% 30%)' },
]

const TILT_SPRING = { stiffness: 150, damping: 22, mass: 0.7 }

export function Envelope({ opening, reduceMotion, onOpen }: EnvelopeProps) {
  const [flapSettled, setFlapSettled] = useState(false)
  const [hovered, setHovered] = useState(false)

  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const tiltX = useSpring(pointerX, TILT_SPRING)
  const tiltY = useSpring(pointerY, TILT_SPRING)

  const rotateY = useTransform(tiltX, [-1, 1], [-3.4, 3.4])
  const rotateX = useTransform(tiltY, [-1, 1], [2.6, -2.6])

  useEffect(() => {
    if (!opening) {
      setFlapSettled(false)
      return
    }

    // Клапан уходит за конверт, когда в 3D он уже за вертикалью,
    // поэтому смена z-index не читается как рывок.
    const timer = window.setTimeout(
      () => setFlapSettled(true),
      reduceMotion ? 40 : TIMING.flapSettleAt * 1000,
    )

    return () => window.clearTimeout(timer)
  }, [opening, reduceMotion])

  useEffect(() => {
    if (!opening) return
    pointerX.set(0)
    pointerY.set(0)
  }, [opening, pointerX, pointerY])

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (reduceMotion || opening || event.pointerType !== 'mouse') return

    const rect = event.currentTarget.getBoundingClientRect()
    const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1
    const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1

    pointerX.set(Math.max(-1, Math.min(1, nx)))
    pointerY.set(Math.max(-1, Math.min(1, ny)))
  }

  const resetTilt = () => {
    pointerX.set(0)
    pointerY.set(0)
    setHovered(false)
  }

  const entranceTransition = reduceMotion
    ? { duration: 0.2 }
    : opening
      ? {
          y: { duration: 1.15, delay: 0.25, ease: EASE_OUT },
          scale: { duration: 1.15, delay: 0.25, ease: EASE_OUT },
          opacity: { duration: 0.3 },
        }
      : { type: 'spring' as const, stiffness: 260, damping: 26, mass: 0.9 }

  const sealTransition = reduceMotion
    ? { duration: 0.12 }
    : {
        duration: TIMING.sealDuration,
        delay: TIMING.sealDelay,
        times: [0, 0.16, 0.55, 1],
        ease: [EASE_SOFT, EASE_FALL, EASE_FALL],
      }

  const flapTransition = reduceMotion
    ? { duration: 0.2 }
    : opening
      ? {
          duration: TIMING.flapDuration,
          delay: TIMING.flapDelay,
          times: [0, 0.8, 1],
          ease: [EASE_OUT, EASE_SOFT],
        }
      : { duration: 0.3, ease: EASE_OUT }

  const cardTransition = reduceMotion
    ? { duration: 0.2 }
    : {
        duration: TIMING.cardDuration,
        delay: TIMING.cardDelay,
        times: [0, 0.88, 1],
        ease: [EASE_PULL, EASE_SOFT],
      }

  return (
    <motion.button
      type="button"
      className="envelope-trigger"
      onClick={onOpen}
      onPointerMove={handlePointerMove}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') setHovered(true)
      }}
      onPointerLeave={resetTilt}
      onBlur={resetTilt}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          if (!opening) onOpen()
        }
      }}
      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
      disabled={opening}
      aria-label={opening ? 'Приглашение открывается' : 'Открыть приглашение'}
      aria-expanded={opening}
      aria-controls="invitation-letter"
    >
      <motion.span
        className="envelope-entrance"
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
        animate={
          reduceMotion
            ? { opacity: 1, y: 0, scale: 1 }
            : opening
              ? { opacity: 1, y: 12, scale: 1.014 }
              : { opacity: 1, y: hovered ? -5 : 0, scale: 1 }
        }
        transition={entranceTransition}
      >
        <motion.span
          className={`envelope${opening ? ' is-opening' : ''}${flapSettled ? ' is-flap-settled' : ''}`}
          aria-hidden="true"
          style={
            reduceMotion
              ? undefined
              : { rotateX, rotateY, transformPerspective: 1600 }
          }
        >
          <span className="envelope__shadow" />
          <span className="envelope__back">
            <span className="envelope__liner" />
            <span className="envelope__liner-shade" />
          </span>

          <motion.span
            className="envelope__card"
            style={{ transformOrigin: '50% 100%' }}
            animate={
              opening
                ? reduceMotion
                  ? { y: '0%', rotate: 0, scale: 1, opacity: 0 }
                  : {
                      // Мягкий «выкат» с едва заметной посадкой на место
                      y: ['0%', '-59.2%', '-58%'],
                      rotate: [0, -1.5, -1.2],
                      scale: [1, 1.105, 1.1],
                      opacity: 1,
                    }
                : { y: '0%', rotate: 0, scale: 1, opacity: 1 }
            }
            transition={cardTransition}
          >
            <span className="envelope__card-inner">
              <span className="envelope__card-preview-line envelope__card-preview-line--short" />
              <span className="envelope__card-preview-line" />
            </span>
          </motion.span>

          <span className="envelope__side envelope__side--left" />
          <span className="envelope__side envelope__side--right" />
          <motion.span
            className="envelope__pocket"
            animate={
              opening && !reduceMotion
                ? { opacity: [1, 1, 0.6], y: [0, 0, 8] }
                : { opacity: 1, y: 0 }
            }
            transition={
              opening && !reduceMotion
                ? { duration: 0.45, delay: TIMING.envelopeFadeDelay, ease: EASE_OUT }
                : { duration: 0.1 }
            }
          />
          <motion.svg
            className="envelope__pocket-edge"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            animate={
              opening && !reduceMotion
                ? { opacity: [1, 1, 0], y: [0, 0, 12] }
                : { opacity: 1, y: 0 }
            }
            transition={
              opening && !reduceMotion
                ? { duration: 0.42, delay: TIMING.envelopeFadeDelay, ease: EASE_OUT }
                : { duration: 0.1 }
            }
          >
            <path d="M0 100 50 50 100 100" />
          </motion.svg>

          <motion.span
            className="envelope__flap"
            animate={
              opening
                ? reduceMotion
                  ? { rotateX: 0, opacity: 0 }
                  : {
                      rotateX: [0, 184, 180],
                      // Внутренняя сторона клапана не должна зависать
                      // поверх письма после переворота.
                      opacity: [1, 0.28, 0],
                    }
                : { rotateX: 0, opacity: 1 }
            }
            transition={flapTransition}
          >
            <span className="envelope__flap-face">
              <svg
                className="envelope__flap-edge"
                viewBox="0 0 100 57"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M1 1 50 56l49-55" />
              </svg>
            </span>
            <span className="envelope__flap-lining" />
          </motion.span>

          <span className="envelope__seal">
            <span className="envelope__seal-shadow" />
            {/* Цельная печать до клика — убирает шов */}
            {!opening && (
              <motion.span
                className="envelope__seal-whole"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
              >
                <WaxSeal />
              </motion.span>
            )}
            {/* Половинки при раскалывании — взрывной импульс */}
            <>
                <motion.span
                  className="envelope__seal-half envelope__seal-half--left"
                  initial={false}
                  animate={
                    !opening
                      ? { x: 0, y: 0, rotate: 0, scale: 1, opacity: 0 }
                      : reduceMotion
                      ? { opacity: 0, x: 0, y: 0, rotate: 0 }
                      : {
                          x: [0, -3, -14, -24],
                          y: [0, -2, 20, 42],
                          rotate: [0, -6, -18, -34],
                          scale: [1, 0.96, 1.03, 0.92],
                          opacity: [1, 1, 0.86, 0],
                        }
                  }
                  transition={reduceMotion ? { duration: 0.12 } : sealTransition}
                >
                  <WaxSeal />
                </motion.span>
                <motion.span
                  className="envelope__seal-half envelope__seal-half--right"
                  initial={false}
                  animate={
                    !opening
                      ? { x: 0, y: 0, rotate: 0, scale: 1, opacity: 0 }
                      : reduceMotion
                      ? { opacity: 0, x: 0, y: 0, rotate: 0 }
                      : {
                          x: [0, 3, 12, 22],
                          y: [0, -2, 17, 38],
                          rotate: [0, 6, 16, 30],
                          scale: [1, 0.96, 1.03, 0.93],
                          opacity: [1, 1, 0.86, 0],
                        }
                  }
                  transition={reduceMotion ? { duration: 0.12 } : sealTransition}
                >
                  <WaxSeal />
                </motion.span>
            </>
          </span>

            <span className="envelope__wax-crumbs">
              {WAX_CRUMBS.map((crumb, index) => (
                <motion.span
                  key={index}
                  className="envelope__crumb"
                  style={{
                    width: crumb.size,
                    height: crumb.size,
                    left: crumb.x,
                    top: crumb.y,
                    clipPath: crumb.shape,
                  }}
                  initial={false}
                  animate={
                    opening && !reduceMotion
                      ? {
                          opacity: [0, 1, 1, 0],
                          x: [0, crumb.dx * 0.35, crumb.dx * 0.72, crumb.dx],
                          y: [0, -6, crumb.dy * 0.65, crumb.dy],
                          rotate: [0, crumb.rotate * 0.3, crumb.rotate * 0.7, crumb.rotate],
                          scale: [1, 1.05, 0.95, 0.72],
                        }
                      : { opacity: 0 }
                  }
                  transition={
                    !reduceMotion
                      ? {
                          duration: 0.78,
                          delay: TIMING.sealDelay + crumb.delay,
                          times: [0, 0.15, 0.62, 1],
                          ease: [EASE_OUT, EASE_FALL, EASE_FALL],
                        }
                      : { duration: 0.15 }
                  }
                />
              ))}
            </span>
        </motion.span>
      </motion.span>

      {invitation.hint && (
        <motion.span
          className="envelope-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: opening ? 0 : 1, y: opening ? 6 : 0 }}
          transition={{
            duration: reduceMotion ? 0.15 : 0.34,
            ease: EASE_OUT,
          }}
        >
          {invitation.hint}
        </motion.span>
      )}
    </motion.button>
  )
}
