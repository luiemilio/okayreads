export const fetchAllBookshelves = (user) => {
  return $.ajax ({
    method: 'GET',
    url: '/api/bookshelves',
    data: user
  });
};

export const fetchSingleBookshelf = (bookshelf) => {
  return $.ajax ({
    method: 'GET',
    url: `/api/bookshelves/${bookshelf.id}`,
  });
};

export const createBookshelf = (bookshelf) => {
  return $.ajax ({
    method: 'POST',
    url: '/api/bookshelves/',
    data: { bookshelf },
  });
};

export const deleteBookshelf = (bookshelf) => {
  return $.ajax ({
    method: 'DELETE',
    url: `api/bookshelves/${bookshelf.id}`,
  });
};
