import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from '../header/store'; 
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper,
  SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
  Addition,
  Button 
} from './style.js';

class Header extends Component {
  getListArea() {
    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch></SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              this.props.list.map(item => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={300}
              classNames="slide">
              <NavSearch className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}></NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe623;</i>
            {this.getListArea()}
          </SearchWrapper>
          <Addition>
            <Button className="writting">
              <i className="iconfont">&#xe615;</i>
              写文章
            </Button>
            <Button className="reg">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused'),
    list: state.header.get('list'),
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getHeaderList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);