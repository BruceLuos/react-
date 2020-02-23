import styled from 'styled-components';

export const DetailWrapper = styled.div`
width: 960px;
margin: 0 auto;
// background:red;
overflow: hidden;
`;

export const DetailLeft = styled.div`
width: 625px;
padding: 0 10px 0 10px;
  margin-top: 10px;
  margin-left: 15px;
  float: left;
  background: #fff;
  .bannerImg {
    width: 625px;
    height: 270px;
  }
`
export const DetailRight = styled.div`
width: 280px;
float: right;
background: #fff;
`
export const Header = styled.div`
	margin: 30px 0 20px 0;
	line-height: 44px;
	font-size: 34px;
	color: #333;
	font-weight: bold;
`;

export const Content = styled.div`
	color: ##2f2f2f;
	img {
		width: 100%;
	}
	p {
		margin: 25px 0;
		font-size: 16px;
		line-height: 30px;
	}
	b {
		font-weight: bold;
	}
`;