import React, { Component } from "react";
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';
import { actionCreators } from "./store";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4522/53ecdc42d68411d6b57a016b08136457eb23d5a4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="123"/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
      </HomeWrapper>
    )
  }

  handleScrollTop = () => {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
}

const mapState = state => ({
  showScroll: state.home.get('showScroll')
});

const mapDispatch = dispatch => ({
  changeHomeData() {
    dispatch({type: 'USER_FETCH_REQUESTED'});
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleTopShow(true))
		}else {
			dispatch(actionCreators.toggleTopShow(false))
		}
  }
})

export default connect(mapState, mapDispatch)(Home);