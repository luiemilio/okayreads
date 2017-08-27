import values from 'lodash/values';

export const selectAllBooks = (state) => {
  return values(state.books);
};

export const selectBookshelves= (state) => {
  return values(state.bookshelves);
};

export const selectCurrentUserReviewIds = (state) => {
  const reviewIds = state.session.currentUser.reviews.map((review) => {
    return review.id;
  });
  return reviewIds;
};

export const selectCurrentBookReviewIds = (state, bookId) => {
  const reviewIds = state.books[bookId].reviews.map((review) => {
    return review.id;
  });
  return reviewIds;
};
