import React from "react";


import "./button.scss";
import Icon from "../icon/icon";
import make_class from "../../helper/make-class";
import classes from "../../helper/classes";

const initClass = make_class("button");

interface buttonProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
    text?: string,
    icon?: string,
    leftIcon?: boolean,
}

const Button: React.FunctionComponent<buttonProps> =
    ({
         text,
         icon,
         leftIcon,
         className,
         ...rest
     }) => {
        const names = classes(initClass(), leftIcon ? "leftIcon" : "",className);
        return (
            <div className={names} {...rest}>
                <span>{text}</span>
                {icon && <Icon name={icon}/>}
            </div>
        );
    };

export default Button;