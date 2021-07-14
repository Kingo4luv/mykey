import { useState } from "react"
import Button from "../Button"
import FilterListBox from "../dashboard/FilterListBox"

const ModalLayout = ({toggleFilter}: {toggleFilter: () => void}) => {
    const [selectedType, setSelectedType] = useState("all time")
    const handleSelectedType = (title:string) => {
        setSelectedType(title.toLowerCase());
    }
    return(
        <div className="w-full fixed inset-0 max-h-screen nin-h-screen h-screen bg-black bg-opacity-50">
            <div className="w-full h-full flex justify-center items-center px-2">
                <div className="max-w-md bg-white rounded shadow px-4 md:px-6 py-6">
                    <div className="header flex items-center justify-between">
                        <h3 className="font-medium text-black">Add Filters</h3>
                        <button onClick={toggleFilter}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 6.2225L14.2225 0L16 1.7775L9.7775 8L16 14.2225L14.2225 16L8 9.7775L1.7775 16L0 14.2225L6.2225 8L0 1.7775L1.7775 0L8 6.2225Z" fill="#101010"/>
                            </svg>
                        </button>
                    </div>
                    <div className="body mt-12 px-2 md:px-4 space-y-12 pb-12">
                        <h3 className="font-medium text-black">Time Span</h3>
                        <ul className="grid grid-cols-3 gap-4">
                            <FilterListBox title="All time" selectedType={selectedType} handleSelectedType={handleSelectedType} />
                            <FilterListBox title="Today" selectedType={selectedType} handleSelectedType={handleSelectedType} />
                            <FilterListBox title="Yesterday" selectedType={selectedType} handleSelectedType={handleSelectedType} />
                            <FilterListBox title="1 Week" selectedType={selectedType} handleSelectedType={handleSelectedType} />
                            <FilterListBox title="1 Month" selectedType={selectedType} handleSelectedType={handleSelectedType} />
                            <FilterListBox title="1 year" selectedType={selectedType} handleSelectedType={handleSelectedType} />
                        </ul>
                        <Button text="Apply" onClick={() => {}} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ModalLayout;