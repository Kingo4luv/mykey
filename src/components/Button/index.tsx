const Button = ({text, bordered, onClick, loading, disabled}:{text:string; loading?:boolean; bordered?:boolean; onClick: () => void, disabled?: boolean}) => {
    return(
        <button onClick={onClick} className={`w-full ${bordered ? 'bg-white text-blue border border-blue': 'bg-blue text-white'} flex justify-center items-center rounded h-12 focus:outline-none focus:ring-blue focus:border-blue focus:z-10 text-sm disabled:opacity-50`} disabled={disabled}>
            {loading && 
            <span>
                <svg xmlns="http://www.w3.org/2000/svg"  style={{marginRight:"5px", background: "none", display: "block", shapeRendering: "auto", width:"20px", height:"20px"}} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" r="32" stroke-width="8" stroke={bordered ? '#00ACE6':'#ffffff'} stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
                </circle>
                </svg>
            </span>}
            {text}
        </button>
    )
}

export default Button;
