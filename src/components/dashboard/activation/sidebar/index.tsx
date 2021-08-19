import {useParams } from "react-router-dom";

const ActivationSidebar = () => {
    const {screen: currentScreen} : {screen:string} = useParams();
    return(
        <aside className="w-full md:w-1/3 lg:w-1/4 xl:w-1/6 h-auto md:h-screen text-black px-2 md:px-6 pt-16 pb-2 md:py-24 space-y-12  md:block border-l bg-white">
            <div className="px-2 2xl:px-6 space-y-10">
                <h4 className="text-black font-medium mt-6">Activate Business</h4>
                <ul className="text-black text-sm border-b-0 md:border-l-2 space-y-0 md:space-y-6 flex flex-row md:flex-row flex-wrap justify-around md:justify-start gap-y-2">
                    <li className={`px-0 md:px-4 py-1 relative whitespace-nowrap ${currentScreen === 'get-started' ? 'border-b-2 md:border-b-0 md:border-l-[3px] border-blue  left-[-2px] font-medium text-black': 'text-grey'} `}>
                       Get started
                    </li>
                    <li className={`px-0 md:px-4 py-1 relative whitespace-nowrap ${currentScreen === 'use-cases' ? 'border-b-2 md:border-b-0 md:border-l-[3px] border-blue  left-[-2px] font-medium text-black': 'text-grey'} `}>
                        Use cases
                    </li>
                    <li className={`px-0 md:px-4 py-1 relative whitespace-nowrap ${currentScreen === 'company-information' ? 'border-b-2 md:border-b-0 md:border-l-[3px] border-blue  left-[-2px] font-medium text-black': 'text-grey'} `}>
                       Company information
                    </li>
                    <li className={`px-0 md:px-4 py-1 relative whitespace-nowrap ${currentScreen === 'billing' ? 'border-b-2 md:border-b-0 md:border-l-[3px] border-blue  left-[-2px] font-medium text-black': 'text-grey'} `}>
                        Billing
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default ActivationSidebar