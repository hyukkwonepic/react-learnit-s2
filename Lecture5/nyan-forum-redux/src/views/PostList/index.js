import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import PostItem from '../../components/PostItem';

import { fetchPostList } from './actions';

class PostList extends React.Component {

  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(fetchPostList(match.params.boardId));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.boardId !== this.props.match.params.boardId) {
      const { dispatch, match } = this.props;
      dispatch(fetchPostList(match.params.boardId));
    }
  }

  render() {
    const { posts } = this.props;
    return (
      <Wrapper>
        {posts.map((post) => {
          return (
            <PostItem key={post.id} post={post} />
          );
        })}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
`;

const mapStateToProps = (state) => {
  return {
    posts: state.postList.posts,
  }
}

export default connect(mapStateToProps)(PostList);