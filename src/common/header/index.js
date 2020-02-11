import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
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

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focurs: false
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
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
            <i className={this.state.focurs ? "search focurs" : "search"}></i>
            <CSSTransition
              in={this.state.focurs}
              timeout={200}
              classNames="slide"
            >
              <NaviInput
                className={this.state.focurs ? "focurs" : ""}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
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
  }
  handleFocus() {
    this.setState({
      focurs: true
    });
  }
  handleBlur() {
    this.setState({
      focurs: false
    });
  }
}
export default Header;
