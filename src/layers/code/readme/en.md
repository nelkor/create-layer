
This layer is the base layer. The other layers are its heirs
and have the functionality that it provides `code`.

## Functionality

### TypeScript

We can create `.ts` files in the `src`  directory and write code in the language
TypeScript.

This is not how we write imports:
```typescript
import * as express from 'express' // Неправильно
```

And here it is:
```typescript
import express from 'express' // Правильно
```

JSON import and strict mode are enabled by default.
The declaration file is also connected `index.d.ts` at the root of the project.
If you need to add aliases to the project, edit `paths`
in `tsconfig.json` at the root of the project. For example:
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

We can create files `.spec.ts`/`.spec.js` in the directory `src`, write tests on
the framework `Jest` and run the command `npm t`.

**ATTENTION!** In the test files, you can use aliases added to
`tsconfig.json`. You don't need to add them anywhere else.

### ESLint

Configured and working. Together with plugins for`TypeScript`and imports.
Configuration file — `.eslintrc` at the root of the project.

### Prettier

Configured and working. Configuration file — `.prettierrc` at the root of the project.
By default, the semicolon is disabled.

## Команды

* `npm run lint` — check everything `.ts`-files for compliance with the linter rules
and lapping. If possible, correct the errors.
* `npm run format-json` — fix formatting errors in `.json`/`.*rc`-folders.
* `npm run ts` — check the correctness of the use of types in the code.
* `npm t` — run tests.
