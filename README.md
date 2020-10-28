## Первое задание

Простая функция `getObjectProperty`.

Она получает три аргумента:
  - первым — объект
  - вторым — путь к вложенному свойству объекта
  - третьим (опциональный аргумент функции) — значение по умолчанию, которое возвращается, если значения по указанному пути не существует

Функция возвращает значение указанного свойства, либо `undefined`, если свойства не существует.

### Примеры использования

```js
const getObjectProperty = (obj, path, defaultValue) => {
  // TODO: your code here
}

const obj = {
  'pupa': {
    'lupa': {
      'beep': 'boop',
    },
    'foo': 'bar',
  },
};

getObjectProperty(obj, "pupa.lupa"); // > { beep : 'boop' }
getObjectProperty(obj, "pupa.lupa.beep"); // > 'boop'
getObjectProperty(obj, "pupa.foo"); // > 'bar'
getObjectProperty(obj, "pupa.ne.tuda"); // > undefined
getObjectProperty(obj, "pupa.ne.tuda", true); // > true
getObjectProperty(obj, "pupa.ne.tuda", "Default value"); // > 'Default value'
```

---

