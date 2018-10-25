import React, { Component } from 'react';
import Header from './common/header'
import store from './store';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { GlobalFont } from './statics/iconfont/iconfont'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalFont />  
          <GlobalStyle />
          <Header />
        </div>
      </Provider>
    );
  }
}

export default App;
