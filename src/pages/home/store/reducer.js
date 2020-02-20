import { fromJS } from 'immutable';
import * as constant from './constant';

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	articlePage: 1,
	showScroll: false,
	writterList:[]
});

const changeHomeData = (state, action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
		recommendList: fromJS(action.recommendList),
		writterList: fromJS(action.writterList)
	});
};

const MoreListInfo = (state,action)=>{
	return state.merge({
		'articleList': state.get('articleList').concat(action.list),
		'articlePage': action.nextPage
	});
}

export default (state = defaultState,action)=>{
	switch(action.type) {
		case constant.CHANGEHOMEDATA:
			return changeHomeData(state, action);
		case constant.MORELISTINFO:
			return MoreListInfo(state,action)
		default:
			return state;
	}
}