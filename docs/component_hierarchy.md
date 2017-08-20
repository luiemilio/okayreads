## Component Hierarchy

**HomePageContainer**
- Header
  * LoginForm
- SignupForm

**AllBooksContainer**
- Header
  * All books link
  * Logout button
- Shelves

**ShelfContainer**
- Header
- Book list

**BookContainer**
- Header
- Book
  * Image
  * Description
  * Status
  * Bookshelf
- Add Review Modal
- Reviews

**ReviewContainer**
- Author
- Review

## Routes

|Path                         |Component            |
|-----------------------------|---------------------|
| "/"                         | "HomePageContainer" |
| "/books"                    | "AllBooksContainer" |
| "/books/bookshelf/:shelfId" | "ShelfContainer"    |
| "books/:bookId"             | "BookContainer"     |
