import * as React from "react";
import { ReactSVGElement} from "react";
import "./icon.scss";

interface iconProps {
    name: String,
}

const icon = ({name}:iconProps): ReactSVGElement => {
    return (
        <svg className={}>
            <use xlinkHref={}></use>
        </svg>
    );
};

export default icon;