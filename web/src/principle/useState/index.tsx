import React, {useState} from "react";
import {UseStateFn} from "../../helper/util";
import Button from "../../components/button/button";

const States: UseStateFn<number> = () => {
    const [count, setCount] = useState(0);
    const addCount = () => {
        alert(`准备第一次setCount,count=${count}`);
        setCount(count => count + 1);  //这里的callbackfn是要return 一个值的！
        alert(`准备第二次setCount,count=${count}`);
        setCount(count => count + 1);
        alert(`第二次setCount成功,count=${count}`);
    };
    const addCount1 = () => {
        alert(`准备第一次setCount,count=${count}`);
        setCount(count + 1);  //这里的callbackfn是要return 一个值的！
        alert(`准备第二次setCount,count=${count}`);
        setCount(count + 1);
        alert(`第二次setCount成功,count=${count}`);
    };
    const addCountSync = () => {
        alert(`准备第一次setCount,count=${count}`);
        setCount(count => count + 1);  //这里的callbackfn是要return 一个值的！
        alert(`准备第二次setCount,count=${count}`);
        setCount(count => count + 1);
        alert(`第二次setCount成功,count=${count}`);
    };
    return [
        count, addCount, addCount1, addCountSync
    ];
};
const UseState = () => {
    const [count, addCount, addCount1] = States();
    const code = `
            点击触发的set方法：
                const addCount = () => {
                    alert(\`准备第一次setCount,count=${count}\`);
                    setCount(count => count + 1);
                    alert(\`准备第二次setCount,count=${count}\`);
                    setCount(count => count + 1);
                    alert(\`第二次setCount成功,count=${count}\`);
                }
            `;
    const code1 = `
            点击触发的set方法：
                const addCount = () => {
                    alert(\`准备第一次setCount,count=${count}\`);
                    setCount(count + 1);
                    alert(\`准备第二次setCount,count=${count}\`);
                    setCount( count + 1);
                    alert(\`第二次setCount成功,count=${count}\`);
                }
            `;
    return <>
        <p>********************************</p>
        <h4>setState 的异步探究——异步</h4>
        <p>{`count=${count}`}</p>
        <p style={{"whiteSpace": "pre"}}>
            {code}
        </p>
        <Button onClick={addCount} text={"add count"}/>

        <p>********************************</p>
        <h4>setState 的异步探究——set函数的坑！——尽量用函数作为set函数的参数！</h4>
        <p>{`count=${count}`}</p>
        <p style={{"whiteSpace": "pre"}}>
            {code1}
        </p>
        <Button onClick={addCount1} text={"add count"}/>
    </>;
};
export default UseState;