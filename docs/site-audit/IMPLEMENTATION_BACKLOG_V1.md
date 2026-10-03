# Implementation Backlog V1

План складений після `AUDIT_01_CURRENT_STATE.md` і до змін сторінок; його TODO-позначки є знімком початкового плану. Виконані роботи та залишкові блокери описані в [`AUDIT_02_AFTER_IMPLEMENTATION.md`](AUDIT_02_AFTER_IMPLEMENTATION.md) і [`IMPLEMENTATION_BACKLOG_V2.md`](IMPLEMENTATION_BACKLOG_V2.md). Усі відсутні бізнес-дані фіксуються окремо в `docs/CONTENT_GAPS.md`.

## Shared platform

### SYS-001 — SEO/page metadata
Status: TODO · Priority: P0
Routes: усі індексовані сторінки
Task: додати canonical, OG/Twitter, title/description, sitemap routes та breadcrumb structured data. Product/FAQ schema тільки при підтверджених полях і видимому контенті.
Acceptance: у кожної публічної сторінки унікальні title/description/H1; canonical веде на `/Grice`-aware public URL; sitemap не містить alias routes.

### SYS-002 — Shared design blocks
Status: TODO · Priority: P0
Routes: всі нові сторінки
Task: створити повторно-використовувані PageHero, Breadcrumbs, SectionIntro, CTA, FAQ, ProcessTimeline, ImageTile, LeadForm, ProductCard, Comparison, BeforeAfter.
Acceptance: однакові відступи/tokens/focus styles; блоки адаптивні; існуючий memorial page не переписаний.

### SYS-003 — Навігація та контакти з одним джерелом
Status: TODO · Priority: P1
Routes: усі сторінки
Task: загальна навігація до всіх напрямків; централізувати конфіг контактів; прибрати твердження/реквізити, які не мають підтвердження, або позначити gaps в конфігурації, не вигадувати значень.
Acceptance: active nav коректна; mobile меню закривається за кліком; телефон/адреса/години не видаються за перевірені дані.

### SYS-004 — Заявка й фото-вкладення
Status: TODO · Priority: P0
Routes: contact, catalog/product pages, art/portrait/landscaping
Task: спільна форма з ім’ям, телефоном, містом/кладовищем, коментарем, optional image file; MIME/size validation, локальна назва файлу, accessible errors/status. Не відправляти файл без backend; пояснити ручне прикріплення до email-чернетки.
Acceptance: потрібні поля мають зрозумілу помилку; файл валідований; submit формує прозорий наступний крок; жодне PII не надсилається непомітно.

### SYS-005 — Content truthfulness
Status: TODO · Priority: P0
Routes: home, footer, old service pages, contact
Task: прибрати не підтверджені слова «гарантія/преміум», телефон, адресу, години роботи; адреса одержувача email залишається для перевірки в `CONTENT_GAPS`.
Acceptance: публічні фактичні заяви мають джерело в коді/даних користувача або сформульовані як те, що узгоджується індивідуально.

## Home and preserved demo

### HOME-001 — Зберегти головну та зв’язати IA
Status: TODO · Priority: P0
Task: зберегти hero та шість карток; спрямувати кожну на канонічний route. Додати кроки форми/каменю/розміру/портрета/напису/благоустрою як editorial flow, прості фактури, блок робіт-концептів, before/after concepts, process та upload CTA.
Acceptance: home візуально впізнавана; нові секції не дублюють QR story; concept/illustrative зображення позначені.

### QR-001 — Зберегти існуюче demo
Status: TODO · Priority: P1
Route: `/memory/oleksandr-kovalenko`
Task: не редизайнити вже опрацьовану сторінку; звірити всі посилання/assets/alt, лишити demo/local preview disclosure; додати посилання на explanatory `/digital-memorial`.
Acceptance: діалоги, tabs, photo viewer, локальний preview залишаються функціональними; сімейні/аудіо дані не видаються за підтверджені.

## Commercial IA

### MON-001 — Каталог `/monuments`
Status: TODO · Priority: P0
Task: hero, progressive category chooser (одинарні/подвійні/сімейні, вертикальні/горизонтальні, комплекси/фігурні), фільтри по типу/формі/стилю, нехардкоджені моделі. Вибір каменю, розміру й товщини позначити як preliminary preferences. Додати scale explainer, anatomy desktop hotspots/mobile stacked cards, surface finish specimens, фактори вартості, process, FAQ.
Acceptance: фільтр змінює список; нульовий стан зрозумілий; ніде немає непідтверджених цін/розмірів/доступності.

### MON-002 — Product data та моделі `/monuments/[slug]`
Status: TODO · Priority: P0
Task: structured TypeScript Monument data; 4+ editorial design concepts; gallery/lightbox, form with selected model, related concepts. Не генерувати SKU, warranty, availability, weight чи exact dimensions.
Acceptance: dynamic route з валідованим slug; зміни data layer автоматично оновлюють listing/detail; концепції чітко позначені, форма передає назву моделі.

### STONE-001 — `/stones`
Status: TODO · Priority: P1
Task: hero, 4+ illustrative material tiles, desktop compare/mobile cards за кольором/зерном/контрастом/візуальним характером і комбінаціями.
Acceptance: фактури названі illustrative; сорти походження/наявність/price tiers не вигадуються; CTA передає вибрану палітру як запит.

### ART-001 — `/artwork`
Status: TODO · Priority: P1
Task: візуальна бібліотека мотивів (віра, квіти, природа, професія/служба, хобі, українські мотиви), способи розміщення й стилі; CTA з прикладом/файлом.
Acceptance: фільтри й preview selection працюють; виробничі техніки описані лише як доступні після підтвердження, concept art не маскується під портфоліо.

### POR-001 — `/portraits-lettering`
Status: TODO · Priority: P1
Task: формати портрета, підготовка фото з before/after concept, фотокераміка лише як запит до уточнення, 6–10 шрифтових карток, методи напису/фініш/епітафії, етап погодження макета.
Acceptance: вибраний формат/шрифт додається до форми; складні написи не відображаються як згенерований фототекст; непідтверджені методи не обіцяються.

### INST-001 — `/installation`
Status: TODO · Priority: P1
Task: вимоги для запиту, залежність правил від кладовища, часові етапи, варіанти робіт як те, що узгоджується, фактори розрахунку, concept case sequence.
Acceptance: не наведено універсальних конструктивних норм, районів, строків чи цін.

### LAND-001 — `/landscaping`
Status: TODO · Priority: P1
Task: системні елементи місця, п’ять visual styles, колірні поєднання, guided chooser для border/paving/fill/flowerbed/accessories, before/after concepts.
Acceptance: chooser додає вибір у форму; матеріали/наявність не подані як інвентар.

### DIG-001 — `/digital-memorial`
Status: TODO · Priority: P1
Task: зберегти demo як продуктову ілюстрацію; описати модулі, plaque як уточнювану специфікацію, privacy/longevity як перелік відкритих рішень, link architecture без обіцянки permanent redirect/service plan.
Acceptance: посилання на наявне memorial demo; невирішені privacy/hosting/retention функції явно не продаються як чинні.

### WORK-001 — `/works`
Status: TODO · Priority: P1
Task: зробити filters і case cards із visual concept boards замість вигаданих real cases; після приходу фото замінити дані на реальні кейси.
Acceptance: на першому екрані прямо сказано, що це концептуальні візуалізації, не виконані замовлення.

### ABOUT-001 — `/about`
Status: TODO · Priority: P2
Task: описати спосіб роботи та роль майстерні без вигаданих дат/людей/сертифікатів/географії.
Acceptance: уся фактична інформація має джерело або є нейтральним описом процесу.

### CONTACT-001 — `/contact`
Status: TODO · Priority: P0
Task: компактний контактний funnel і форма; перед релізом легке підключення підтверджених даних.
Acceptance: відсутні dummy phone/address/hours; зрозумілий стан після відправки; канал одержувача не маскується.

## SEO, visual QA

### SEO-001 — Canonical legacy routes
Status: TODO · Priority: P1
Task: направити home links на нові hubs, legacy `/services/*` лишити доступними для старих посилань, але канонізувати до відповідної hub сторінки або відрізнити їх контентом так, щоб не конкурували з нею.
Acceptance: немає двох однакових сторінок у sitemap/indexing.

### QA-001 — First browser walkthrough
Status: TODO · Priority: P0
Acceptance: кожен route/CTA/filter/accordion/gallery/form/upload/nav перевірений; знімки desktop/mobile є в `docs/site-audit`.

### QA-002 — Second audit, V2 backlog, fixes
Status: TODO · Priority: P0
Acceptance: `AUDIT_02_AFTER_IMPLEMENTATION.md` містить тільки нові знахідки; backlog V2 виписаний і P0/P1 виправлений до final QA.

### QA-003 — Final technical QA
Status: TODO · Priority: P0
Acceptance: check/build, routes, links/assets, console, responsive 390/768/1024/1440, keyboard/focus/contrast basics, sitemap/404, no placeholder facts.
