import values from 'lodash/value';

export const selectAllBooks = (state) => {
  return values(state.books);
};
