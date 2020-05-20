// import {Dispatch, SetStateAction} from "react";
// Dispatch<SetStateAction<S>>
export interface UseStateFn{
    ():[
        number, ()=>void,()=>void,
        {name:string,age?:number},()=>void,()=>void
    ]
}
