import { useState } from "react";
import Button from "../../Button";
import FundWalletModal from "../../modal/Fundwallet";
import FilterDropdown from "../headless/FilterDropdown";

const data = ["All time","Today","Last 7 days","Last 30 days","This month","This Year"]

const OverviewSummary = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleFilter = () => {
        setIsOpen(!isOpen);
    }
    return(
        <>
            {isOpen && <FundWalletModal toggleFilter={toggleFilter} />}
            <div className="mb-0 md:mb-6 lg:mb-0 flex flex-col md:flex-row justify-between gap-y-4">
                <h3 className="text-base md:text-lg text-hair">Dashboard Overview</h3>
                <div className="flex space-x-5 justify-between items-center text-black">
                    <h4 className="whitespace-nowrap">Filter by:</h4>
                    <FilterDropdown data={data}/>
                </div>
            </div>
            <div className="w-full bg-white rounded border border-[#E9E9E9] flex flex-col md:flex-row">
                <div className="w-full md:w-4/6 grid grid-cols-1 md:grid-cols-2 gap-y-8 border-r border-[#E9E9E9] p-6 lg:p-12">
                    <dl className="space-y-6 md:space-y-12">
                        <dt className="flex space-x-3 items-center justify-center md:justify-start">
                            <span className="text-sm text-grey">Total checks</span>
                            <span>
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 14C10.3137 14 13 11.3137 13 8C13 4.68629 10.3137 2 7 2C3.68629 2 1 4.68629 1 8C1 11.3137 3.68629 14 7 14Z" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7 10.4V8" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7 5.59998H7.00667" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </dt>
                        <dd className="font-medium text-2xl text-center md:text-left">0</dd>
                    </dl>
                    <dl className="space-y-6 md:space-y-12">
                        <dt className="flex space-x-3 items-center justify-center md:justify-start">
                            <span className="text-sm text-grey">Total amount of users</span>
                            <span>
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 14C10.3137 14 13 11.3137 13 8C13 4.68629 10.3137 2 7 2C3.68629 2 1 4.68629 1 8C1 11.3137 3.68629 14 7 14Z" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7 10.4V8" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7 5.59998H7.00667" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </dt>
                        <dd className="font-medium text-2xl text-center md:text-left">0</dd>
                    </dl>
                </div>
                <div className="w-full md:w-2/6 py-6 md:py-4 px-4 md:px-8 flex flex-col gap-6 justify-between border-t border-[#EBEBEB]">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                        <h3 className="font-medium text-hair">NGN (N60/call)</h3>
                        <div className="w-40"><Button onClick={toggleFilter} text="+ Fund wallet" /></div>
                    </div>
                    <dl className="space-y-2 pb-2 md:text-left text-center">
                        <dt className="text-grey text-sm"> Wallet balance</dt>
                        <dd className="font-medium text-2xl">N50,000.00</dd>
                    </dl>
                </div>
            </div>
        </>
    )
}

export default OverviewSummary;