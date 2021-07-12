const Button = ({text, onClick, disabled}:{text:string; onClick: () => void, disabled?: boolean}) => {
    return(
        <button onClick={onClick} className={`w-full bg-blue text-white rounded h-12 focus:outline-none focus:ring-blue focus:border-blue focus:z-10 text-sm disabled:opacity-50`} disabled={disabled}>{text}</button>
    )
}

export default Button;