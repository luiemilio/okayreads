import * as APIUtil from '../util/bookshelf_util';

export const RECEIVE_SINGLE_BOOKSHELFBOOK = 'RECEIVE_SINGLE_BOOKSHELFBOOK';
export const REMOVE_BOOKSHELFBOOK  ='REMOVE_BOOKSHELFBOOK';

export const receiveSingleBookshelfbook = bookshelfbook => ({
  type: RECEIVE_SINGLE_BOOKSHELFBOOK,
  bookshelfbook
});

export const removeBookshelfbook = bookshelfbook => ({
  type: REMOVE_BOOKSHELF,
  bookshelfbook
});


export const createBookshelfbook = (bookshelfbook) => (dispatch) => (
  APIUtil.createBookshelfbook(bookshelfbook).then(bookshelfbook => (
    dispatch(receiveSingleBookshelfbook(bookshelfbook))
  ))
);

export const deleteBookshelfbook = (bookshelfbook) => (dispatch) => (
  APIUtil.deleteBookshelfbook(bookshelfbook).then(bookshelfbook => (
    dispatch(removeBookshelfbook(bookshelfbook))
  ))
);
