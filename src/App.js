import React, { Component } from 'react';
import Header from './common/header'
import store from './store';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { GlobalFont } from './statics/iconfont/iconfont';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalFont />  
          <GlobalStyle />
          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
