import { constant } from "./index";
import { fromJS } from "immutable";

// immutable
const defaultState = fromJS({
  focurs: false
});

export default (state = defaultState, action) => {
  if (action.type === constant.CHANGEFOCURS) {
    // immutable对象的set方法会结合之前immutable对象的值
    // 和设置的值，返回一个全新的对象
    return state.set('focurs',true)
  }
  if (action.type === constant.CHANGEFOCURSS) {
    // const newState = JSON.parse(JSON.stringify(state));
    // newState.focurs = false;
    // return newState;
    return state.set('focurs',false)
  }
  return state;
};
