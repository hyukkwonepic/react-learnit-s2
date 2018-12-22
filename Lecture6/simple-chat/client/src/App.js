import React, { Fragment} from 'react';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Landing from './views/Landing';
import Chat from './views/Chat';

const GlobalStyle = createGlobalStyle`
  @import url(https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css);
  
  * {
    box-sizing: border-box;
    font-family: 'NanumSquare';
    font-size: 62.5%;
  }
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
  }
  #root {
    height: 100%;
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </Fragment>
    );
  }
}