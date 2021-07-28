# Frontend layer

The parent layer is
[code](https://github.com/Nelkor/create-layer/blob/main/src/layers/code/readme/ru.md).

## Functionality

### Sass (SCSS)

We can create files `.sass`/`.scss` in the `src` directory and write styles
in Sass/SCSS languages.

Imports of aliases added to `tsconfig.json` work according to the Sass rules-
through the `~` character. For example:

```scss
@import '~@/style/ui';
```

### Webpack

We can build a project to deliver it to the server, and also run a local development
server that picks up changes in the project on the fly.

By default, we can use images in the following formats in our files with code and styles
:
* jpg
* png
* webp
* svg

As well as fonts in the format `woff2`.

### Declarations

The above image formats are added to the `index.d.ts` file in
the project root. This means that the TypeScript analyzer will not mind that we
import files with such extensions into our code.

## Teams

* `npm run build` — will assemble the project.
* `npm run serve` — start the dev-server (port 5445).
* `npm run format-scss` — fix errors formatting in `.css` files.

