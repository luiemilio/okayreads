export const RECEIVE_ACTION_ERRORS = 'RECEIVE_ACTION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const clearErrors = (errors) => ({
  type: CLEAR_ERRORS,
  errors
});

export const receiveActionErrors = (errors, location) => ({
  type: RECEIVE_ACTION_ERRORS,
  errors: {[location]: errors}
});


export const removeErrors = () => (dispatch) => {
  return dispatch(clearErrors());
};
