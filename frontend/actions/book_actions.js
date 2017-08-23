import * as APIUtil from '../util/book_util';

export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';
export const RECEIVE_SINGLE_BOOK = 'RECEIVE_SINGLE_BOOK';

export const receiveAllBooks = books => ({
  type: RECEIVE_ALL_BOOKS,
  books
});

export const receiveSingleBook = book => ({
  type: RECEIVE_SINGLE_BOOK,
  book
});


export const requestAllBooks = () => dispatch => (
  APIUtil.fetchAllBooks().then(books => (
    dispatch(receiveAllBooks(books))
  ))
);

export const requestSingleBook = (book) => dispatch => (
  APIUtil.fetchSingleBook(book).then(book => (
    dispatch(receiveSingleBook(book))
  ))
);
