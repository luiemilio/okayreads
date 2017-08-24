export const createBookshelfbook = (bookshelfbook) => {
  return $.ajax ({
    method: 'POST',
    url: '/api/bookshelfbooks/',
    data: { bookshelfbook },
  });
};

export const deleteBookshelfbook = (bookshelfbook) => {
  return $.ajax ({
    method: 'DELETE',
    url: `api/bookshelfbooks/${bookshelfbook.id}`,
  });
};
