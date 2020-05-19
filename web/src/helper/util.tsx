// import {Dispatch, SetStateAction} from "react";
// Dispatch<SetStateAction<S>>
export interface UseStateFn<S>{
    ():[S, ()=>void,()=>void,()=>void]
}
