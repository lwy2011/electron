import React from "react";


import "./button.scss";
import Icon from "../icon/icon";
import make_class from "../../helper/make-class";

const initClass = make_class("button");

interface buttonProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
    text?: string,
    icon?: string,
}

const Button: React.FunctionComponent<buttonProps> =
    ({text, icon, ...rest}) => {
        return (
            <div className={initClass()} {...rest}>
                <span>{text}</span>
                {icon && <Icon name={icon}/>}
            </div>
        );
    };

export default Button;