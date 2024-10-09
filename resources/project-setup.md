# Инициализация нового проекта

Шаги по инициализации нового проекта:

1. Создать новую папку для проекта `<path>`

2. Открыть терминал и перейти в папку проекта

```bash
cd <path>
```

3. Инициализировать Git-репозиторий

```bash
git init
```

4. Инициализировать проект

```bash
pnpm init
```

## 5. Stylelint

Рекомендуется использовать `stylelint` для проверки стилей в проекте

1. Установить `stylelint` и конфигурацию `@shcherbin/stylelint-config`

```bash
pnpm add stylelint @shcherbin/stylelint-config -D
```

2. Создать файл `stylelint.config.mjs` в корне проекта и добавить в него следующий код:

```js
export default {
  extends: [
    '@shcherbin/stylelint-config'
  ]
}
```

## 6. ESLint

Рекомендуется использовать `ESLint` для проверки JavaScript-кода в проекте

1. Установить `ESLint` и конфигурацию `@shcherbin/eslint-config-node`

```bash
pnpm add eslint@^8 @shcherbin/eslint-config-node -D
```

2. Создать файл `.eslintrc.cjs` в корне проекта и добавить в него следующий код:

```js
module.exports = {
  extends: '@shcherbin/eslint-config-node'
}
```

Для отключения правил, которые не используются в проекте, можно добавить свойство `rules`. Например, для отключения правила `no-console`:

```js
module.exports = {
  extends: '@shcherbin/eslint-config-node',
  rules: {
    'no-console': 'off'
  }
}
```

7. Создать папку `src` в корне проекта

Папка `src` (сокращение от `source`) используется в проектах для хранения исходного кода приложения. Это удобная практика, которая помогает структурировать проект, отделяя основной код приложения от других файлов, таких как конфигурации, тесты и другие.