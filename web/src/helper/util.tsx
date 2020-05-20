// import {Dispatch, SetStateAction} from "react";
// Dispatch<SetStateAction<S>>
export interface UseStateFn {
    (): [
        number, () => void, () => void,
        { name: string, age?: number }, () => void, () => void
    ]
}

// interface UseReducerStateName {
//     name: string
// }
//
// interface UseReducerStateAge {
//     age: number
// }
//
// interface UseReducerStateSex {
//     sex: string
// }
// interface UseReducerStateReset {
//     reset:true
// }
//UseReducerStateName | UseReducerStateSex | UseReducerStateAge | UseReducerStateReset

export interface UseReducerState {
    name: string,
    age: number,
    sex: string
}

// type UseReducerActionType = keyof UseReducerState |'reset'

export interface ReducerY<T,P extends keyof  T> {
    (
        state:T,
        actions:{
            type:P ,
            val:{
                [K in P]:T[K]
            }
        }|{type:'reset'}
    ):T
}

// export interface UseReducerAction {
//     type: UseReducerActionType,
//     val:{[k in keyof UseReducerState]:}
// }
