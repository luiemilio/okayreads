import * as APIUtil from '../util/book_read_status_util';

export const RECEIVE_ALL_BOOK_STATUSES = 'RECEIVE_ALL_BOOK_STATUSES';
export const RECEIVE_SINGLE_BOOK_STATUS = 'RECEIVE_SINGLE_BOOK_STATUS';

export const receiveAllBookStatuses = (bookStatuses) => ({
  type: RECEIVE_ALL_BOOK_STATUSES,
  bookStatuses,
});

export const receiveSingleBookStatus = (bookStatus) => ({
  type: RECEIVE_SINGLE_BOOK_STATUS,
  bookStatus,
});

export const requestAllBookStatuses = (user) => (dispatch) => (
  APIUtil.fetchAllStatuses(user).then(bookStatuses => (
    dispatch(receiveAllBookStatuses(bookStatuses))
  ))
);

export const requestSingleBookStatus = (bookStatus) => (dispatch) => (
  APIUtil.fetchSingleStatus(bookStatus).then(bookStatus => (
    dispatch(receiveSingleBookStatus(bookStatus))
  ))
);

export const createBookStatus = (bookStatus) => (dispatch) => (
  APIUtil.createStatus(bookStatus).then(bookStatus => (
    dispatch(receiveSingleBookStatus(bookStatus))
  ))
);

export const updateBookStatus = (bookStatus) => (dispatch) => (
  APIUtil.updateStatus(bookStatus).then(bookStatus => (
    dispatch(receiveSingleBookStatus(bookStatus))
  ))
);
