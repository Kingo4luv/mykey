import React from "react";
import { IAuthError } from "../interfaces";


export const AuthError:React.FC<IAuthError>=({error})=>{
  return error?<div className="bg-red-100 rounded w-full py-3 text-sm text-red-500 my-4 px-4 text-center capitalize">
  {Array.isArray(error)? error.map((e, idx)=>{
    return <p key={idx}>{e}</p>
  }):error}
</div>:null
}
