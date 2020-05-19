import React from "react";
import UseState from "./useState";


const Principle = () => {
    const lists: string[] = ["useState"];

    const listDom = (key: string) => {
        return <li key={key}>
            <p>{key}</p>
            <UseState/>
        </li>;
    };
    return <div>
        <h4>原理</h4>
        <ul>
            {
                lists.map(
                    key => listDom(key)
                )
            }
        </ul>
    </div>;
};

export default Principle;