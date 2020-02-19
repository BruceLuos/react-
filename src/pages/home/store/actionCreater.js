import axios from "axios";
import * as constant from "./constant";
import { fromJS } from 'immutable';

const changeHomeData = result => {
  return {
    type: constant.CHANGEHOMEDATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
  };
};

const addHomeList = (list, nextPage) => ({
	type: constant.MORELISTINFO,
	list: fromJS(list),
	nextPage
})

export const getHomeInfo = () => {
  return dispatch => {
    axios.get("/api/home.json").then(res => {
        console.log('hh')
      const result = res.data.data;
      dispatch(changeHomeData(result));
    });
  };
};

export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('/api/homeList.json?page=' + page).then((res) => {
			const result = res.data.data;
			dispatch(addHomeList(result, page + 1));
		});
	}
}
