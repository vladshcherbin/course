# CLI команды

## Системные команды

```bash
cd <path>

# изменение текущей директории на /path/to/directory
cd /path/to/directory
```

Команда cd (сокращение от `change directory`) используется для изменения текущей рабочей директории. Это позволяет перемещаться по файловой системе.

Можно перетащить папку в терминал, чтобы получить её путь.

## npm команды

[npm](https://www.npmjs.com) - это менеджер пакетов для JavaScript. Он позволяет управлять зависимостями в проекте.

```bash
npm init
```

Используется для инициализации нового проекта. После выполнения команды, `npm` задаст несколько вопросов о проекте и создаст файл `package.json`, в котором хранится информация о проекте и его зависимостях.

```bash
npm install <package-name> -D

# установка одного пакета
npm install stylelint -D

# установка нескольких пакетов одновременно
npm install stylelint stylelint-config-standard -D
```

Устанавливает указанный пакет в проект как `dev` зависимость. Это значит, что пакет будет добавлен в раздел `devDependencies` в файле `package.json` и будет использоваться только во время разработки.

## pnpm команды

[pnpm](https://pnpm.io) — это менеджер пакетов для JavaScript, похожий на `npm` или `yarn`, но более эффективный. Он сохраняет общие зависимости в одном месте и использует ссылки, что экономит дисковое пространство и ускоряет установку пакетов.

```bash
pnpm init
```

Используется для инициализации нового проекта. После выполнения команды, `pnpm` создаст файл `package.json`, в котором хранится информация о проекте и его зависимостях.

```bash
pnpm add <package-name>

# установка одного пакета как dev зависимость
pnpm add stylelint -D

# установка нескольких пакетов одновременно как dev зависимости
pnpm add stylelint stylelint-config-standard -D
```

Устанавливает указанный пакет в проект как `dev` зависимость. Это значит, что пакет будет добавлен в раздел `devDependencies` в файле `package.json` и будет использоваться только во время разработки.

### Проверка eslint

```bash
# запуск eslint в текущей директории (.)
pnpm eslint .

# запуск eslint для проверки файла src/index.js
pnpm eslint src/index.js

# запуск eslint для проверки файла src/index.js и исправление найденных ошибок
pnpm eslint src/index.js --fix
```

Запускает проверку кода с помощью `eslint`. Правила проверки кода описаны в файле `.eslintrc.js`.