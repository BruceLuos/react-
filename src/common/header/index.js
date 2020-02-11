import React, { Component } from "react";
import { HeaderWrapper,Logo,Navi,NaviItem,NaviInput,Addition,Button} from "./style";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo href="/"></Logo>
        <Navi>
            <NaviItem className='left active'>首页</NaviItem>
            <NaviItem className='left'>下载APP</NaviItem>
            <NaviItem className='right'>登录</NaviItem>
            <NaviItem className="right beta"></NaviItem>
            <NaviItem className='right'>Aa</NaviItem>
            <NaviInput></NaviInput>
        </Navi>
        <Addition>
            <Button>注册</Button>
            <Button>写文章</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}
export default Header;
