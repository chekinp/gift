export type InvitationContent = {
  hint: string
  greeting: string
  message: string
  date: string
  time: string
  place: string
  address: string
  directions: string
  directionsLabel: string
  dressCode: string
  note: string
  signature: string
  tagline: string
}

/**
 * Всё содержимое открытки живёт здесь.
 * Пустые поля автоматически не выводятся на письме.
 */
export const invitation: InvitationContent = {
  hint: 'Нажмите на конверт',
  greeting: 'Катюша и Сашуля',
  message:
    'Наши любимые девочки,\nмы приглашаем вас отпраздновать наш день рождения!! 💌',
  date: '29.11 (воскресенье)',
  time: '14:00',
  place: 'улица Автозаводская, 21, к. 1',
  address: '3 подъезд, 3 этаж',
  directions: 'https://makeupkitchen.ru/findzil',
  directionsLabel: 'как добраться',
  dressCode: 'розовый 🩷',
  note:
    'Мы организуем шикарный праздник и будем очень рады, если вы станете его частью! 🎂🎉\n\nНебольшие сюрпризы для вас уже готовятся, а вам нужно просто принести с собой хорошее настроение и быть готовыми творить 💝\n\nС нетерпением ждём вас!! 💋',
  signature: 'С любовью,\nНастя & Уля 💞',
  tagline: 'Two birthday girls, twice the fun! 🎀',
}
