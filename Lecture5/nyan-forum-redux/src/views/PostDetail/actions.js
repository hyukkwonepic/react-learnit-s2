import { db } from '../../firebase';
import {
  FETCH_POST_DETAIL_REQUEST,
  FETCH_POST_DETAIL_SUCCESS,
  FETCH_POST_DETAIL_FAILURE,
} from './actionTypes';

const fetchPostDetailRequest = () => {
  return {
    type: FETCH_POST_DETAIL_REQUEST,
  }
}

const fetchPostDetailSuccess = (payload) => {
  return {
    type: FETCH_POST_DETAIL_SUCCESS,
    payload
  }
}

const fetchPostDetailFailure = (error) => {
  return {
    type: FETCH_POST_DETAIL_FAILURE,
    error
  }
}

export const fetchPostDetail = (postId) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPostDetailRequest());
      const postSnapshot = await db.collection('posts').doc(postId).get();
      const post = postSnapshot.data();
  
      const commentsPromises = post.comments.map(async (commentId) => {
        const commentSnapshot = await db.collection('comments').doc(commentId).get();
        return commentSnapshot.data();
      });
  
      const comments = await Promise.all(commentsPromises);

      dispatch(fetchPostDetailSuccess({
        post,
        comments,
      }));
    } catch (error) {
      console.error(error);
      dispatch(fetchPostDetailFailure(error));
    }
  }
}