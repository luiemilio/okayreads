# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Books

- `GET /api/books`
  - gets all books
- `GET /api/books/:book_id`
  - gets a single book

### Reviews
- `GET /api/reviews/`
  - gets reviews for a book
- `POST /api/reviews/`
  -creates a review

### Bookshelves
- `GET /api/bookshelves`
  - gets all shelves for the current user
- `POST /api/bookshelves`
  - creates shelf
- `DELETE /api/bookshelves/:id`
  - deletes helf
