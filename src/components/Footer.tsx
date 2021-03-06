import { Link } from 'react-router-dom'
import logo from '../assets/svg/logo.svg'

const Footer = () => {
    return(
        <footer className="w-full bg-hair py-6 text-white px-4 sm:px-6 z-0">
           <div className="py-12 lg:py-24 w-full flex flex-col md:flex-row max-w-screen-2xl mx-auto">
                <div className="w-full md:w-1/5">
                    <a href="/" className="flex items-center space-x-2 ">
                        <img src={logo} alt="logo"/>
                        <span className="font-medium text-white">MyIdentiKey</span>
                    </a>
                </div>
                <div className="w-full md:w-4/5 grid grid-cols-2  md:grid-cols-4 gap-10 lg:gap-20 mt-8 md:mt-0">
                    <div className="space-y-6 mt-3">
                        <h3 className="text-white font-bold">For Business</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/business/identity-verification" className="text-gray-300 text-sm font-thin">
                                    Identity Verification
                                </Link>
                            </li>
                            <li>
                                <Link to="/business/digital-identity" className="text-gray-300 text-sm font-thin">
                                    Digital Identity
                                </Link>
                            </li>
                            <li>
                                <Link to="/business/password-free" className="text-gray-300 text-sm font-thin">
                                Password free login
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-6 mt-3">
                        <h3 className="text-white font-bold">For Individuals</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/individual/what-is-myIdentikey" className="text-gray-300 text-sm font-thin">
                                    What is MyIdentiKey
                                </Link>
                            </li>
                            <li>
                                <Link to="/individual/what-is-myidentikey" className="text-gray-300 text-sm font-thin">
                                    Download MyIdentity
                                </Link>
                            </li>
                            <li>
                                <Link to="/business/what-is-myidentikey" className="text-gray-300 text-sm font-thin">
                                Registration Demo
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-6 mt-3">
                        <h3 className="text-white font-bold">Use cases</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/usecases/#financial-services" className="text-gray-300 text-sm font-thin">
                                    Financial Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/usecases/#health-care" className="text-gray-300 text-sm font-thin">
                                    Healthcare
                                </Link>
                            </li>
                            <li>
                                <Link to="/usecases/#legal-services" className="text-gray-300 text-sm font-thin">
                                    Legal and Professional services
                                </Link>
                            </li>
                            <li>
                                <Link to="/usecases/#retail" className="text-gray-300 text-sm font-thin">
                                    Retail
                                </Link>
                            </li>
                            <li>
                                <Link to="/usecases/#travel-and-hospitality" className="text-gray-300 text-sm font-thin">
                                    Travel and Hospitality
                                </Link>
                            </li>
                            <li>
                                <Link to="/usecases/#sharing-economy" className="text-gray-300 text-sm font-thin">
                                    Sharing Economy
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="space-y-6 mt-3">
                        <h3 className="text-white font-bold">About Us</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="#" className="text-gray-300 text-sm font-thin">
                                    Company
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-300 text-sm font-thin">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-300 text-sm font-thin">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-300 text-sm font-thin">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-300 text-sm font-thin">
                                    Security
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-300 text-sm font-thin">
                                    Legal & Privacy
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
            </div>
            </div>
           <div className="mx-auto max-w-screen-2xl py-6 md:py-0">
               <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                   <p className="text-sm text-gray-200 font-light capitalize">?? Reef financial solutions Ltd</p>
                    <ul className="flex space-x-2 sm:space-x-5 mb-4 md:mb-0">
                      <li>
                          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 12.1596C15.2405 12.1596 14.4981 12.3848 13.8666 12.8068C13.2351 13.2287 12.7429 13.8284 12.4523 14.5301C12.1617 15.2318 12.0856 16.0039 12.2338 16.7487C12.3819 17.4936 12.7477 18.1779 13.2847 18.7149C13.8217 19.2519 14.506 19.6177 15.2508 19.7658C15.9957 19.914 16.7678 19.8379 17.4695 19.5473C18.1712 19.2567 18.7709 18.7645 19.1928 18.133C19.6148 17.5015 19.84 16.7591 19.84 15.9996C19.84 14.9812 19.4354 14.0045 18.7153 13.2843C17.9951 12.5642 17.0184 12.1596 16 12.1596ZM16 18.5596C15.4937 18.5596 14.9987 18.4095 14.5777 18.1282C14.1567 17.8469 13.8286 17.4471 13.6349 16.9793C13.4411 16.5115 13.3904 15.9968 13.4892 15.5002C13.588 15.0036 13.8318 14.5474 14.1898 14.1894C14.5478 13.8314 15.004 13.5876 15.5006 13.4888C15.9972 13.39 16.5119 13.4407 16.9797 13.6345C17.4474 13.8282 17.8473 14.1564 18.1286 14.5773C18.4099 14.9983 18.56 15.4933 18.56 15.9996C18.56 16.6786 18.2903 17.3297 17.8102 17.8098C17.3301 18.2899 16.6789 18.5596 16 18.5596ZM20.8704 10.3612C20.7122 10.3612 20.5575 10.4081 20.4259 10.496C20.2944 10.5839 20.1918 10.7089 20.1313 10.8551C20.0707 11.0012 20.0549 11.1621 20.0858 11.3173C20.1166 11.4725 20.1928 11.615 20.3047 11.7269C20.4166 11.8388 20.5591 11.915 20.7143 11.9458C20.8695 11.9767 21.0304 11.9609 21.1765 11.9003C21.3227 11.8398 21.4477 11.7372 21.5356 11.6057C21.6235 11.4741 21.6704 11.3194 21.6704 11.1612C21.6712 11.0559 21.6511 10.9515 21.6112 10.854C21.5713 10.7566 21.5124 10.6681 21.438 10.5936C21.3635 10.5192 21.275 10.4603 21.1775 10.4204C21.0801 10.3805 20.9757 10.3604 20.8704 10.3612ZM26.88 5.1196C25.0927 3.33851 22.8941 2.02516 20.4787 1.29564C18.0632 0.566115 15.5052 0.442892 13.0308 0.936861C10.5563 1.43083 8.24173 2.52678 6.2915 4.12783C4.34128 5.72888 2.81551 7.78572 1.84907 10.1165C0.882636 12.4474 0.50529 14.9804 0.750391 17.4917C0.995493 20.003 1.85549 22.4152 3.25437 24.5152C4.65325 26.6152 6.54793 28.3382 8.77092 29.5319C10.9939 30.7257 13.4768 31.3534 16 31.3596C19.0434 31.3671 22.0204 30.4703 24.5533 28.783C27.0862 27.0958 29.0608 24.6941 30.2264 21.8828C31.3921 19.0714 31.6963 15.9772 31.1005 12.9927C30.5047 10.0081 29.0358 7.26787 26.88 5.1196ZM23.68 20.0636C23.67 21.0195 23.2858 21.9335 22.6098 22.6095C21.9339 23.2854 21.0199 23.6696 20.064 23.6796H11.9424C10.9859 23.6696 10.0712 23.2857 9.39424 22.6099C8.71724 21.9341 8.33165 21.0201 8.31999 20.0636V11.942C8.32835 10.9839 8.71268 10.0673 9.39021 9.38981C10.0677 8.71228 10.9843 8.32796 11.9424 8.3196H20.064C21.022 8.32632 21.9389 8.71033 22.6157 9.38839C23.2926 10.0665 23.675 10.9839 23.68 11.942V20.0636Z" fill="white"/>
                          </svg>
                      </li>
                      <li>
                          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M26.88 5.12023C24.3719 2.60343 21.0688 1.034 17.5334 0.679294C13.998 0.324584 10.449 1.20653 7.49092 3.1749C4.53282 5.14327 2.34863 8.0763 1.3104 11.4744C0.272173 14.8724 0.444135 18.5254 1.79699 21.8109C3.14985 25.0964 5.59992 27.8113 8.72985 29.493C11.8598 31.1748 15.476 31.7195 18.9624 31.0342C22.4488 30.3489 25.5899 28.4761 27.8504 25.7349C30.111 22.9936 31.3513 19.5534 31.36 16.0002C31.365 13.9813 30.9718 11.9811 30.2031 10.1142C29.4344 8.24735 28.3052 6.55032 26.88 5.12023ZM22.24 12.8578V13.2674C22.242 13.9133 22.1711 14.5574 22.0288 15.1874C21.5942 17.2276 20.4615 19.0522 18.8259 20.3467C17.1902 21.6411 15.1542 22.3244 13.0688 22.2786C11.3229 22.2803 9.61211 21.7877 8.1344 20.8578C8.39162 20.8857 8.65008 20.9007 8.9088 20.9026C10.3515 20.9048 11.754 20.4275 12.896 19.5458C12.2292 19.5317 11.5831 19.312 11.0458 18.9168C10.5086 18.5216 10.1065 17.9702 9.8944 17.3378C10.0916 17.3841 10.2934 17.4077 10.496 17.4082C10.7928 17.4072 11.088 17.3641 11.3728 17.2802C10.8466 17.1777 10.3546 16.9447 9.942 16.6025C9.52937 16.2603 9.2093 15.8199 9.0112 15.3218C8.86099 14.9609 8.78482 14.5735 8.7872 14.1826V14.1442C9.23357 14.388 9.73159 14.5218 10.24 14.5346C9.80248 14.2476 9.44305 13.8564 9.19395 13.3962C8.94486 12.936 8.8139 12.4211 8.8128 11.8978C8.81961 11.3374 8.97177 10.7883 9.2544 10.3042C10.0672 11.2898 11.078 12.0937 12.2213 12.6637C13.3646 13.2337 14.6149 13.5571 15.8912 13.613C15.8325 13.3763 15.8003 13.1337 15.7952 12.8898C15.8089 12.2496 16.0125 11.6279 16.3802 11.1036C16.7479 10.5792 17.263 10.176 17.8602 9.94488C18.4574 9.7138 19.1099 9.66535 19.7347 9.80567C20.3595 9.946 20.9285 10.2688 21.3696 10.733C22.0904 10.5898 22.7824 10.3282 23.4176 9.95863C23.1741 10.6987 22.6689 11.3245 21.9968 11.7186C22.6322 11.6389 23.2529 11.4687 23.84 11.213C23.4082 11.8516 22.8664 12.4085 22.24 12.8578Z" fill="white"/>
                          </svg>
                      </li>
                      <li>
                          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="16" r="16" fill="white"/>
                          <path d="M12.4133 22.6175C12.4133 22.8803 12.2003 23.0934 11.9374 23.0934H9.91162C9.64878 23.0934 9.43572 22.8803 9.43572 22.6175V14.1254C9.43572 13.8626 9.64878 13.6495 9.91162 13.6495H11.9374C12.2003 13.6495 12.4133 13.8626 12.4133 14.1254V22.6175ZM10.9245 12.849C9.86165 12.849 9 11.9874 9 10.9245C9 9.86165 9.86165 9 10.9245 9C11.9874 9 12.849 9.86165 12.849 10.9245C12.849 11.9874 11.9874 12.849 10.9245 12.849ZM23 22.6558C23 22.8975 22.8041 23.0934 22.5625 23.0934H20.3886C20.147 23.0934 19.9511 22.8975 19.9511 22.6558V18.6726C19.9511 18.0784 20.1254 16.0687 18.3982 16.0687C17.0585 16.0687 16.7867 17.4442 16.7322 18.0616V22.6558C16.7322 22.8975 16.5363 23.0934 16.2946 23.0934H14.1921C13.9505 23.0934 13.7546 22.8975 13.7546 22.6558V14.0871C13.7546 13.8455 13.9505 13.6495 14.1921 13.6495H16.2946C16.5362 13.6495 16.7322 13.8455 16.7322 14.0871V14.828C17.2289 14.0825 17.9672 13.507 19.5391 13.507C23.02 13.507 23 16.759 23 18.5458V22.6558Z" fill="#191919"/>
                          </svg>
                      </li>
                    </ul>
               </div>
           </div>
      </footer>
    )
}

export default Footer;