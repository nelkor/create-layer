# Backend layer

The parent layer is
[code](https://github.com/Nelkor/create-layer/blob/main/src/layers/code/readme/ru.md).

## Functionality

### Webpack

We can build a project for its local launch or for delivery to
the server. The final build includes two files: `index.js` and `package.json`
(in folder `dist`). If the project uses `dependencies`, to launch it
on the server, you will need to transfer `package.json` and execute `npm i`.

## Teams

* `npm run build` — will assemble the project.
* `npm start` — launch the assembled project.
