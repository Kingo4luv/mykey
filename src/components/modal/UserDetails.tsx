import { useState } from "react";
import ModalLayout from ".";
import UserOverview from "../dashboard/userdetails/Overview";
import PersonalDetails from "../dashboard/userdetails/PersonalDetails";
import VerificationAttempt from "../dashboard/userdetails/VerificationAttempt";


const screens = [
    {title: 'Overview', screen: <UserOverview />},
    {title: 'Data Point', screen: <PersonalDetails />},
    {title: 'Attempts', screen: <VerificationAttempt />},
    {title: 'Webhooks', screen: null},
]

const UserDetailsModal = ({closeModal}: {closeModal:() => void}) => {
    const [currentScreen, setCurrentScreen] = useState(screens[0]);
    const selectCurrentScreen = (screen: any) => {
        setCurrentScreen(screen)
    }
    return(
        <ModalLayout>
            <div className="max-w-7xl w-full h-full bg-white rounded flex flex-col md:flex-row py-1 md:py-4 relative overflow-y-auto">
                <button className="absolute top-3 md:top-6 right-3 md:right-6" onClick={closeModal}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6.2225L14.2225 0L16 1.7775L9.7775 8L16 14.2225L14.2225 16L8 9.7775L1.7775 16L0 14.2225L6.2225 8L0 1.7775L1.7775 0L8 6.2225Z" fill="#101010"/>
                    </svg>
                </button>
                <div className="max-w-md md:max-w-lg border-r-0 md:border-r py-6 md:py-12">
                    <ul className="w-full flex flex-row md:flex-col overflow-x-auto scrolling-wrapper">
                        {screens.map((screen, i) => {
                            return(
                                <li key={i} onClick={() => selectCurrentScreen(screen)} className="px-4 py-5 lg:px-12"><button className={` ${screen.title === currentScreen.title ? 'text-black':'text-[#999]'} font-medium text-left whitespace-nowrap `}>{screen.title}</button></li>
                            )
                        })}
                    </ul>
                </div>
                <div className="w-full h-full px-4 lg:px-0">
                    {currentScreen.screen}
                </div>
            </div>
        </ModalLayout>
        
    )
}

export default UserDetailsModal;