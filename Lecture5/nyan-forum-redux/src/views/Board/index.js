import React from 'react';
import styled from 'styled-components';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import PostList from '../PostList';
import PostCreate from '../PostCreate';
import PostDetail from '../PostDetail';
import CommentCreate from '../CommentCreate';

import { fetchBoards } from './actions';

class Board extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchBoards());
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.boards !== prevProps.boards) {
      if (this.props.boards[0]) {
        this.props.history.push(`/board/${this.props.boards[0].id}`);
      }
    }
  }

  render() {
    const {
      match,
      boards,
      isLoading,
    } = this.props;

    if (isLoading) {
      return <h1>Loading...</h1>
    }

    return (
      <div>
        <Header />
        <Contents>
          <Navbar boards={boards} />
          <Switch>
            <Route path={`${match.url}/:boardId`} exact component={PostList} />
            <Route path={`${match.url}/:boardId/create`} exact component={PostCreate} />
            <Route path={`${match.url}/:boardId/:postId`} exact component={PostDetail} />
            <Route path={`${match.url}/:boardId/:postId/create`} exact component={CommentCreate} />
          </Switch>
        </Contents>
      </div>
    );
  }
}

const Contents = styled.div`
  max-width: 1004px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

const mapStateToProps = (state) => {
  return {
    boards: state.board.boards,
    isLoading: state.board.isLoading,
  }
}

export default connect(mapStateToProps)(Board);