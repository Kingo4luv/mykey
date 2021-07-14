interface ListProps{
    title: string,
    selectedType: string,
    handleSelectedType: (title:string) => void
}

const FilterListBox = ({title, selectedType, handleSelectedType}: ListProps) => {

    const handleSelected = () => {
        handleSelectedType(title);
    }
    return(
        <li className={`py-3 space-y-4  rounded px-2  md:px-6 cursor-pointer ${selectedType !== "" && selectedType === title.toLowerCase() ? 'border-2 border-blue':'border border-border-grey'}`} onClick={handleSelected}>
            <p className="text-black text-sm font-medium  text-center">{title}</p>
        </li>
    )
}

export default FilterListBox;