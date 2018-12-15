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
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/board" component={Board} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
