import * as React from "react";
import "./icon.scss";
import classes from "../../helper/classes";

interface iconProps extends React.SVGAttributes<SVGElement> {
    name: string,
    disabled?: boolean,
    loading?: boolean
}


const Icon: React.FunctionComponent<iconProps> = (
    {
        name,
        className,loading,
        ...other
    }) => {
    return (
        <svg className={classes(className, "yr-icon",loading ? 'loading':'')}
             {...other} >
            <use xlinkHref={`#i-${name}`}/>
        </svg>
    );
};

export default Icon;