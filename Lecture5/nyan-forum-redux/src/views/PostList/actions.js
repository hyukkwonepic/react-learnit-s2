import { db } from '../../firebase';
import {
  FETCH_POST_LIST_REQUEST,
  FETCH_POST_LIST_SUCCESS,
  FETCH_POST_LIST_FAILURE
} from './actionTypes';

const fetchPostListRequest = () => {
  return {
    type: FETCH_POST_LIST_REQUEST,
  }
}

const fetchPostListSuccess = (payload) => {
  return {
    type: FETCH_POST_LIST_SUCCESS,
    payload,
  }
}

const fetchPostListFailure = (error) => {
  return {
    type: FETCH_POST_LIST_FAILURE,
    error
  }
}

export const fetchPostList = (boardId) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPostListRequest());
      const boardSnapshot = await db.collection('boards').doc(boardId).get();
      const board = boardSnapshot.data();

      const postPromises = board.posts.map(async (postId) => {
        const postSnapshot = await db.collection('posts').doc(postId).get();
        return postSnapshot.data();
      });

      const posts = await Promise.all(postPromises); 

      dispatch(fetchPostListSuccess(posts));
    } catch (error) {
      dispatch(fetchPostListFailure(error));
    }
  }
}