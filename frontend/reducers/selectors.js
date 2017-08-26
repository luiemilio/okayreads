import values from 'lodash/values';

export const selectAllBooks = (state) => {
  return values(state.books);
};

export const selectBookshelves= (state) => {
  return values(state.session.currentUser.bookshelves);
};
