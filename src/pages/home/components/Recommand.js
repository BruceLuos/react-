import React, { Component } from "react";
import {
  RecommendWrapper,
  RecommendItem,
  XrcodeItem,
  RecommendWritter
} from "../style";
import { connect } from "react-redux";

class Recommand extends Component {
  render() {
    return (
      <RecommendWrapper>
        {this.props.recommendList.map(item => {
          return (
            <RecommendItem
              imgUrl={item.get("imgUrl")}
              key={item.get("id")}
            ></RecommendItem>
          );
        })}
        <XrcodeItem>
          <img
            className="xrcode"
            src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
            alt="Download index side qrcode"
          />
          <div className="xrcodeContent">
            <p>下载简书手机APP</p>
            <p className="content">随时随地发现和创作内容</p>
          </div>
        </XrcodeItem>
        <RecommendWritter>
          <span className="writter">推荐作者</span>
          <span className="change">换一批</span>
        </RecommendWritter>
      </RecommendWrapper>
    );
  }
}
const mapStateToProp = state => {
  return {
    recommendList: state.get("home").get("recommendList")
  };
};
export default connect(mapStateToProp, null)(Recommand);
