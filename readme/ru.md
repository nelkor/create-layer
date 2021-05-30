# create-layer

## Доступно на разных языках

* [English](https://github.com/Nelkor/create-layer/blob/main/README.md)

## Общие сведения

Используя `create-layer`, мы создаём основу для нового проекта. Пример:
```bash
npx create-layer frontend my-awesome-project
```

В данном случае слово `frontend` является именем слоя, а слово
`my-awesome-project` — именем проекта.

**ВНИМАНИЕ!** На компьютере должны быть установлены программы `node` и `npm`.
Генерация слоя (создание основы нового проекта) занимает много времени за счёт
установки `node_modules`. Необходимо дождаться окончания этого процесса.

Мы также можем установить `create-layer` глобально и не использовать `npx`:
```bash
npm i -g create-layer

create-layer frontend my-awesome-project
```

Наполнение нового проекта зависит от выбранного слоя. Кроме базового `code`
каждый слой является наследником другого. Чтобы составить полную картину
функциональности, которую предоставляет слой, необходимо ознакомиться с его
описанием, а также с описанием всех его родителей вплоть до слоя `code`.

**ВНИМАНИЕ!** Вся конфигурация является открытой. Нет никаких обёрток типа
`react-scripts`. Это значит, что новый проект, созданный при помощи любого слоя,
при необходимости, можно переконфигурировать под свои нужды.

## Слои

* [code](https://github.com/Nelkor/create-layer/blob/main/src/layers/code/readme/ru.md)
* [backend](https://github.com/Nelkor/create-layer/blob/main/src/layers/backend/readme/ru.md)
* [frontend](https://github.com/Nelkor/create-layer/blob/main/src/layers/frontend/readme/ru.md)
* [react](https://github.com/Nelkor/create-layer/blob/main/src/layers/react/readme/ru.md)
