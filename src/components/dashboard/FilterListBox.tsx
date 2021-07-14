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
        <li className={`py-3 space-y-4  rounded-lg px-2  md:px-6 cursor-pointer ${selectedType !== "" && selectedType === title.toLowerCase() ? 'border border-blue text-blue':'border border-border-grey text-black'}`} onClick={handleSelected}>
            <p className="text-sm font-medium  text-center">{title}</p>
        </li>
    )
}

export default FilterListBox;