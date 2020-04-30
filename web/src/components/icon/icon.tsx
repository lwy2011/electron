import * as React from "react";
import "./icon.scss";
import classes from "../../helper/classes";

interface iconProps extends React.SVGAttributes<SVGElement>{
    name: string
}


const Icon: React.FunctionComponent<iconProps> = (
    {name, className,...other}) => {
    return (
        <svg className={classes(className, "yr-icon")} {...other}>
            <use xlinkHref={`#i-${name}`}/>
        </svg>
    );
};

export default Icon;