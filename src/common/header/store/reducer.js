import {constant} from './index'

const defaultState = {
    focurs: false
  };
  
  export default (state = defaultState, action) => {
    if (action.type === constant.CHANGEFOCURS) {
      const newState = JSON.parse(JSON.stringify(state));
      newState.focurs = true;
      return newState;
    }
    if (action.type === constant.CHANGEFOCURSS) {
      const newState = JSON.parse(JSON.stringify(state));
      newState.focurs = false;
      return newState;
    }
    return state;
  };
  