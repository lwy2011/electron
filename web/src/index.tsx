import "./common.scss";
import ReactDOM from "react-dom";
import Button from "./components/button/button";
import Icon from "./components/icon/icon";
import React from "react";

ReactDOM.render(
    <div style={{"margin": "1em"}}>
        <ul>
            <li style={{"margin": "1em"}}>
                <Icon name={"loading"} loading={true}/>
            </li>
            <li style={{"margin": "1em"}}>
                <Icon name={"loading"} disabled={true}/>
            </li>
            <li style={{"margin": "1em"}}>
                <Button icon={"download"} text={"下载"}/>
            </li>
            <li style={{"margin": "1em"}}>
                <Button text={"下载"}/>
            </li>
        </ul>
    </div>,
    document.querySelector("#app")
);
