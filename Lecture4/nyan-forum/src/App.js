import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import GlobalStyle from './components/GlobalStyle';
import Landing from './views/Landing';
import Board from './views/Board';

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Router>
          {/* 한 개의 Route를 렌더링 하기 위해 Switch를 사용했습니다 */}
          <Switch>

            {/*
              "/" path에 접근했을 때 Landing을 렌더링합니다
              이 때 "/board"에 접근할 때 본 Route가 렌더링 되지 않도록 exact 속성을 true로 지정합니다
            */}
            <Route path="/" exact component={Landing} />

            {/* "/board" path에 접근했을 때 Board를 렌더링합니다  */}
            <Route path="/board" component={Board} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
