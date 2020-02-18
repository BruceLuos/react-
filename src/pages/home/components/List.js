import React, { Component } from "react";
import {ListItem,ItemInfo} from '../style'
import {connect} from 'react-redux'
class List extends Component {
  render() {
    return this.props.articleList.map((item)=>{
      return <ListItem>
      <ItemInfo>
    <a className="title" href="/">{item.get('title')}</a>
        <p className="desc">{item.get('desc')}</p>
      </ItemInfo>
      <img className="ItemImg" src={item.get('imgUrl')} alt=""/>
    </ListItem>
    })
    
  }
}
const mapStateToProp = state => {
  return {
    articleList: state.get("home").get("articleList")
  };
};
export default connect(mapStateToProp, null)(List);
