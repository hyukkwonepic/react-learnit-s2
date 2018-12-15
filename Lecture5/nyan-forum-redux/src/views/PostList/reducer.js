import {
  FETCH_POST_LIST_REQUEST,
  FETCH_POST_LIST_SUCCESS,
  FETCH_POST_LIST_FAILURE
} from './actionTypes';

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_LIST_REQUEST: {
      return {
        ...initialState,
        isLoading: true,
      }
    }
    case FETCH_POST_LIST_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        isLoading: false,
        posts: payload,
      }
    }
    case FETCH_POST_LIST_FAILURE: {
      const { error } = action;
      return {
        ...state,
        isLoading: false,
        error,
      }
    }
    default: return state;
  }
}