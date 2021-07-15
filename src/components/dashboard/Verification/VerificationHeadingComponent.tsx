import { Transition } from "@headlessui/react"
import { useState } from "react"
import FilterModal from "../../modal/Filter"

const VerificationHeadingComponent = () => {
    const [filterIsOpen, setFilterIsOpen] = useState(false)
    const toggleFilter = () => {
        setFilterIsOpen(!filterIsOpen)
    }
    return(
        <>
            <div className="flex flex-col-reverse md:flex-col lg:flex-row justify-start md:justify-between mt-12">
                <div className="mb-0 md:mb-6 lg:mb-0">
                    <h3 className="text-base md:text-2xl text-hair">MyKey (Digital Identity Verification)</h3>
                    <p className="text-[14px] leading-[23.52px] mt-1 text-grey md:text-hair">A list of customers using MyKey app for Identity Verification</p>
                </div>
                <div className="flex space-x-5 items-center justify-between mb-6 md:mb-0">
                    <div className="relative">
                        <input className="border border-[#E9E9E9] rounded w-52 md:w-[270px] h-10 bg-[#F8F8F8] px-2 text-sm placeholder-grey" placeholder="Enter name or keyword" />
                        <span className="absolute right-0 top-0 h-full p-2 flex items-center">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.46992 8.63464L12 11.1641L11.1641 12L8.63464 9.46992C7.69346 10.2244 6.52279 10.6348 5.31653 10.6331C2.38181 10.6331 0 8.25126 0 5.31653C0 2.38181 2.38181 0 5.31653 0C8.25126 0 10.6331 2.38181 10.6331 5.31653C10.6348 6.52279 10.2244 7.69346 9.46992 8.63464ZM8.28493 8.19632C9.03463 7.42535 9.4533 6.39191 9.45161 5.31653C9.45161 3.0316 7.60087 1.18145 5.31653 1.18145C3.0316 1.18145 1.18145 3.0316 1.18145 5.31653C1.18145 7.60087 3.0316 9.45161 5.31653 9.45161C6.39191 9.4533 7.42535 9.03463 8.19632 8.28493L8.28493 8.19632Z" fill="#101010"/>
                            </svg>
                        </span>
                    </div>
                    <button className="px-4 md:px-6 border border-black rounded flex items-center h-10 space-x-2 text-hair" onClick={toggleFilter}>
                        <span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.75 0V1.5H13L9.25 7.125V13.5H4.75V7.125L1 1.5H0.25V0H13.75ZM2.803 1.5L6.25 6.6705V12H7.75V6.6705L11.197 1.5H2.803Z" fill="black"/>
                            </svg>
                        </span>
                        <span className="text-sm">Filter</span>
                    </button>
                </div>
            </div>
            <div className="mt-8 flex space-x-6 font-medium">
                <h4>Unreviewed(0)</h4>
                <h4>Reviewed(0)</h4>
            </div>
            <Transition
            show={filterIsOpen}
            enter="transition duration-300 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duration-300 ease-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
                <FilterModal toggleFilter={toggleFilter} />
            </Transition>
        </>
    )
}

export default VerificationHeadingComponent;