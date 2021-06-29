import React from 'react'

interface TextInputProp{
    first: boolean ;
    second : boolean 
    last: boolean
    value: string 
    label: string 
    required: boolean  
    type: string 
    error: string  
    placeholder: string 
    name: string 
    id: string 
    onchange: React.ChangeEventHandler<HTMLInputElement>
}

export default function TextInput({first, second, last, value, label, required, type, error, placeholder, name, id, onchange}: TextInputProp ){
    return(
        <>
            <label htmlFor="first-name" className="sr-only">
                {label}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                autoComplete="off"
                required={required}
                value={value}
                onChange={onchange}
                className = {
                    `appearance-none relative bg-white block w-full px-3 py-[14px] sm:py-4 ${first ? 'border-l border-t border-b rounded-tl': second ? 'rounded-tr border-l-0': last ? 'rounded-b border-t-0':'rounded-none border-b border-t-0'} border-t border-r border-l border-b-2 border-[#D1D1D1] placeholder-form-text-grey text-black focus:outline-none focus:ring-blue focus:border-blue focus:z-10 text-sm`
                }
                placeholder={placeholder}
            />
            {error !== "" && <div className="flex items-center space-x-3 absolute top-[60px] md:top-[68px] w-full bg-white border border-[#A7AFB2] py-3 z-10 shadow-box-shadow rounded text-[10px] sm:text-xs">
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