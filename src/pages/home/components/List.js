import React, { Component } from "react";
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { withRouter } from 'react-router-dom';
import { 
  ListItem,
  ListInfo,
  LoadMore
} from "../style";

class List extends Component {
  goToDetail = (id) => {
    this.props.history.push(`/detail/${id}`);
  }
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {
          list.map((item, index) => (
            // <Link key={index} to={"/detail/" + item.get('id')}>
            <ListItem key={item.get('id')} onClick={() => this.goToDetail(item.get('id'))}>
              <img className="pic" alt="" src={item.get('imgUrl')}/>
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
            // </Link>
          ))
        }
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
      </div>
    )
  }
}

const mapState = state => ({
  list: state.home.get('articleList'),
  page: state.home.get('articlePage')
})

const mapDispatch = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreators.moreListRequest(page));
  }
})
export default connect(mapState, mapDispatch)(withRouter(List));