import styled from "styled-components";
import LogoUrl from "../../statics/logo.png";
import BetaUrl from '../../statics/nav-beta.png'
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
  padding-left:70px;
  box-sizing:border-box;
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
  &.beta{
      background:url(${BetaUrl}) no-repeat;
      background-size:contain;
      height: 25px;
      width: 55px;
      margin-top: 15px;
      
  }
`;
export const NaviInput = styled.input.attrs({
  placeholder: "搜索"
})`
    width:160px;
    height:38px;
    padding: 0 20px;
    box-sizing:border-box;
    margin-top:9px;
    margin-left:20px;
    border-radius:19px;
    border:none;
    border-line:none;
    background:#eee;
    font-size:15px;
    &::placeholder{
        color:#999;
    }
`;
export const Addition = styled.div`
    position:absolute;
    top:0;
    right:0;
    height:56px;
    background:red;
`
export const Button = styled.div`
    float:left;
    border-radius:19px;
    background:white;
    margin-top:9px;
    padding:0 20px;
    margin-right: 20px;
    line-height:38px;
    border:1px solid 
`