import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreater } from "./store";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommand from "./components/Recommand";
import Writter from "./components/Writter";

class Home extends PureComponent {
  ScrollToTop() {
    window.scrollTo(0, 0);
  }
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
        {this.props.showScroll ? (
          <BackTop className="top" onClick={this.ScrollToTop}>
            返回顶部
          </BackTop>
        ) : null}
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}
const mapDispatchToProp = dispatch => {
  return {
    changeHomeData() {
      dispatch(actionCreater.getHomeInfo());
    },
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 100) {
        dispatch(actionCreater.toggleTopShow(true));
      } else {
        dispatch(actionCreater.toggleTopShow(false));
      }
    }
  };
};
const mapState = state => {
  return {
    showScroll: state.get("home").get("showScroll")
  };
};
export default connect(mapState, mapDispatchToProp)(Home);
