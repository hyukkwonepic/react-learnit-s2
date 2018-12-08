import React from 'react';
import styled from 'styled-components';

export default class Board extends React.Component {

  // CDM에서 boards 데이터 가져오기
  async componentDidMount() {
  }

  render() {
    return (
      <div>
        <Contents>
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