import { Link, useParams } from "react-router-dom";

const ActivationSidebar = () => {
    const {screen: currentScreen} : {screen:string} = useParams();
    return(
        <aside className="w-1/4 xl:w-1/6 h-screen text-black px-6 fixed top-16 lg:top-20 left-0 py-12 space-y-12 hidden md:block" style={{background: 'linear-gradient(180deg, #008ADB 0%, #00A8B3 100%)'}}>
            <div className="px-2 2xl:px-10 space-y-10">
                <button className="text-white font-medium flex items-center space-x-2 text-sm">
                    <span>
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.18154 4.90923L6 8.7277L4.90923 9.81846L5.8542e-08 4.90923L4.90923 1.30073e-08L6 1.09077L2.18154 4.90923Z" fill="white"/>
                        </svg>
                    </span>
                    <Link to="/dashboard">
                        <span>Go back</span>
                    </Link>
                </button>
                <h4 className="text-white font-medium">Activate your MyKey account</h4>
                <ul className="text-white text-sm">
                    <li className="relative">
                        <div className="flex space-x-8 items-center">
                            <span className={`w-4 h-4 rounded-full border border-white inline-block absolute flex-none bg-white`}></span>
                            <span className="whitespace-nowrap font-medium flex-none">Get started</span>
                        </div>
                        <div className="pb-16 border-l-2 border-white relative left-[7px] top-[-2px]"></div>
                    </li>
                    <li className="relative top-[-4px]">
                        <div className="flex space-x-8 items-center">
                            <span className={`w-4 h-4 rounded-full border border-white inline-block absolute flex-none ${["company-information", 'billing-information','payment-details'].includes(currentScreen) ? 'bg-white' : ''}`}></span>
                            <span className="whitespace-nowrap font-medium flex-none">Company information</span>
                        </div>
                        <div className="pb-16 border-l-2 border-white relative left-[7px] top-[-2px]"></div>
                    </li>
                    <li className="relative top-[-8px]">
                        <div className="flex space-x-8 items-center">
                            <span className={`w-4 h-4 rounded-full border border-white inline-block absolute flex-none ${['billing-information','payment-details'].includes(currentScreen) ? 'bg-white' : ''}`}></span>
                            <span className="whitespace-nowrap font-medium flex-none">Billing information</span>
                        </div>
                        <div className="pb-16 border-l-2 border-white relative left-[7px] top-[-2px]"></div>
                    </li>
                    <li className="relative top-[-12px]">
                        <div className="flex space-x-4 items-center">
                            <span className={`w-4 h-4 rounded-full border border-white inline-block relative flex-none ${['payment-details'].includes(currentScreen) ? 'bg-white' : ''}`}/>
                            <span className="whitespace-nowrap font-medium flex-none">Payment details</span>
                        </div>
                        <div className="pb-16 border-l-2 border-white relative left-[7px] top-[-2px]"></div>
                    </li>
                    <li className="relative top-[-16px]">
                        <div className="flex space-x-4 items-center">
                            <span className={`w-4 h-4 rounded-full border border-white inline-block relative flex-none ${['activate-account'].includes(currentScreen) ? 'bg-white' : ''}`}/>
                            <span className="whitespace-nowrap font-medium flex-none">Activate Account</span>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default ActivationSidebar