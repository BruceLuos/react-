import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { actionCreater } from "./store";
import {
  HeaderWrapper,
  Logo,
  Navi,
  NaviItem,
  NaviInput,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem
} from "./style";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo href="/"></Logo>
        <Navi>
          <NaviItem className="left active">首页</NaviItem>
          <NaviItem className="left">下载APP</NaviItem>
          <NaviItem className="right">登录</NaviItem>
          <NaviItem className="right beta"></NaviItem>
          <NaviItem className="right">Aa</NaviItem>
          <SearchWrapper>
            <i className={this.props.focurs ? "search focurs" : "search"}></i>
            <CSSTransition
              in={this.props.focurs}
              timeout={200}
              classNames="slide"
            >
              <NaviInput
                className={this.props.focurs ? "focurs" : ""}
                onFocus={this.props.handleFocurs}
                onBlur={this.props.handleBlur}
              ></NaviInput>
            </CSSTransition>
            {this.ShowSearchItem()}
          </SearchWrapper>
        </Navi>
        <Addition>
          <Button>注册</Button>
          <Button className="article">写文章</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
  ShowSearchItem() {
    const newList = this.props.headerList.toJS()
    const ShowList = [];
    for (let i = this.props.page * 10; i < (this.props.page+1)*10; i++) {
      ShowList.push(<SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>);
    }
    if (this.props.focurs) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          {ShowList}
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
}

const mapStateToprops = state => {
  return {
    focurs: state.get("header").get("focurs"),
    headerList: state.get("header").get("headerList"),
    totalPage: state.get("header").get("totalPage"),
    page: state.get("header").get("page")
  };
};
const mapDispatchToprops = dispatch => {
  return {
    handleFocurs() {
      dispatch(actionCreater.getList());
      dispatch(actionCreater.handleFocurs());
    },
    handleBlur() {
      dispatch(actionCreater.handleBlur());
    }
  };
};
export default connect(mapStateToprops, mapDispatchToprops)(Header);
