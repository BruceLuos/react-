import React, { PureComponent } from "react";
import { ListItem, ItemInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { actionCreater } from "../store";
class List extends PureComponent {
  render() {
    return (
      <div>
        {this.props.articleList.map((item,index) => {
          return (
            <Link key={index} to={'/detail/' + item.get('id')}>
            <ListItem>
              <ItemInfo>
                <h3 className="title">
                  {item.get("title")}
                </h3>
                <p className="desc">{item.get("desc")}</p>
              </ItemInfo>
              <img className="ItemImg" src={item.get("imgUrl")} alt="" />
            </ListItem>
            </Link>
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
