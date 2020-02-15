import React from "react";
import Header from "./common/header";
import store from "./store";
import {Provider} from "react-redux";
import { GlobalIcon } from "./statics/iconfont/iconfont";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header></Header>
        <GlobalIcon></GlobalIcon>
      </Provider>
    </div>
  );
}

export default App;
