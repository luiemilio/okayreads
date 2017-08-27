import values from 'lodash/values';

export const selectAllBooks = (state) => {
  return values(state.books);
};

export const selectBookshelves= (state) => {
  return values(state.bookshelves);
};

export const selectAllReviews = (state) => {
  return values(state.reviews);
};

export const selectCurrentUserReviewIds = (state) => {
  const reviewArr = values(state.reviews);
  const currentUserReviewIds = [];
  reviewArr.forEach((review) => {
    if (review.user_id === state.session.currentUser.id) {
      currentUserReviewIds.push(review.user_id);
    }
  });
  return currentUserReviewIds;
};

export const selectCurrentBookReviewIds = (state, bookId) => {
  const reviewIds = state.books[bookId].reviews.map((review) => {
    return review.id;
  });
  return reviewIds;
};
