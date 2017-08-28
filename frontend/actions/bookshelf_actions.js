import * as APIUtil from '../util/bookshelf_util';
import { receiveActionErrors } from './error_actions';

export const RECEIVE_ALL_BOOKSHELVES = 'RECEIVE_ALL_BOOKSHELVES';
export const RECEIVE_SINGLE_BOOKSHELF = 'RECEIVE_SINGLE_BOOKSHELF';
export const REMOVE_BOOKSHELF  ='REMOVE_BOOKSHELF';

export const receiveAllBookshelves = bookshelves => ({
  type: RECEIVE_ALL_BOOKSHELVES,
  bookshelves
});

export const receiveSingleBookshelf = bookshelf => ({
  type: RECEIVE_SINGLE_BOOKSHELF,
  bookshelf
});

export const removeBookshelf = bookshelf => ({
  type: REMOVE_BOOKSHELF,
  bookshelf
});


export const requestAllBookshelves = (user) => (dispatch) => (
  APIUtil.fetchAllBookshelves(user).then(bookshelves => (
    dispatch(receiveAllBookshelves(bookshelves))
  ))
);

export const requestSingleBookshelf = (bookshelf) => (dispatch) => (
  APIUtil.fetchSingleBookshelf(bookshelf).then(bookshelf => (
    dispatch(receiveSingleBookshelf(bookshelf))
  ))
);

export const createBookshelf = (bookshelf) => (dispatch) => (
  APIUtil.createBookshelf(bookshelf).then(bookshelf => (
    dispatch(receiveSingleBookshelf(bookshelf))
  ), err => (
    dispatch(receiveActionErrors(err.responseJSON, "createBookshelf"))
  ))
);

export const deleteBookshelf = (bookshelf) => (dispatch) => (
  APIUtil.deleteBookshelf(bookshelf).then(bookshelf => (
    dispatch(removeBookshelf(bookshelf))
  ))
);
