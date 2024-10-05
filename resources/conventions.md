# Соглашения по именованию в HTML, CSS и JavaScript

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

## Общие рекомендации

- **Единый стиль**: Соблюдать единый стиль именования во всем проекте
- **Понятные имена**: Использовать осмысленные и читаемые имена для всех файлов, переменных и классов
- **Минимум сокращений**: Избегать сокращений и использовать полные слова для именования
- **Использовать английский**: Использовать английский язык для именования в HTML, CSS и JavaScript