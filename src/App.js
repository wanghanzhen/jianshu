import React, { Component } from 'react';
import Header from './common/header'
import store from './store';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { GlobalFont } from './statics/iconfont/iconfont';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';

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
              <Route path="/login" exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path="/detail/:id" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
