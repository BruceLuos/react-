import axios from "axios";
import * as constant from "./constant";
const changeHomeData = result => {
  return {
    type: constant.CHANGEHOMEDATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
  };
};
export const getHomeInfo = () => {
  return dispatch => {
    axios.get("/api/home.json").then(res => {
        console.log('hh')
      const result = res.data.data;
      dispatch(changeHomeData(result));
    });
  };
};
