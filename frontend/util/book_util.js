export const fetchAllBooks = () => {
  return $.ajax ({
    method: 'GET',
    url: '/api/books',
  });
};

export const fetchSingleBook = (book) => {
  return $.ajax ({
    method: 'GET',
    url: `/api/books/${book.id}`,
  });
};

export const editBook = (book) => {
  return $.ajax ({
    method: 'PATCH',
    url: `/api/books/${book.id}`,
    data: { book }
  });
}
