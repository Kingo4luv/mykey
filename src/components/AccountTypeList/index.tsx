
interface AccountListProps{
    title: string,
    icon: string,
    description: string,
    selectedType: string,
    handleSelectedType: (title:string) => void
}

const AccountTypeList = ({title, icon, description, selectedType, handleSelectedType}: AccountListProps) => {

    const handleSelected = () => {
        handleSelectedType(title);
    }
    return(
        <li className={`w-[325px] space-y-4  rounded-lg p-5 h-80 cursor-pointer ${selectedType !== "" && selectedType === title.toLowerCase() ? 'border-2 border-blue':'border border-border-grey'}`} onClick={handleSelected}>
            <span className="bg-white h-[56px] w-[56px] rounded-full flex items-center justify-center shadow-drop-down-shadow">
                <img src={icon} alt="icons" />
            </span>
            <h3 className="font-bold text-black">{title}</h3>
            <p className="text-[14px] leading-[23.52px] text-grey">{description}</p>
        </li>
    )
}

export default AccountTypeList;