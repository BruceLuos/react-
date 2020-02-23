import React from "react";
import {BrowserRouter,Route} from "react-router-dom"
import Header from "./common/header";
import store from "./store";
import {Provider} from "react-redux";
import { GlobalIcon } from "./statics/iconfont/iconfont";
import {GlobalStyle} from './style'
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from './pages/login'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyle></GlobalStyle>
        
        <GlobalIcon></GlobalIcon>
        <BrowserRouter>
        <Header></Header>
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/login' exact component={Login}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
