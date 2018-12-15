import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import PostItem from '../../components/PostItem';
import Comments from '../../components/Comments';

import { fetchPostDetail } from './actions';

class PostDetail extends React.Component {

  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(fetchPostDetail(match.params.postId));
  }

  render() {
    const { post, comments } = this.props;
    if (post) {
      return (
        <Wrapper>
          <PostItem isDetail post={post} />
          <Comments comments={comments} />
        </Wrapper>
      );
    }

    return null;
  }
}

const Wrapper = styled.div`
  width: 100%;
`;

const mapStateToProps = (state) => {
  return {
    post: state.postDetail.post,
    comments: state.postDetail.comments,
  }
}

export default connect(mapStateToProps)(PostDetail);