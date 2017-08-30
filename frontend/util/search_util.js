export const fetchBooks = (searchTerm) => {
  return $.ajax ({
    method: 'GET',
    url: `api/books/search/${searchTerm}`,
  });
};
