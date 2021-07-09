const Button = ({text, onClick}:{text:string; onClick: () => void}) => {
    return(
        <button onClick={onClick} className="w-full bg-blue text-white rounded h-12 focus:outline-none focus:ring-blue focus:border-blue focus:z-10 text-sm">{text}</button>
    )
}

export default Button;