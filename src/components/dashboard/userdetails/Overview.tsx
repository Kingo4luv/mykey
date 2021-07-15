import Button from "../../Button"
import CheckCircle from "../CheckCircle"
import ProgressBar from "../ProgressBar"
import Hero from '../../../assets/img/hero.jpeg'
import License from '../../../assets/img/drivers-licence.png'
import MusicWave from '../../../assets/svg/music-wave.svg'

const UserOverview = () => {
    return(
        <>
            <div className="w-full py-2 md:py-12">
                        <div className="w-full flex flex-col md:flex-row">
                            <div className="w-full md:w-1/4 space-y-1">
                                <h3 className="text-6xl text-center text-hair font-medium">98<span className="text-2xl align-top ml-1 font-thin">%</span></h3>
                                <p className="text-sm text-center text-grey">Identity Score</p>
                            </div>
                            <div className="w-full md:w-3/4 h-full flex flex-col lg:flex-row mt-6 md:mt-0">
                                <div className="w-full lg:w-1/2 space-y-6 md:space-y-[56px] mt-6 md:mt-0">
                                    <div className="w-full space-y-6">
                                        <div className="flex items-center space-x-2">
                                            <h3 className="text-black font-medium">Passport ID Authenticity factor</h3>
                                            <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16ZM8 14.4C9.69739 14.4 11.3253 13.7257 12.5255 12.5255C13.7257 11.3253 14.4 9.69739 14.4 8C14.4 6.30261 13.7257 4.67475 12.5255 3.47452C11.3253 2.27428 9.69739 1.6 8 1.6C6.30261 1.6 4.67475 2.27428 3.47452 3.47452C2.27428 4.67475 1.6 6.30261 1.6 8C1.6 9.69739 2.27428 11.3253 3.47452 12.5255C4.67475 13.7257 6.30261 14.4 8 14.4ZM7.2 10.4H8.8V12H7.2V10.4ZM8.8 9.084V9.6H7.2V8.4C7.2 8.18783 7.28429 7.98434 7.43431 7.83431C7.58434 7.68429 7.78783 7.6 8 7.6C8.22726 7.59999 8.44985 7.53544 8.64186 7.41386C8.83387 7.29229 8.98741 7.11869 9.08462 6.91327C9.18182 6.70784 9.2187 6.47904 9.19095 6.25347C9.1632 6.02791 9.07196 5.81487 8.92787 5.63913C8.78377 5.46339 8.59273 5.33218 8.37698 5.26078C8.16122 5.18937 7.92963 5.18069 7.70914 5.23576C7.48865 5.29083 7.28833 5.40738 7.13149 5.57185C6.97465 5.73632 6.86774 5.94195 6.8232 6.1648L5.2536 5.8504C5.35091 5.36407 5.57561 4.9123 5.90474 4.54127C6.23387 4.17024 6.65561 3.89327 7.12687 3.73866C7.59813 3.58405 8.10199 3.55735 8.58695 3.66129C9.0719 3.76524 9.52056 3.99609 9.88706 4.33026C10.2535 4.66443 10.5247 5.08992 10.6729 5.56325C10.821 6.03658 10.8409 6.54076 10.7303 7.02425C10.6197 7.50774 10.3828 7.9532 10.0436 8.31509C9.70447 8.67698 9.27531 8.94233 8.8 9.084Z" fill="#5D5B5B"/>
                                            </svg>
                                            </span>
                                        </div>
                                        <div className="w-full">
                                            <ProgressBar percent="10" />
                                        </div>
                                    </div>
                                    <div className="w-full space-y-6">
                                        <div className="flex items-center space-x-2">
                                            <h3 className="text-black font-medium">Passport face match factor</h3>
                                            <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16ZM8 14.4C9.69739 14.4 11.3253 13.7257 12.5255 12.5255C13.7257 11.3253 14.4 9.69739 14.4 8C14.4 6.30261 13.7257 4.67475 12.5255 3.47452C11.3253 2.27428 9.69739 1.6 8 1.6C6.30261 1.6 4.67475 2.27428 3.47452 3.47452C2.27428 4.67475 1.6 6.30261 1.6 8C1.6 9.69739 2.27428 11.3253 3.47452 12.5255C4.67475 13.7257 6.30261 14.4 8 14.4ZM7.2 10.4H8.8V12H7.2V10.4ZM8.8 9.084V9.6H7.2V8.4C7.2 8.18783 7.28429 7.98434 7.43431 7.83431C7.58434 7.68429 7.78783 7.6 8 7.6C8.22726 7.59999 8.44985 7.53544 8.64186 7.41386C8.83387 7.29229 8.98741 7.11869 9.08462 6.91327C9.18182 6.70784 9.2187 6.47904 9.19095 6.25347C9.1632 6.02791 9.07196 5.81487 8.92787 5.63913C8.78377 5.46339 8.59273 5.33218 8.37698 5.26078C8.16122 5.18937 7.92963 5.18069 7.70914 5.23576C7.48865 5.29083 7.28833 5.40738 7.13149 5.57185C6.97465 5.73632 6.86774 5.94195 6.8232 6.1648L5.2536 5.8504C5.35091 5.36407 5.57561 4.9123 5.90474 4.54127C6.23387 4.17024 6.65561 3.89327 7.12687 3.73866C7.59813 3.58405 8.10199 3.55735 8.58695 3.66129C9.0719 3.76524 9.52056 3.99609 9.88706 4.33026C10.2535 4.66443 10.5247 5.08992 10.6729 5.56325C10.821 6.03658 10.8409 6.54076 10.7303 7.02425C10.6197 7.50774 10.3828 7.9532 10.0436 8.31509C9.70447 8.67698 9.27531 8.94233 8.8 9.084Z" fill="#5D5B5B"/>
                                            </svg>
                                            </span>
                                        </div>
                                        <div className="w-full">
                                            <ProgressBar percent="50" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 space-y-6 md:space-y-[56px] mt-6 lg:mt-0">
                                    <div className="w-full space-y-6">
                                        <div className="flex items-center space-x-2">
                                            <h3 className="text-black font-medium">Audio verification factor</h3>
                                            <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16ZM8 14.4C9.69739 14.4 11.3253 13.7257 12.5255 12.5255C13.7257 11.3253 14.4 9.69739 14.4 8C14.4 6.30261 13.7257 4.67475 12.5255 3.47452C11.3253 2.27428 9.69739 1.6 8 1.6C6.30261 1.6 4.67475 2.27428 3.47452 3.47452C2.27428 4.67475 1.6 6.30261 1.6 8C1.6 9.69739 2.27428 11.3253 3.47452 12.5255C4.67475 13.7257 6.30261 14.4 8 14.4ZM7.2 10.4H8.8V12H7.2V10.4ZM8.8 9.084V9.6H7.2V8.4C7.2 8.18783 7.28429 7.98434 7.43431 7.83431C7.58434 7.68429 7.78783 7.6 8 7.6C8.22726 7.59999 8.44985 7.53544 8.64186 7.41386C8.83387 7.29229 8.98741 7.11869 9.08462 6.91327C9.18182 6.70784 9.2187 6.47904 9.19095 6.25347C9.1632 6.02791 9.07196 5.81487 8.92787 5.63913C8.78377 5.46339 8.59273 5.33218 8.37698 5.26078C8.16122 5.18937 7.92963 5.18069 7.70914 5.23576C7.48865 5.29083 7.28833 5.40738 7.13149 5.57185C6.97465 5.73632 6.86774 5.94195 6.8232 6.1648L5.2536 5.8504C5.35091 5.36407 5.57561 4.9123 5.90474 4.54127C6.23387 4.17024 6.65561 3.89327 7.12687 3.73866C7.59813 3.58405 8.10199 3.55735 8.58695 3.66129C9.0719 3.76524 9.52056 3.99609 9.88706 4.33026C10.2535 4.66443 10.5247 5.08992 10.6729 5.56325C10.821 6.03658 10.8409 6.54076 10.7303 7.02425C10.6197 7.50774 10.3828 7.9532 10.0436 8.31509C9.70447 8.67698 9.27531 8.94233 8.8 9.084Z" fill="#5D5B5B"/>
                                            </svg>
                                            </span>
                                        </div>
                                        <div className="w-full">
                                            <ProgressBar percent="40" />
                                        </div>
                                    </div>
                                    <div className="w-full space-y-6">
                                        <div className="flex items-center space-x-2">
                                            <h3 className="text-black font-medium">Passport ID Authenticity factor</h3>
                                            <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16ZM8 14.4C9.69739 14.4 11.3253 13.7257 12.5255 12.5255C13.7257 11.3253 14.4 9.69739 14.4 8C14.4 6.30261 13.7257 4.67475 12.5255 3.47452C11.3253 2.27428 9.69739 1.6 8 1.6C6.30261 1.6 4.67475 2.27428 3.47452 3.47452C2.27428 4.67475 1.6 6.30261 1.6 8C1.6 9.69739 2.27428 11.3253 3.47452 12.5255C4.67475 13.7257 6.30261 14.4 8 14.4ZM7.2 10.4H8.8V12H7.2V10.4ZM8.8 9.084V9.6H7.2V8.4C7.2 8.18783 7.28429 7.98434 7.43431 7.83431C7.58434 7.68429 7.78783 7.6 8 7.6C8.22726 7.59999 8.44985 7.53544 8.64186 7.41386C8.83387 7.29229 8.98741 7.11869 9.08462 6.91327C9.18182 6.70784 9.2187 6.47904 9.19095 6.25347C9.1632 6.02791 9.07196 5.81487 8.92787 5.63913C8.78377 5.46339 8.59273 5.33218 8.37698 5.26078C8.16122 5.18937 7.92963 5.18069 7.70914 5.23576C7.48865 5.29083 7.28833 5.40738 7.13149 5.57185C6.97465 5.73632 6.86774 5.94195 6.8232 6.1648L5.2536 5.8504C5.35091 5.36407 5.57561 4.9123 5.90474 4.54127C6.23387 4.17024 6.65561 3.89327 7.12687 3.73866C7.59813 3.58405 8.10199 3.55735 8.58695 3.66129C9.0719 3.76524 9.52056 3.99609 9.88706 4.33026C10.2535 4.66443 10.5247 5.08992 10.6729 5.56325C10.821 6.03658 10.8409 6.54076 10.7303 7.02425C10.6197 7.50774 10.3828 7.9532 10.0436 8.31509C9.70447 8.67698 9.27531 8.94233 8.8 9.084Z" fill="#5D5B5B"/>
                                            </svg>
                                            </span>
                                        </div>
                                        <div className="w-full">
                                            <ProgressBar percent="70" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-2 lg:px-20 mt-8 md:mt-12 flex flex-col lg:flex-row justify-between">
                            <div className="w-full md:w-1/5 flex space-x-3 items-center">
                                <span>
                                    <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.25" y="0.25" width="33.1" height="23.5" rx="1.75" fill="white" stroke="#F5F5F5" stroke-width="0.5"/>
                                        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="24">
                                        <rect x="0.25" y="0.25" width="33.1" height="23.5" rx="1.75" fill="white" stroke="white" stroke-width="0.5"/>
                                        </mask>
                                        <g mask="url(#mask0)">
                                        <rect x="22.3999" width="11.2" height="24" fill="#189B62"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24H11.2V0H0V24Z" fill="#189B62"/>
                                        </g>
                                    </svg>
                                </span>
                                <p className="text-2xl font-medium text-black whitespace-nowrap">Nigeria</p>
                            </div>
                            <div className="w-full lg:w-4/5 grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 lg:mt-0">
                                <div className="flex space-x-3 items-center">
                                    <CheckCircle icon="valid" />
                                    <p className="text-sm font-medium text-black whitespace-nowrap">Email address</p>
                                </div>
                                <div className="flex space-x-3 items-center">
                                    <CheckCircle icon="valid" />
                                    <p className="text-sm font-medium text-black whitespace-nowrap">Age over 18</p>
                                </div>
                                <div className="flex space-x-3 items-center">
                                    <CheckCircle icon="invalid" />
                                    <p className="text-sm font-medium text-black whitespace-nowrap">Phone number</p>
                                </div>
                                <div className="flex space-x-3 items-center">
                                    <CheckCircle icon="valid" />
                                    <p className="text-sm font-medium text-black whitespace-nowrap">Home address</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-2 md:px-12 mt-6 lg:mt-0">
                        <div className="w-full h-full space-y-4">
                            <h3 className="text-base text-grey font-medium">Selfie Video</h3>
                            <img src={Hero} alt="" className="object-contain"/>
                        </div>
                        <div className="w-full h-full space-y-4">
                            <h3 className="text-base text-grey font-medium">Driver's license</h3>
                            <div className="bg-hair h-52 md:h-72 flex items-center justify-center px-4 md:px-0">
                                <img src={License} alt="" className="object-contain  object-center"/>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-5xl mx-auto mt-10 px-2 md:px-12 space-y-6 pb-6">
                        <h3 className="text-base text-grey font-medium">Selfie Video</h3>
                        <div className="flex flex-col md:flex-row justify-between space-y-12 md:space-y-0">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <button>
                                        <img src={MusicWave} alt="" />
                                    </button>
                                    <span className="text-grey font-medium">00:40</span>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <div className="w-1/2 md:w-40"><Button text="Reject" bordered={true} onClick={() => {}} /></div>
                                <div className="w-1/2 md:w-40"><Button text="Approve" onClick={() => {}} /></div>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default UserOverview