import React from "react";
import { CSSTransition } from "react-transition-group";
import {actionCreater} from "./store";
import {
  HeaderWrapper,
  Logo,
  Navi,
  NaviItem,
  NaviInput,
  Addition,
  Button,
  SearchWrapper
} from "./style";
import { connect } from "react-redux";

const Header = props => {
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
          <i className={props.focurs ? "search focurs" : "search"}></i>
          <CSSTransition in={props.focurs} timeout={200} classNames="slide">
            <NaviInput
              className={props.focurs ? "focurs" : ""}
              onFocus={props.handleFocurs}
              onBlur={props.handleBlur}
            ></NaviInput>
          </CSSTransition>
        </SearchWrapper>
      </Navi>
      <Addition>
        <Button>注册</Button>
        <Button className="article">写文章</Button>
      </Addition>
    </HeaderWrapper>
  );
};
const mapStateToProps = state => {
  return {
    focurs: state.header.get('focurs')
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleFocurs() {
      dispatch(actionCreater.handleFocurs());
    },
    handleBlur() {
      dispatch(actionCreater.handleBlur());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
