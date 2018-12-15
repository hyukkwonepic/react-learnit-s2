import { db } from '../../firebase';
import {
  FETCH_BOARDS_REQUEST,
  FETCH_BOARDS_SUCCESS,
  FETCH_BOARDS_FAILURE,
} from './actionTypes';

const fetchBoardsRequest = () => {
  return {
    type: FETCH_BOARDS_REQUEST
  }
}

const fetchBoardsSuccess = (payload) => {
  return {
    type: FETCH_BOARDS_SUCCESS,
    payload
  }
}

const fetchBoardsFailure = (error) => {
  return {
    type: FETCH_BOARDS_FAILURE,
    error,
  }
}

export const fetchBoards = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchBoardsRequest());
      const boardsSnapshot = await db.collection('boards').get();
      const boards = boardsSnapshot.docs.map((snapshot) => {
        return snapshot.data();
      });
      dispatch(fetchBoardsSuccess(boards));
    } catch (error) {
      console.error(error);
      dispatch(fetchBoardsFailure(error));
    }
  }
}