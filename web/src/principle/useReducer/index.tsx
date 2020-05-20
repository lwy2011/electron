import {ReducerY, UseReducerState} from "../../helper/util";

const initial: UseReducerState = {
    name: "",
    age: 0,
    sex: "",
};

const reducer: ReducerY<UseReducerState,keyof UseReducerState> =
    (state, action) => {
        if (action.type !== "reset") {
            const copy: UseReducerState = {...state,...action.val};
            return copy;
        }
        return initial;

        // switch (type) {
        //     case 'name':
        //         copy.name = val
        //         return copy
        //     case 'age':
        //         copy.name = val
        //         return copy
        //     case 'sex':
        //         copy.name = val
        //         return copy
        //     default :
        //         throw new Error('action type 有问题！')
        // }
    };

export const UseReducer = () => {

};