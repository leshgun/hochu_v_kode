## Второе задание

Требовалось реализовать приложение для просмотра распределенных по категориям карточек с Покемонами.

### Функциональность

Приложение содержит 4 экрана: 

#### 1. Экран авторизации

Страница представляет собой форму авторизации с валидацией соответствующих полей (логина и пароля).
   
Авторизация — НЕ серверная, введённые данные достаточно проверить на клиенте.

~~Можно глянуть в исходник~~

#### 2. Экран подтверждения одноразового пароля

Подтверждение логина реализованное с помощью One Time Password (OTP).
   
Достаточно проверки на клиенте как и для первого экрана.
Генерация OTP - простая заглушка.

~~Имитация входящего сообщения. Если не запомнили - консоль в помощь.~~

#### 3. Экран категорий и просмотра карточек

Выбор категорий и просмотр соответствующего им списка карточек Покемонов.

Изменяя категории в селектах вы получаете данные с сервера.
   
**Используется публичное API** – https://pokemontcg.io/.
   
#### 4. Просмотр карточки Покемона

Страница представляет собой отдельный экран с детальной информацией по Покемону.

К сожалению во время развёртывания на GitPages оказалось, что те переходы на подробную информацию о покемоне,
что я использовал с самого начала, - не годятся. Поэтому эта функция будет работать только на локальном сервере,
запущеного так:

```npm start```

Прошу прощения за такую оплошность, не смог полностью справиться за неделю (тестовое задание получил 21 числа)

### Прототипы экранов (Wireframes)

Дизайн интерфейса остался на моё усмотрение, но я всё равно пытался максимально подвести к ТЗ.

- [Макет в Figma](https://www.figma.com/file/dkQb8Bl61Mm91eBCLdd2nW/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-Pokemons-v2?node-id=0%3A1)

### Задания со звёзочкой

- [+/-] Компонент «Селект категорий» написан самостоятельно. [Макет прототипа](https://www.figma.com/file/dkQb8Bl61Mm91eBCLdd2nW/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-Pokemons-v2?node-id=6%3A5)
- [+/-] Пагинация карточек. [Макет прототипа](https://www.figma.com/file/dkQb8Bl61Mm91eBCLdd2nW/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-Pokemons-v2?node-id=1%3A103)
- [-] Любые анимации интерфейса
- [-] Быстрый просмотр покемона в модальном окне по клику на карточку
- [+] Сохранение сессии авторизованного пользователя после закрытия вкладки браузера. Например, через local storage браузера
- [+] Адаптивный дизайн

### Стэк

- [Create React App](https://create-react-app.dev/)
- [Function components + React Hooks](https://reactjs.org/docs/hooks-state.html#hooks-and-function-components)
- [React-router](https://reactrouter.com/web/api/Route/render-func)

## Вопросы

[Github Issue к этому репозиторию](https://github.com/martyns0n/kode-internship-test-task/issues)