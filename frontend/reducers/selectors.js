import values from 'lodash/values';

export const selectAllBooks = (state) => {
  return values(state.books);
};
