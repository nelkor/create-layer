# Слой code

Этот слой является базовым. Остальные слои являются его наследниками
и обладают той функциональностью, которую предоставляет `code`.

## Функциональность

### TypeScript

Мы можем создавать файлы `.ts` в директории `src` и писать код на языке
TypeScript.

Импорты пишем не так:
```typescript
import * as express from 'express' // Неправильно
```

А вот так:
```typescript
import express from 'express' // Правильно
```

Импорт JSON и строгий режим включены по умолчанию.
Также подключен файл деклараций `index.d.ts` в корне проекта.
Если необходимо добавить алиасы в проект, редактируем `paths`
в `tsconfig.json` в корне проекта. Например:
```json
{
  "compilerOptions": {
    "strict": true,
    "target": "esnext",
    "lib": ["esnext", "dom"],
    "moduleResolution": "node",
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "typeRoots": ["node_modules/@types", "index.d.ts"],
    "baseUrl": "src",
    "paths": {
      "@/*": ["./*"],
      "@ui/*": ["./modules/ui/*"],
      "@table/*": ["./modules/table/*"],
      "@layout/*": ["./modules/layout/*"],
      "@operations/*": ["./modules/operations/*"],
      "@theme/*": ["./modules/theme/*"]
    }
  }
}
```

### Jest

Мы можем создавать файлы `.spec.ts`/`.spec.js` в директории `src`, писать тесты
на фреймворке `Jest` и запускать команду `npm t`.

**ВНИМАНИЕ!** В файлах тестов можно использовать алиасы, добавленные в
`tsconfig.json`. Больше никуда их добавлять не нужно.

### ESLint

Настроен и работает. Вместе с плагинами для `TypeScript` и импортов.
Файл конфигурации — `.eslintrc` в корне проекта.

### Prettier

Настроен и работает. Файл конфигурации — `.prettierrc` в корне проекта.
По умолчанию точка с запятой выключена.
