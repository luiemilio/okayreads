export const fetchAllStatuses = (user) => {
  return $.ajax ({
    method: 'GET',
    url: '/api/book_read_statuses',
    data: user
  });
};

export const fetchSingleStatus = (book_read_status) => {
  return $.ajax ({
    method: 'GET',
    url: `/api/book_read_statuses/${book_read_status.id}`,
  });
};

export const createStatus = (book_read_status) => {
  return $.ajax ({
    method: 'POST',
    url: '/api/book_read_statuses/',
    data: { book_read_status },
  });
};

export const updateStatus = (book_read_status) => {
  debugger
  return $.ajax ({
    method: 'PATCH',
    url: `/api/book_read_statuses/${book_read_status.id}`,
    data: { book_read_status },
  });
};
