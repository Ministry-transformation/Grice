# Grice

Статичний сайт Gravis на Astro. Головна та demo сторінка пам’яті збережені; навколо них додані каталоги напрямків, концепції моделей і форми попереднього запиту.

## Локальний запуск

```sh
npm ci
```

На Windows PowerShell підніміть локальний перегляд із GitHub Pages base path:

```powershell
$env:PUBLIC_BASE_PATH = "/Grice"
npm run dev
```

Відкрийте `http://localhost:4321/Grice`. Base path можна змінити через `PUBLIC_BASE_PATH`.

## Сторінки

- `/` — головна
- `/monuments` — каталог пам’ятників і добір побажань
- `/monuments/classic-single`, `/monuments/soft-curve`, `/monuments/portrait-focus`, `/monuments/family-garden` — сторінки концепцій
- `/stones` — ілюстративні тони та порівняння
- `/artwork` — художнє оформлення
- `/portraits-lettering` — портрети, текст і шрифтові напрями
- `/installation` — встановлення
- `/landscaping` — благоустрій
- `/digital-memorial` — формат цифрової пам’яті й невирішені питання
- `/works` — фільтрована добірка концептів, не реальних кейсів
- `/about`, `/contact`
- `/memory/oleksandr-kovalenko` — наявне demo сторінки пам’яті

Сторінки `/services/*` містять окремі описи кожної послуги й мають власні canonical URL. Категорійні сторінки залишаються доступними через каталог напрямків.

## SEO і домен

Кожна сторінка має окремі title/description та JSON-LD. Поточна конфігурація за замовчуванням публікує сайт як `https://ministry-transformation.github.io/Grice/`. Якщо перед деплоєм обирається власний домен, передайте `PUBLIC_SITE_URL` як його origin (наприклад `https://example.com`) і встановіть `PUBLIC_BASE_PATH=/`. Для GitHub Pages з репозиторним шляхом залиште `PUBLIC_BASE_PATH=/Grice`.

SEO аудит, локальні запити, конкуренти та план після запуску: [`docs/seo-audit-plan.md`](docs/seo-audit-plan.md).

## Форми й дані

Форми перевіряють ім’я, телефон, місто/кладовище та вибрані побажання у браузері. Коротка форма відкриває чернетку листа на `mega-gospodar@meta.ua`, яку відвідувач перевіряє і надсилає самостійно; серверного прийому чи збереження немає. Детальний прорахунок пам’ятника заповнюється у Google Формі, на яку веде окрема кнопка.

Концептуальні WebP-файли та перелік використання: [`docs/assets/ASSET_INVENTORY.md`](docs/assets/ASSET_INVENTORY.md). Реальних фото робіт поки немає; концепти не є кейсами, характеристиками наявного каменю або обіцянкою конкретної моделі.

Після-аудит, відкриті дані та QA: [`docs/site-audit/AUDIT_02_AFTER_IMPLEMENTATION.md`](docs/site-audit/AUDIT_02_AFTER_IMPLEMENTATION.md), [`docs/site-audit/FINAL_QA.md`](docs/site-audit/FINAL_QA.md), [`docs/CONTENT_GAPS.md`](docs/CONTENT_GAPS.md).

## Перевірка

```sh
npm run check
npm run build
```

GitHub Actions розгортає статичну збірку на GitHub Pages після push до `main`. Під час цієї роботи нічого не публікувалося.
