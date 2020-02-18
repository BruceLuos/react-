import React, { Component } from "react";
import {connect} from 'react-redux'
import { actionCreater } from './store';
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommand from "./components/Recommand";
import Writter from "./components/Writter";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="bannerImg"
            src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />
          <Topic></Topic>
          <List></List>
          
        </HomeLeft>
        <HomeRight>
          <Recommand></Recommand>
          <Writter></Writter>
        </HomeRight>
      </HomeWrapper>
    );
  }
  componentDidMount(){
    this.props.changeHomeData()
  }
}
const mapDispatchToProp = dispatch=>{
  return {
    changeHomeData(){
      dispatch(actionCreater.getHomeInfo())
    }
  }
}
export default connect(null,mapDispatchToProp)(Home);
