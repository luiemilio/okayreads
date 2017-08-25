export const fetchAllReviews = () => {
  return $.ajax ({
    method: 'GET',
    url: 'api/reviews',
  });
};

export const fetchSingleReview = (review) => {
  return $.ajax ({
    method: 'GET',
    url: `api/review/${review.id}`,
  });
};

export const createReview = (review) => {
  return $.ajax ({
    method: 'PUT',
    url: 'api/reviews/',
    data: { review },
  });
};

export const updateReview = (review) => {
  return $.ajax ({
    method: 'PATCH',
    url: `api/reviews/${review.id}`,
    data: { review },
  });
};

export const deleteReview = (review) => {
  return $.ajax ({
    method: 'DELETE',
    url: `api/reviews/${review.id}`
  });
};
