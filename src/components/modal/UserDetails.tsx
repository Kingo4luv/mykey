import { useState } from "react";
import ModalLayout from ".";
import UserOverview from "../dashboard/userdetails/Overview";
import PersonalDetails from "../dashboard/userdetails/PersonalDetails";
import VerificationAttempt from "../dashboard/userdetails/VerificationAttempt";


const screens = [
    {title: 'Overview', screen: <UserOverview />},
    {title: 'Data Point', screen: <PersonalDetails />},
    {title: 'History', screen: <VerificationAttempt />},
]

const UserDetailsModal = ({closeModal}: {closeModal:() => void}) => {
    const [currentScreen, setCurrentScreen] = useState(screens[0]);
    const selectCurrentScreen = (screen: any) => {
        setCurrentScreen(screen)
    }
    return(
        <ModalLayout>
            <div className="max-w-7xl w-full h-full bg-white rounded flex flex-col md:flex-row relative overflow-y-auto">
                <button className="absolute top-3 md:top-6 right-3 md:right-6" onClick={closeModal}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6.2225L14.2225 0L16 1.7775L9.7775 8L16 14.2225L14.2225 16L8 9.7775L1.7775 16L0 14.2225L6.2225 8L0 1.7775L1.7775 0L8 6.2225Z" fill="#101010"/>
                    </svg>
                </button>
                <div className="max-w-md sm:max-w-full md:w-1/4 border-r-0 md:border-r py-2 md:py-6 bg-[#FAFAFA] md:bg-white">
                    <div className="px-4 py-5 lg:px-10 space-y-10 md:space-y-12 border-b">
                        <button className="flex space-x-5 items-center font-medium text-sm" onClick={closeModal}>
                            <span>
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.18154 4.90923L6 8.7277L4.90923 9.81846L5.8542e-08 4.90923L4.90923 1.30073e-08L6 1.09077L2.18154 4.90923Z" fill="#292929"/>
                                </svg>
                            </span>
                            <span>Back to list</span>
                        </button>
                        <div className="space-y-3">
                            <h3 className="text-lg font-medium">Wole Majekodunmi</h3>
                            <p className="text-sm text-black">ID: 12345678</p>
                        </div>
                    </div>
                    <div className="px-4 block md:hidden w-full">
                        <div className="w-full border-b py-6 md:py-12 flex flex-col md:flex-row gap-y-5 items-start md:items-center justify-between">
                            <dl className="flex space-x-2">
                                <dt className="text-sm font-medium">Last updated:</dt>
                                <dt className="text-sm">May 07, 16:31:19</dt>
                            </dl>
                            <dl className="flex space-x-2 items-center">
                                <dt className="text-sm font-medium">Check status:</dt>
                                <dt className="text-sm leading-[20.72px] bg-[#3DB302] text-white px-4 py-[6px] rounded font-medium">Approved</dt>
                            </dl>
                        </div>
                    </div>
                    <ul className="w-full flex flex-row md:flex-col overflow-x-auto scrolling-wrapper">
                        {screens.map((screen, i) => {
                            return(
                                <li key={i} onClick={() => selectCurrentScreen(screen)} className="px-4 py-5 lg:px-10"><button className={` ${screen.title === currentScreen.title ? 'font-medium':'font-thin'} text-left whitespace-nowrap text-sm md:text-base`}>{screen.title}</button></li>
                            )
                        })}
                    </ul>
                </div>
                <div className="w-full h-full px-4 lg:px-0 bg-[#FAFAFA]">
                    <div className="px-12 hidden md:block">
                        <div className="w-full border-b py-12 flex items-center justify-between">
                            <dl className="flex space-x-2">
                                <dt className="text-sm font-medium">Last updated:</dt>
                                <dt className="text-sm">May 07, 16:31:19</dt>
                            </dl>
                            <dl className="flex space-x-2 items-center">
                                <dt className="text-sm font-medium">Check status:</dt>
                                <dt className="text-sm leading-[20.72px] bg-[#3DB302] text-white px-4 py-[6px] rounded font-medium">Approved</dt>
                            </dl>
                        </div>
                    </div>
                    {currentScreen.screen}
                </div>
            </div>
        </ModalLayout>
        
    )
}

export default UserDetailsModal;