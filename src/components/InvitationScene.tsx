import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ENVELOPE_OPEN_MS, Envelope } from './Envelope'
import { Letter } from './Letter'

type Stage = 'closed' | 'opening' | 'letter'

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
            // Уход только по прозрачности: конверт уже стоит в первом экране,
            // любой transform здесь читается как рывок на фоне растущего письма.
            exit={{ opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0.18 : 0.32,
              // Симметричная кривая придерживает конверт, пока письмо набирает
              // плотность: без неё между исчезновением и появлением — пустой кадр.
              ease: [0.45, 0, 0.55, 1],
            }}
          >
            <Envelope
              // Конверт остаётся «открытым» и во время своего exit,
              // иначе он успевает схлопнуться обратно в закрытый вид.
              opening={stage !== 'closed'}
              reduceMotion={reduceMotion}
              onOpen={() => setStage('opening')}
            />
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            className="stage stage--letter"
            // Вход письма живёт на бумаге (.letter__paper). Второй fade на
            // обёртке перемножался с ним и давал почти пустой кадр на стыке.
            initial={false}
          >
            <Letter reduceMotion={reduceMotion} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
