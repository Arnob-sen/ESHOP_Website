import React from "react";
import { useContext,createContext,useReducer } from "react";
// prepare the data layer
export const StateContext=createContext();
// wrap our app and give the data layer
export const StateProvider =({reducer,initialState,childer})=>{
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {childer}
    </StateContext.Provider>

}
//pull information from data layer
export const useStateValue=()=>useContext(StateContext);
