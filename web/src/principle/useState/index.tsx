import React, {useState} from "react";
import {UseStateFn} from "../../helper/util";
import Button from "../../components/button/button";

const States: UseStateFn = () => {
    const [count, setCount] = useState(0);
    const [person, setPerson] = useState<{ name: string, age?: number }>({name: "liu", age: 18});
    const addCount = () => {
        alert(`准备执行setCount(count=>count + 1),count=${count}`);
        setCount(count => count + 1);  //这里的callbackfn是要return 一个值的！
        alert(`准备再次执行setCount(count=>count + 1),count=${count}`);
        setCount(count => count + 1);
        alert(`执行完毕setCount(count=>count + 1),count=${count}`);
    };
    const addCount1 = () => {
        alert(`准备执行setCount(count + 1),count=${count}`);
        setCount(count + 1);  //这里的callbackfn是要return 一个值的！
        alert(`准备再次执行setCount(count + 1),count=${count}`);
        setCount(count + 1);
        alert(`第二次setCount成功,count=${count}`);
    };
    const editPerson = () => {
        alert(`准备执行setPerson({name:'peter'})`);
        setPerson({name: "peter"});
    };
    const editPerson1 = () => {
        alert(`准备执行
         person.name = 'perter' \n
        setPerson(person);`);
        person.name = "perter";
        setPerson(person);
    };
    return [
        count, addCount, addCount1,
        person, editPerson, editPerson1
    ];
};
const UseState = () => {
    const [
        count, addCount, addCount1,
        person, editPerson, editPerson1
    ] = States();

    return <>
        <p>********************************</p>
        <h4>setState 的异步探究——异步</h4>
        <p>{`count=${count}`}</p>

        <Button onClick={addCount} text={"add count"}/>

        <p>********************************</p>
        <h4>setState 的异步探究——set函数的坑！——尽量用函数作为set函数的参数！</h4>
        <p>{`count=${count}`}</p>

        <Button onClick={addCount1} text={"add count"}/>

        <p>********************************</p>
        <h4>setState 不可局部更新！——实质是react的响应式只关注state的最外层的值：指针地址、简单类型的值！</h4>
        <p>{`name:${person.name}  -  age:${person.age}`}</p>
        <Button onClick={editPerson} text={"edit person 局部"}/>
        <br/>
        <Button onClick={editPerson1} text={"edit person 指针不变"}/>
    </>;
};
export default UseState;