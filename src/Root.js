import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {Home} from "./page/home/Home";
import {Heroes} from "./page/heroes/Heroes";
import {Scoreboard} from "./page/scoreboard/Scoreboard";
import {Products} from "./page/products/Products";

export const Root = (props) =>{
    return(
        <BrowserRouter>
                <p>공통 메뉴 영역</p>
                {/*라우팅 영역*/}
                <Route exact path="/" component={Home}></Route>
                <Route path="/heroes" component={Heroes}></Route>
                <Route path="/scoreboard" component={Scoreboard}></Route>
                <Route path="/products" component={Products}></Route>
        </BrowserRouter>
    )
};