import React from "react";
import {Route, Switch} from "react-router-dom";
import HomeApp from "../pages/Home";
import IntroduceApp from "../pages/Introduce";
import AskAndAnswerApp from "../pages/Faq";
import Index from "../pages/NotFound";

const RouterApp: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeApp}/>
            <Route path="/about" component={IntroduceApp}/>
            <Route path="/fad" component={AskAndAnswerApp}/>
            <Route component={Index}/>
        </Switch>
    );
};
export default RouterApp;
