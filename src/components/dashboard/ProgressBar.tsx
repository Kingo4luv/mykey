const ProgressBar = ({percent}: {percent:string}) => {
    return(
        <div className="w-full lg:w-[260px] h-2 relative">
            <div className="w-full block h-full rounded-lg bg-[#EFEFEF]" />
            <div className="absolute inset-0 block h-full rounded-lg bg-blue" style={{width: `${percent}%`}} />
        </div>
    )
}

export default ProgressBar;