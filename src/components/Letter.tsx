import { motion, type Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { invitation } from '../content/invitation'
import { CornerFlourish, Heart, Sprig, TinyFlower } from './Ornaments'

type LetterProps = {
  reduceMotion: boolean
}

const EASE = [0.22, 1, 0.36, 1] as const
const asset = (name: string) => `${import.meta.env.BASE_URL}${name}`

export function Letter({ reduceMotion }: LetterProps) {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const articleRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = window.setTimeout(
      () => {
        const target = headingRef.current ?? articleRef.current
        target?.focus({ preventScroll: true })
      },
      reduceMotion ? 160 : 520,
    )

    return () => window.clearTimeout(timer)
  }, [reduceMotion])

  const content: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: reduceMotion ? 0 : 0.26,
        staggerChildren: reduceMotion ? 0 : 0.11,
      },
    },
  }

  const item: Variants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0.2 : 0.65, ease: EASE },
    },
  }

  const whenLines = [invitation.date, invitation.time]
    .map((line) => line.trim())
    .filter(Boolean)
  const whereLines = [invitation.place, invitation.address]
    .map((line) => line.trim())
    .filter(Boolean)

  const hasWhen = whenLines.length > 0
  const hasWhere = whereLines.length > 0
  const hasGreeting = invitation.greeting.trim().length > 0
  const hasMessage = invitation.message.trim().length > 0
  const hasDirections =
    invitation.directions.trim().length > 0 &&
    invitation.directionsLabel.trim().length > 0
  const hasDressCode = invitation.dressCode.trim().length > 0
  const hasNote = invitation.note.trim().length > 0
  const hasSignature = invitation.signature.trim().length > 0
  const hasTagline = invitation.tagline.trim().length > 0

  return (
    <motion.article
      ref={articleRef}
      id="invitation-letter"
      className="letter"
      initial={reduceMotion ? { opacity: 0 } : undefined}
      animate={reduceMotion ? { opacity: 1 } : undefined}
      transition={{ duration: 0.25, ease: EASE }}
      aria-label="Приглашение на день рождения"
      tabIndex={-1}
    >
      <motion.div
        className="letter__paper"
        initial={
          reduceMotion
            ? { opacity: 0 }
            : { opacity: 0, y: -16, scale: 0.972 }
        }
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: reduceMotion ? 0.2 : 0.95,
          ease: [0.4, 0, 0.18, 1],
          opacity: {
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.35, 0, 0.45, 1],
          },
        }}
        style={{ transformOrigin: '50% 22%' }}
      >
        <span className="letter__flourish letter__flourish--tl" aria-hidden="true">
          <CornerFlourish />
        </span>
        <span className="letter__flourish letter__flourish--tr" aria-hidden="true">
          <CornerFlourish />
        </span>
        <span className="letter__flourish letter__flourish--br" aria-hidden="true">
          <CornerFlourish />
        </span>
        <span className="letter__flourish letter__flourish--bl" aria-hidden="true">
          <CornerFlourish />
        </span>

        <motion.div
          className="letter__content"
          variants={content}
          initial="hidden"
          animate="visible"
        >
          <div className="letter__inner">
            <div className="letter__top">
              <motion.p variants={item} className="letter__imprint">
                приглашение на особенный вечер
              </motion.p>

              <motion.div variants={item} className="letter__sprig-wrap">
                <Sprig className="letter__sprig" />
              </motion.div>

              <motion.div variants={item} className="letter__photo letter__photo--hero">
                <img src={asset('ob_2.jpg')} alt="" loading="eager" />
              </motion.div>

              {hasGreeting && (
                <motion.h1
                  ref={headingRef}
                  className="letter__greeting"
                  variants={item}
                  tabIndex={-1}
                >
                  {invitation.greeting}
                </motion.h1>
              )}

              {hasMessage && (
                <motion.p className="letter__message" variants={item}>
                  {invitation.message}
                </motion.p>
              )}
            </div>

            <motion.div
              className="letter__divider"
              variants={item}
              aria-hidden="true"
            >
              <span className="letter__divider-line" />
              <span className="letter__divider-flower-wrap">
                <TinyFlower className="letter__divider-flower" />
              </span>
              <span className="letter__divider-line" />
            </motion.div>

            {(hasWhen || hasWhere) && (
              <motion.div className="letter__details" variants={item}>
                {hasWhen && (
                  <div className="letter__detail">
                    <span className="letter__label">Когда</span>
                    <p className="letter__value">
                      {whenLines.map((line, index) => (
                        <span
                          key={`when-${index}`}
                          className={`letter__value-line${index > 0 ? ' letter__value-line--soft' : ''}`}
                        >
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                )}

                {hasWhen && hasWhere && (
                  <span className="letter__details-sep" aria-hidden="true" />
                )}

                {hasWhere && (
                  <div className="letter__detail letter__detail--where">
                    <span className="letter__label">Где</span>
                    <p className="letter__value">
                      {whereLines.map((line, index) => (
                        <span
                          key={`where-${index}`}
                          className={`letter__value-line${index > 0 ? ' letter__value-line--soft' : ''}`}
                        >
                          {line}
                        </span>
                      ))}
                    </p>
                    {hasDirections && (
                      <a
                        className="letter__directions"
                        href={invitation.directions}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {invitation.directionsLabel}
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            )}

            <motion.div className="letter__photos-pair" variants={item}>
              <div className="letter__photo letter__photo--half">
                <img src={asset('d_n.jpg')} alt="" loading="lazy" />
              </div>
              <div className="letter__photo letter__photo--half">
                <img src={asset('d_y.jpg')} alt="" loading="lazy" />
              </div>
            </motion.div>

            {hasDressCode && (
              <motion.p className="letter__dress" variants={item}>
                <span className="letter__dress-label">💄 дресс-код</span>
                <span className="letter__dress-value">
                  {invitation.dressCode}
                </span>
              </motion.p>
            )}

            {hasNote && (
              <motion.p className="letter__note" variants={item}>
                {invitation.note}
              </motion.p>
            )}

            <motion.footer className="letter__footer" variants={item}>
              {hasSignature && (
                <p className="letter__signature">{invitation.signature}</p>
              )}
              {hasTagline && (
                <p className="letter__tagline">{invitation.tagline}</p>
              )}
              <span className="letter__heart-wrap" aria-hidden="true">
                <Heart className="letter__heart" />
              </span>
            </motion.footer>

            <motion.div
              variants={item}
              className="letter__photo letter__photo--final"
            >
              <img src={asset('ob_fin.jpg')} alt="" loading="lazy" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.article>
  )
}
