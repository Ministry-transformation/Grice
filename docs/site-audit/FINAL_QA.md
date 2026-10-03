# Final QA — Grice

Дата: 2026-10-03. Перевірено актуальний статичний build та локальний preview `http://127.0.0.1:4324/Grice/`.

## Автоматизовані перевірки

- `astro check`: 0 errors, 0 warnings, 0 hints.
- `astro build`: успішно, зібрано 23 HTML routes.
- Браузерний responsive pass: 18 маршрутів на ширинах 320, 390, 430, 768, 1024 і 1440 px — 108 комбінацій. Немає горизонтального overflow, відсутніх H1 чи помилок завантажених зображень.
- HTTP/console: 0 відповідей 4xx/5xx під час прогону, 0 console/page errors.
- Ручний/браузерний UI: mobile menu open/close; шість шрифтів; вибір концепції пам’ятника та заповнення hidden preferences; схема частин пам’ятника; 4 рядки порівняння каменю; фільтр робіт; успішна локальна підготовка email draft; memorial demo disclosure; photo lightbox open/close; audio media filter.
- Перевірено internal canonical routes і стару service route; sitemap та `favicon.svg` є у build output.

## Візуальні матеріали

Скриншоти зафіксовано на 390 px mobile для home, monuments, stones, portraits/lettering, works і memorial demo; на 1440 px desktop — для home та monuments. Усі файли зібрані в [`screenshots`](screenshots/).

## Межі цієї перевірки

- Форма тестувалась у safe local mode: тестові значення залишилися в браузері, `mailto:` draft не відкривали й нічого не надсилали.
- Файлові вкладення перевіряються за типом/розміром, але не завантажуються на сервер (backend відсутній).
- Не виконано зовнішній production deploy, реальну перевірку email-отримувача чи формальний WCAG-сертифікаційний аудит.
- Зміни лишаються локальними; GitHub Pages не оновлювався.
