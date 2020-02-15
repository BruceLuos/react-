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
    ShowSearchItem() {
        const {
          page,
          totalPage,
          handleEnter,
          headerList,
          handleLeave,
          focurs,
          mouseIn,
          changeItem
        } = this.props;
        const newList = headerList.toJS();
        const ShowList = [];
        for (let i = page * 10; i < (page + 1) * 10; i++) {
          ShowList.push(<SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>);
        }
        if (focurs || mouseIn) {
          return (
            <SearchInfo onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
              <SearchInfoTitle>
                热门搜索
                <SearchInfoSwitch
                  onClick={() => {
                    changeItem(page, totalPage,this.spinIcon);
                  }}
                >
                  <i
                    ref={icon => {
                      this.spinIcon = icon;
                    }}
                    className="iconfont spin"
                  >
                    &#xe851;
                  </i>换一批
                </SearchInfoSwitch>
              </SearchInfoTitle>
              {ShowList}
            </SearchInfo>
          );
        } else {
          return null;
        }
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
            <i className={this.props.focurs ? "search focurs" : "search"}></i>
            <CSSTransition
              in={this.props.focurs}
              timeout={200}
              classNames="slide"
            >
              <NaviInput
                className={this.props.focurs ? "focurs" : ""}
                onFocus={()=>{this.props.handleFocurs(this.props.headerList)}}
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
  
}

const mapStateToprops = state => {
  return {
    focurs: state.get("header").get("focurs"),
    headerList: state.get("header").get("headerList"),
    totalPage: state.get("header").get("totalPage"),
    page: state.get("header").get("page"),
    mouseIn: state.get("header").get("mouseIn")
  };
};
const mapDispatchToprops = dispatch => {
  return {
    handleFocurs(list) {
        (list.size === 0)&& dispatch(actionCreater.getList());
      dispatch(actionCreater.handleFocurs());
    },
    handleBlur() {
      dispatch(actionCreater.handleBlur());
    },
    handleEnter() {
      dispatch(actionCreater.mouseEnter());
    },
    handleLeave() {
      dispatch(actionCreater.mouseLeave());
    },
    changeItem(page, totalPage,spin) {
        // 旋转动画
        let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      let pagedata = page;
      if (pagedata < totalPage - 1) {
        dispatch(actionCreater.changeItem(pagedata + 1));
      } else {
        dispatch(actionCreater.changeItem(0));
      }
    }
  };
};
export default connect(mapStateToprops, mapDispatchToprops)(Header);
