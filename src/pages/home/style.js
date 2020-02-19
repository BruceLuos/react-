import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  // background:red;
  overflow: hidden;
`;
export const HomeLeft = styled.div`
  width: 625px;
  padding-top: 30px;
  margin-left: 15px;
  float: left;
  // background:blue;
  .bannerImg {
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  width: 280px;
  float: right;
  // background:green;
`;
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px;
	background: #f7f7f7;
	font-size: 13px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;
export const ListItem = styled.div`
  border-bottom: 1px solid #dcdcdc;
  padding: 20px 0;
  overflow: hidden;
  &::a {
    text-decoration: none;
  }
  .ItemImg {
    display: block;
    float: right;
    width: 150px;
    height: 100px;
    border-radius: 10px;
  }
`;
export const ItemInfo = styled.div`
  float: left;
  width: 475px;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
  //   background: red;
`;
export const RecommendItem = styled.div`
  height: 50px;
  background: url(${props => props.imgUrl}) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  margin-bottom: 6px;
  border-radius: 4px;
`;
export const XrcodeItem = styled.div`
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 234px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  overflow: hidden;
  .xrcode {
    float: left;
    width: 60px;
    height: 60px;
  }
  .xrcodeContent {
    float: right;
	line-height: 20px;
	margin-top:10px;
	margin-right:30px;
	vertical-align: middle;
	.content{
		font-size:12px;
		color:grey;
	}
  }
`;
export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align:center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;