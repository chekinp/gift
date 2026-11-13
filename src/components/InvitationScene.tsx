import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ENVELOPE_OPEN_MS, Envelope } from './Envelope'
import { Letter } from './Letter'

type Stage = 'closed' | 'opening' | 'letter'

const EASE = [0.22, 1, 0.36, 1] as const

export function InvitationScene() {
  const [stage, setStage] = useState<Stage>('closed')
  const reduceMotion = useReducedMotion() ?? false

  useEffect(() => {
    if (stage !== 'opening') return

    // ENVELOPE_OPEN_MS синхронизирован с полным завершением анимации карточки
    const timer = window.setTimeout(
      () => setStage('letter'),
      reduceMotion ? 320 : ENVELOPE_OPEN_MS,
    )

    return () => window.clearTimeout(timer)
  }, [stage, reduceMotion])

  return (
    <main className="scene">
      <p className="visually-hidden" aria-live="polite">
        {stage === 'letter' ? 'Приглашение открыто' : ''}
      </p>

      <AnimatePresence mode="sync" initial={false}>
        {stage !== 'letter' ? (
          <motion.div
            key="envelope"
            className="stage stage--envelope"
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -14, scale: 0.992 }
            }
            transition={{
              duration: reduceMotion ? 0.18 : 0.5,
              ease: [0.4, 0, 0.2, 1],
              // Конверт растворяется быстрее, чем доплывает, — не спорит с письмом
              opacity: { duration: reduceMotion ? 0.18 : 0.38, ease: EASE },
            }}
          >
            <Envelope
              opening={stage === 'opening'}
              reduceMotion={reduceMotion}
              onOpen={() => setStage('opening')}
            />
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            className="stage stage--letter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduceMotion ? 0.2 : 0.3, ease: EASE }}
          >
            <Letter reduceMotion={reduceMotion} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
