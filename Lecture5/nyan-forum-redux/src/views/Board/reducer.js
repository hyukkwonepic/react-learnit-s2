import {
  FETCH_BOARDS_REQUEST,
  FETCH_BOARDS_SUCCESS,
  FETCH_BOARDS_FAILURE,
} from './actionTypes';

const initialState = {
  boards: [],
  isLoading: false,
  error: null,
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BOARDS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    }
    case FETCH_BOARDS_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        isLoading: false,
        boards: payload,
      }
    }
    case FETCH_BOARDS_FAILURE: {
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