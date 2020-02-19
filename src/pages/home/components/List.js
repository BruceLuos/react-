import React, { Component } from "react";
import { ListItem, ItemInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreater } from "../store";
class List extends Component {
  render() {
    return (
      <div>
        {this.props.articleList.map(item => {
          return (
            <ListItem key={item.get("id")}>
              <ItemInfo>
                <a className="title" href="/">
                  {item.get("title")}
                </a>
                <p className="desc">{item.get("desc")}</p>
              </ItemInfo>
              <img className="ItemImg" src={item.get("imgUrl")} alt="" />
            </ListItem>
          );
        })}
        <LoadMore onClick={() => this.props.getMoreList(this.props.page)}>加载更多</LoadMore>
      </div>
    );
  }
}
const mapStateToProp = state => {
  return {
    articleList: state.get("home").get("articleList"),
    page: state.getIn(['home', 'articlePage'])

  };
};
const mapDispatch = dispatch => {
  return {
    getMoreList(page) {
      dispatch(actionCreater.getMoreList(page))
    }
  };
};
export default connect(mapStateToProp, mapDispatch)(List);
