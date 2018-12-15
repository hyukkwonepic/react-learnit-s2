import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import {
  reducer as boardReducer,
} from './views/Board/reducer';

import { 
  reducer as postListReducer,
} from './views/PostList/reducer';

import {
  reducer as postDetailReducer,
} from './views/PostDetail/reducer';

const middlewares = [
  thunk,
];

const reducer = combineReducers({
  board: boardReducer,
  postList: postListReducer,
  postDetail: postDetailReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middlewares)
  ),
);

export default store;