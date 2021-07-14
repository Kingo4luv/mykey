import Dropdown from "../headless/Dropdown"
import logo from '../../../assets/svg/logo.svg'
const Nav = () => {
    return(
        <nav className="w-full h-16  lg:h-24 bg-hair fixed top-0 right-0 z-10 flex justify-between items-center px-4 lg:px-16">
                <div className="flex items-center space-x-2 lg:space-x-12">
                    <img src={logo} alt="logo"/>
                    <div className="flex space-x-2 md:space-x-4 items-center">
                        <div className="text-white space-y-0 md:space-y-1">
                            <h3 className="text-sm">Developer</h3>
                            <p className="text-xs">Tahj Bank</p>
                        </div>
                        <div className="space-y-[2px] mt-1">
                            <span className="block">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.191 2.828L2.363 5.657L0.947998 4.243L5.191 0L9.434 4.243L8.019 5.657L5.191 2.828Z" fill="white"/>
                                </svg>
                            </span>
                            <span className="block">
                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.191 6.31398L0.947998 2.07098L2.363 0.656982L5.191 3.48598L8.019 0.656982L9.434 2.07098L5.191 6.31398Z" fill="white"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-6 md:space-x-12">
                    <div>
                        <span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6266 11.5128L16 14.8855L14.8855 16L11.5128 12.6266C10.2579 13.6325 8.69706 14.1797 7.08871 14.1774C3.17574 14.1774 0 11.0017 0 7.08871C0 3.17574 3.17574 0 7.08871 0C11.0017 0 14.1774 3.17574 14.1774 7.08871C14.1797 8.69706 13.6325 10.2579 12.6266 11.5128ZM11.0466 10.9284C12.0462 9.90047 12.6044 8.52254 12.6021 7.08871C12.6021 4.04214 10.1345 1.57527 7.08871 1.57527C4.04214 1.57527 1.57527 4.04214 1.57527 7.08871C1.57527 10.1345 4.04214 12.6021 7.08871 12.6021C8.52254 12.6044 9.90047 12.0462 10.9284 11.0466L11.0466 10.9284Z" fill="white"/>
                            </svg>
                        </span>
                    </div>
                    <div className="flex items-center">
                        <span>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#66D9FF"/>
                                <path d="M15.9282 15.55C14.0672 15.55 12.5532 14.036 12.5532 12.175C12.5532 10.314 14.0672 8.79999 15.9282 8.79999C17.7892 8.79999 19.3032 10.314 19.3032 12.175C19.3032 14.036 17.7892 15.55 15.9282 15.55Z" fill="#101010"/>
                                <path d="M21.8345 23.2H10.022C9.78899 23.2 9.6001 23.0111 9.6001 22.7781C9.6001 19.2856 12.4255 16.3937 15.9282 16.3937C19.4319 16.3937 22.2563 19.2866 22.2563 22.7781C22.2563 23.0111 22.0675 23.2 21.8345 23.2Z" fill="#101010"/>
                            </svg>
                        </span>
                         <Dropdown />
                    </div>
                </div>
            </nav>
    )
}

export default Nav