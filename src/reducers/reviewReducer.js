import ActionTypes from '../actionTypes';
import {getReviews, setReview} from "../utils/storage";

const chatReducerInitializeState = {
  reviews: getReviews() || []
};

/*
review :

rId = [number],
uId = [number],
uName = [string],
uGender = [male/female],
rText = [string]
 */


const chatReducer = (state = chatReducerInitializeState, action) => {
  let nextState = state;

  switch (action.type) {
    case ActionTypes.ADD_REVIEW:
      nextState = {
        ...state,
        reviews: [...state.reviews, action.payload]
      };
      break;

    case ActionTypes.REMOVE_REVIEW:
      nextState = {
        ...state,
        reviews: state.reviews.filter(review => review.rId !== action.payload.rId)
      };
      break;

    case ActionTypes.EDIT_REVIEW:
      const immutReviews = [...state.reviews];
      const rIndex = state.reviews.findIndex(review => review.rId === action.payload.rId);
      immutReviews[rIndex].rText = action.payload.rText;

      nextState = {
        ...state,
        reviews: immutReviews
      };
      break;
  }

  setReview(nextState.reviews);

  return nextState;
};

export default chatReducer;