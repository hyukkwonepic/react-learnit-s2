import React from 'react';
import styled from 'styled-components';

class PostList extends React.Component {

  // CDM에서 board의 posts 데이터 가져오기
  async componentDidMount() {
  }

  // CDU에서 활성화된 게시판이 변경되었을 때 새 posts 데이터 가져오기
  async componentDidUpdate(prevProps, prevState) {
  }

  render() {
    return (
      <Wrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
`;

export default PostList;