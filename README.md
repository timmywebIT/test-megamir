# 📚 Book Collection App

Минимальный проект на Laravel + React для управления книгами и отзывами.

## Настройка проекта

```env
DB_CONNECTION=mysql
 DB_HOST=127.0.0.1
 DB_PORT=8889
 DB_DATABASE=megamir
 DB_USERNAME=root
 DB_PASSWORD=root
```

## 📁 Структура Backend 

- **app/http/controllers/main/api**
  - `Book` — контроллеры для работы с книгами
  - `Review` — контроллер для работы с отзывами

- **Models/**
  - `Book.php` — модель книги
  - `Review.php` — модель отзыва

- **Requests/**
  - `StoreRequest.php` — валидация данных отзыва

- **Resource/**
  - `BookResource.php` — форматирование данных книги для API
  - `ReviewResource.php` — форматирование данных отзыва для API

## 📁 Структура фронтенда (resources/js)

- **components/**
  - `BookList.jsx` — список книг
  - `BookDetails.jsx` — карточка книги с отзывами
  - `Reviews/ReviewForm.jsx` — форма добавления отзыва

- **hooks/**
  - `Books/useBooks.js` — загрузка всех книг
  - `Books/useBook.js` — загрузка одной книги
  - `Reviews/useCreateReview.js` — отправка отзыва

- **styles/**
  - `BookList.module.css` — стили для списка книг
  - `BookDetails.module.css` — стили для карточки книги


## 🔗 API-маршруты

| Метод | URI                             | Контроллер         | Описание                             |
|-------|----------------------------------|--------------------|--------------------------------------|
| GET   | `/api/books`                    | `IndexController`  | Получить список всех книг            |
| GET   | `/api/books/{book}`             | `ShowController`   | Получить книгу с отзывами            |
| POST  | `/api/books/{book}/reviews`     | `StoreController`  | Добавить отзыв к книге               |
