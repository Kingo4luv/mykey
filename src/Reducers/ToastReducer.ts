import {
 ADD_TOAST,
 REMOVE_TOAST
} from "../actions";
import { initialState } from "../utils/store/initialState";
import { generateToastId } from "../utils/helper";

export type Action = {
  type: string;
  payload: any;
};

const addToast=(payload:Record<string, any>):Record<string, any>=>{
     return {...payload, id:generateToastId()}
}

const removeToast=(id:number, prevState:Record<string, any>[])=>{
  return prevState.filter((t) => {
    return t.id !== id;
  });
}

const ToastReducer = (state = initialState.Toasts, action: Action) => {
  switch (action.type) {
    case ADD_TOAST:
      return  [...state, addToast(action.payload)]
       
    case REMOVE_TOAST:
      return [...removeToast(action.payload, state)]

    default:
      return state;
  }
};
export default ToastReducer;
