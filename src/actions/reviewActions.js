import ActionTypes from '../actionTypes';

export const addReview = (data) => {
  return {
    type: ActionTypes.ADD_REVIEW,
    payload: {
      data
    }
  };
};

export const removeReview = (data) => {
  return {
    type: ActionTypes.REMOVE_REVIEW,
    payload: {
      data
    }
  };
};

export const editReview = (data) => {
  return {
    type: ActionTypes.EDIT_REVIEW,
    payload: {
      data
    }
  };
};

