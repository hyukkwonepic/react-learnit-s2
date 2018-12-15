import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from './components/GlobalStyle';
import Landing from './views/Landing';
import Board from './views/Board';

import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <Router>
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/board" component={Board} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
