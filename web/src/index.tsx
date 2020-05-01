import "./common.scss";
import ReactDOM from "react-dom";
import Button from "./components/button/button";
import Icon from "./components/icon/icon";
import React from 'react';
ReactDOM.render(
    <div style={{"margin":'1em'}}>
        <Icon name={'loading'} loading={'true'} />
        <Icon name={'loading'} disabled={true} />
        <Button icon={'download'} text={'下载'}/>
        <Button  text={'下载'}/>
    </div>,
    document.querySelector("#app")
);
