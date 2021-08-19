import React from 'react'
import { Path, UseFormRegister } from "react-hook-form";
import {IFormValues} from "../../utils/interfaces"

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  first?: boolean ;
  half?: boolean;
  single?:boolean;
  second? : boolean 
  last?: boolean
  type: string 
  error?: string  
  placeholder: string 
  name: string 
  id: string 
  required: boolean;
};

export default function TextInput({first, second, last, label, required,half, single, register, type, error, placeholder, name, id,}: InputProps ){
    return(
        <>
            <label htmlFor="first-name" className="sr-only">
                {label}
            </label>
            <input
                {...register(label, { required })}
                id={id}
                type={type}
                autoComplete="off"
                required={required}
                className = {
                    `appearance-none relative bg-white block w-full px-3 py-[14px] sm:py-4 ${single ? 'border rounded' :first && !half  && !single ? 'border-l border-t border-b rounded-tl rounded-tr': first && half && single ? 'border rounded' :first && half ? 'border-l border-t border-b rounded-tl' : second ? 'rounded-tr border-l-0': last ? 'rounded-b border-t-0':'rounded-none border-b border-t-0'} border-t border-r border-l border-b border-[#D1D1D1] placeholder-form-text-grey font-thin text-black focus:outline-none focus:ring-blue focus:border-blue focus:z-10 text-sm`
                }
                placeholder={placeholder}
            />
            {error !== undefined && error !== "" && <div className="flex items-center space-x-3 absolute top-[60px] md:top-[63px] w-full bg-white border border-[#A7AFB2] py-3 z-10 shadow-box-shadow rounded text-[10px] sm:text-xs">
                <span className="absolute -top-2 left-6 w-4 h-4 border-t border-l border-[#A7AFB2] bg-white transform rotate-45 z-[-99]"></span>
                <span className="">
                    <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16ZM7.2 10.4V12H8.8V10.4H7.2ZM7.2 4V8.8H8.8V4H7.2Z" fill="#FDA828"/>
                    </svg>
                </span>
                <span>{error}</span>
            </div>}
        </>
    )
}