import React, { createContext } from "react";
import {State, initialState} from "./initialState"
export const Context = createContext<{state:State | null, dispatch:React.Dispatch<any>}>({state:initialState, dispatch:()=>null});

