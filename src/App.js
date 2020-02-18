import React from "react";
import {BrowserRouter,Route} from "react-router-dom"
import Header from "./common/header";
import store from "./store";
import {Provider} from "react-redux";
import { GlobalIcon } from "./statics/iconfont/iconfont";
import {GlobalStyle} from './style'
import Home from "./pages/home";
import Detail from "./pages/detail";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        <GlobalIcon></GlobalIcon>
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
