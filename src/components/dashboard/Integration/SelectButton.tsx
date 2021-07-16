interface SelectButtonProps{
    text: string,
    value: string,
    handleSelected: (value:string) => void
}

const SelectButton = ({text, value, handleSelected}: SelectButtonProps) => {
    const handleSelectedChange = () => {
        handleSelected(text)
    }
    return(
        <button onClick={handleSelectedChange} className={`${value !== '' && value === text ? 'bg-blue text-white':'bg-white text-black'} w-full h-[50px] rounded shadow-drop-down-shadow font-medium text-xs md:text-sm`}>{text}</button>
    )
}

export default SelectButton;