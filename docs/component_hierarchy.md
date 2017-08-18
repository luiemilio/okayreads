## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**MyBooksContainer**
- Header
- Shelves sidebar
- Book list

**BookContainer**
- Header
- Book
  * Image and description
- Reviews

**BookshelfContainer**
- Header
- Shelf's book list


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "MyBooksContainer" |
| "/books/:bookId" | "BookContainer" |
| "/home/shelf/:shelfId/" | "ShelfContainer" |
