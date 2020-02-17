import { fromJS } from 'immutable';
import * as constant from './constant';

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	articlePage: 1,
	showScroll: false
});

const changeHomeData = (state, action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
		recommendList: fromJS(action.recommendList)
	});
};
export default (state = defaultState,action)=>{
	switch(action.type) {
		case constant.CHANGEHOMEDATA:
			return changeHomeData(state, action);
		default:
			return state;
	}
}