# Соглашения по именованию в проекте

## Форматы

### kebab-case

Слова разделяются дефисами, используются строчные буквы

Пример: `main-header`, `about-us.html`

### camelCase

Каждое новое слово начинается с заглавной буквы (кроме первого)

Пример: `userProfile`, `getUserData()`

### PascalCase

Каждое слово начинается с заглавной буквы

Пример: `UserProfile`, `DataManager`

## Файлы и папки

- Формат: kebab-case
- Файлы: `index.html`, `styles.css`, `create-user.js`
- Папки: `courses`, `lesson-1`

## HTML

- **Файлы, классы и ID**: 
  - Формат: kebab-case
  - Файлы: `index.html`, `about-us.html`
  - Классы и ID: `main-header`, `button-primary`, `#app`

## CSS

- **Файлы, классы и ID, переменные**:
  - Формат: kebab-case
  - Файлы: `styles.css`, `layout-grid.css`
  - Классы и ID: `main-header`, `button-primary`, `#app`
  - Переменные: `--primary-color`, `--font-size`

## JavaScript

- **Файлы**:
  - Формат: kebab-case
  - Пример: `app.js`, `user-profile.js`

- **Переменные**:
  - Формат: camelCase
  - Пример: `userAge`, `isLoggedIn`

- **Функции**:
  - Формат: camelCase, начинать с глагола
  - Пример: `getUserData()`, `handleSubmit()`

- **Классы**:
  - Формат: PascalCase
  - Пример: `UserProfile`, `DataManager`

## Git

- **Ветки**:
  - Формат: kebab-case
  - Пример: `master`, `lesson-1`, `feature/add-user-profile-page`

- **Коммиты**:
  - Формат: Императивное наклонение для заголовка, как будто даёте команду (Add, Update, Fix, Remove)
  - Пример: `Add user profile page`, `Update styles for main header`

## Общие рекомендации

- **Единый стиль**: Соблюдать единый стиль именования во всем проекте
- **Понятные имена**: Использовать осмысленные и читаемые имена для всех файлов, переменных и классов
- **Минимум сокращений**: Избегать сокращений и использовать полные слова для именования
- **Использовать английский**: Использовать английский язык для именования в HTML, CSS и JavaScript