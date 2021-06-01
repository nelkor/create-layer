# Слой backend

Родительским слоем является
[code](https://github.com/Nelkor/create-layer/blob/main/src/layers/code/readme/ru.md).

## Функциональность

### Webpack

Мы можем собрать проект для его локального запуска или для доставки
на сервер. В финальную сборку входят два файла: `index.js` и `package.json`
(в папке `dist`). Если проект использует `dependencies`, для его запуска
на сервере будет необходимо перенести `package.json` и выполнить `npm i`.

## Команды

* `npm run build` — соберёт проект.
* `npm start` — запустит собранный проект.
