import * as APIUtil from '../util/search_util';

export const RECEIVE_BOOKS_FROM_SEARCH = 'RECEIVE_BOOKS_FROM_SEARCH';

export const receiveBooksFromSearch = books => ({
  type: RECEIVE_BOOKS_FROM_SEARCH,
  books,
});

export const requestBooksFromSearch = (searchTerm) => (dispatch) => (
  APIUtil.fetchBooks(searchTerm).then(books => (
    dispatch(receiveBooksFromSearch(books))
  ))
);
