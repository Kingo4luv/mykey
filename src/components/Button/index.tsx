const Button = ({text, bordered, onClick, disabled}:{text:string; bordered?:boolean; onClick: () => void, disabled?: boolean}) => {
    return(
        <button onClick={onClick} className={`w-full ${bordered ? 'bg-white text-blue border border-blue': 'bg-blue text-white'} rounded h-12 focus:outline-none focus:ring-blue focus:border-blue focus:z-10 text-sm disabled:opacity-50`} disabled={disabled}>{text}</button>
    )
}

export default Button;