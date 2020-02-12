const defaultState = {
    focurs: false
  };
  
  export default (state = defaultState, action) => {
    if (action.type === "changefocurs") {
      const newState = JSON.parse(JSON.stringify(state));
      newState.focurs = true;
      return newState;
    }
    if (action.type === "changefocurss") {
      const newState = JSON.parse(JSON.stringify(state));
      newState.focurs = false;
      return newState;
    }
    return state;
  };
  