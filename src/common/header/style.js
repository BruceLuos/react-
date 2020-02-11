import styled from "styled-components";

import LogoUrl from "../../statics/logo.png";
import BetaUrl from "../../statics/nav-beta.png";
export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a`
  position: absolute;
  width: 100px;
  height: 56px;
  display: block;
  background: url(${LogoUrl});
  background-size: contain;
`;
export const Navi = styled.div`
  width: 960px;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
`;
export const NaviItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  color: #333;
  font-size: 17px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
  &.beta {
    background: url(${BetaUrl}) no-repeat;
    background-size: contain;
    height: 25px;
    width: 55px;
    margin-top: 15px;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .slide-enter {
    transition: all 0.2s ease-in;
  }
  .slide-enter-active {
    width: 240px;
  }
  .slide-exit {
    transition: all 0.2s ease-out;
  }
  .slide-exit-active {
    width: 200px;
  }
  .search {
    position: absolute;
    top: 12px;
    right: 6px;
    background: pink;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    &.focurs {
      background: grey;
    }
  }
`;
export const NaviInput = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 200px;
  height: 38px;
  padding: 0 35px 0 15px;
  box-sizing: border-box;
  margin-top: 9px;
  margin-left: 20px;
  border-radius: 19px;
  border: none;
  outline: none;
  background: #eee;
  font-size: 15px;
  &::placeholder {
    color: #999;
  }
  &.focurs {
    width: 240px;
  }
`;
export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 60px;
  height: 56px;
`;
export const Button = styled.div`
  float: left;
  border-radius: 19px;
  background: white;
  margin-top: 9px;
  padding: 0 20px;
  margin-right: 20px;
  line-height: 38px;
  border: 1px solid rgba(236, 97, 73, 0.7);
  font-size: 15px;
  color: #ea6f5a;
  &.article {
    color: white;
    background: #ea6f5a;
  }
`;
