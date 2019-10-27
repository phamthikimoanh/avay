import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import UrlRouter from "./configs/UrlRouter";
import HeaderApp from "./components/Header";
import 'antd/dist/antd.css';
import "./public/css/main.css";
import "./public/js/custom"

require('typeface-roboto');
const App: React.FC = () => {
    return (
        <Router>
            <HeaderApp/>
            <UrlRouter/>
        </Router>
    );
};

export default App;
