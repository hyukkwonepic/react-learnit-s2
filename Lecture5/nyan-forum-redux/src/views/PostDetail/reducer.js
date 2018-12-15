import {
  FETCH_POST_DETAIL_REQUEST,
  FETCH_POST_DETAIL_SUCCESS,
  FETCH_POST_DETAIL_FAILURE,
} from './actionTypes';

const initialState = {
  post: null,
  comments: [],
  isLoading: false,
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POST_DETAIL_REQUEST: {
      return {
        ...initialState,
        isLoading: true
      }
    }
    case FETCH_POST_DETAIL_SUCCESS: {
      const { post, comments } = action.payload;
      return {
        ...state,
        isLoading: false,
        post,
        comments,
      }
    }
    case FETCH_POST_DETAIL_FAILURE: {
      const { error } = action;
      return {
        isLoading: false,
        error,
      }
    }
    default: return state;
  }
}