# Приглашение на день рождения

Одностраничный сайт-открытка: закрытый конверт с восковой печатью открывается и превращается в письмо-приглашение.

## Стек

- Vite + React + TypeScript
- Framer Motion
- Чистый CSS, CSS 3D-конверт
- Self-hosted Great Vibes (кириллица + латиница)

Никакого бэкенда, роутера и внешних API. Сайт собирается в статические файлы.

## Запуск

```bash
npm install
npm run dev
```

Сборка и предпросмотр production-версии:

```bash
npm run build
npm run preview
```

## Где менять текст

Весь контент открытки находится в одном файле:

`src/content/invitation.ts`

Поля:

- `hint` — подсказка под конвертом;
- `greeting` — обращение;
- `message` — текст приглашения, переносы строк сохраняются;
- `date`, `time` — блок «когда»;
- `place`, `address` — блок «где»;
- `directions`, `directionsLabel` — ссылка «как добраться» (необязательно);
- `dressCode` — дресс-код (необязательно);
- `note` — дополнительная заметка (необязательно);
- `signature` — подпись;
- `tagline` — маленькая строка под подписью (необязательно).

Пустые поля автоматически не выводятся. Если, например, очистить `note`, блок просто исчезнет.

Шрифт письма — **Great Vibes**. Кириллические WOFF2 лежат в `src/assets/fonts/`, лицензия OFL — рядом.

## Публикация на GitHub Pages

В проекте уже есть workflow `.github/workflows/deploy.yml`. Он собирает сайт и публикует `dist` при каждом push в `main`.

1. Запушьте репозиторий на GitHub.
2. Откройте **Settings → Pages**.
3. В разделе **Build and deployment** выберите **Source: GitHub Actions**.
4. Сделайте push в `main` или запустите workflow вручную во вкладке **Actions**.

`vite.config.ts` использует `base: './'`, поэтому ассеты работают и в `username.github.io/repo/`, и в корне пользовательского сайта. Роутера нет, поэтому `404.html` не нужен.

Если публикуете вручную, загрузите содержимое папки `dist` в ветку `gh-pages` (файл `.nojekyll` уже добавлен).

## Структура

```
src/
  components/
    InvitationScene.tsx  — сцена и переходы состояний
    Envelope.tsx          — конверт, печать, анимация открытия
    Letter.tsx            — письмо
    Background.tsx        — фон
    Petals.tsx            — лепестки
    Ornaments.tsx         — ботаника и восковая печать
  content/invitation.ts   — весь текст
  styles/                 — токены и стили
  assets/                 — шрифты и паттерн подкладки
```
