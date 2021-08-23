import { Link } from "react-router-dom"
import logo from '../../assets/svg/logo.svg'
import IdentityVerification from '../../assets/svg/identity-verification.svg'
import IdentityVerificationMobile from '../../assets/svg/identity-verification-mobile.svg'
import DigitalIdentity from '../../assets/svg/digital-identity.svg'
import DigitalIdentityMobile from '../../assets/svg/digital-identity-mobile.svg'
import PasswordFree from '../../assets/svg/password-free.svg'
import PasswordFreeMobile from '../../assets/svg/password-free-mobile.svg'
import Facial from '../../assets/img/facial.jpeg'
import HalfPhone from '../../assets/svg/half-phone.svg'
import RegistrationDemo from '../../assets/svg/registration-demo.svg'
import NavigationLink from "./Link"
import MobileNav from "./mobile"
import { useState } from "react"
import { Transition } from "@headlessui/react"

const links = [
  {
    name:"Business",
    sublinks:[
      {name:"Identity Verification", url:"/business/identity-verification", text:"Typically 24 months of categorised financial data of your customers", img: IdentityVerification, imgMobile: IdentityVerificationMobile },
      {name:"Digital Identity", url:"/business/digital-identity", text:"Complete a direct and manual KYC checks on customers", img: DigitalIdentity, imgMobile: DigitalIdentityMobile},
      {name:"Password Free Login", url:"/business/password-free-login", text:"Know and verify account holder(s) by verifying bank access credentials.", img:PasswordFree, imgMobile: PasswordFreeMobile}
    ]
  },
  {
    name:"Individual",
    sublinks:[
      {name:"What is MyIdentikey?", url:"/individual/what-is-myidentikey", img:Facial},
      {name:"Download MyIdentikey App", url:"/individual/what-is-myidentikey", img: HalfPhone},
      {name:"Registration Demo", url:"#", img:RegistrationDemo}
    ]
  },
  {
    name:"Use cases",
    sublinks:[
      {name:"All Industries", url:"/usecases"},
      {name:"Financial Services", url:"/usecases/#financial-services"},
      {name:"Health care", url:"/usecases/#health-care"},
      {name:"Legal Services", url:"/usecases/#legal-services"},
      {name:"Retail and E-commerce", url:"/usecases/#retail"},
      {name:"Travel and hospitality", url:"/usecases/#travel-and-hospitality"},
      {name:"Sharing Economy", url:"/usecases/#sharing-economy"},
      
    ]
  }
]

const Navigation  = () => {
  const [isOpen, setIsOpen] = useState(false);
    return(
      <>
        <nav className="max-w-screen-xl mx-auto h-16 md:h-20 flex items-center justify-between px-4 fixed top-0 left-0 md:static w-full bg-white z-20">
          <a href="/" className="flex items-center space-x-2 ">
            <img src={logo} alt="logo"/>
            <span className="font-medium text-black">MyIdentiKey</span>
          </a>
          <ul className="md:flex items-center text-black text-sm font-thin hidden">
            {links.map((link, i) => {
                return(
                    <NavigationLink link={link} key={i}/>
                )
            })}
          </ul>
          <div className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? (
              <span>
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.577 7.80778H0.807696C0.361846 7.80778 0 7.44593 0 7.00008C0 6.55423 0.361846 6.19238 0.807696 6.19238H18.577C19.0229 6.19238 19.3847 6.55423 19.3847 7.00008C19.3847 7.44593 19.0229 7.80778 18.577 7.80778Z" fill="#101010"/>
              <path d="M18.577 1.61539H0.807696C0.361846 1.61539 0 1.25355 0 0.807696C0 0.361846 0.361846 0 0.807696 0H18.577C19.0229 0 19.3847 0.361846 19.3847 0.807696C19.3847 1.25355 19.0229 1.61539 18.577 1.61539Z" fill="#101010"/>
              <path d="M18.577 14H0.807696C0.361846 14 0 13.6382 0 13.1923C0 12.7465 0.361846 12.3846 0.807696 12.3846H18.577C19.0229 12.3846 19.3847 12.7465 19.3847 13.1923C19.3847 13.6382 19.0229 14 18.577 14Z" fill="#101010"/>
              </svg>
            </span>
            )
            :
            (
              <span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.781396 16C0.626858 16 0.475783 15.9542 0.347281 15.8683C0.218778 15.7825 0.118621 15.6605 0.0594776 15.5177C0.000334661 15.3749 -0.0151369 15.2178 0.0150198 15.0662C0.0451766 14.9147 0.119607 14.7755 0.228896 14.6662L14.6664 0.2287C14.8129 0.0821683 15.0117 -0.000152588 15.2189 -0.000152588C15.4261 -0.000152588 15.6249 0.0821683 15.7714 0.2287C15.9179 0.375233 16.0002 0.573973 16.0002 0.7812C16.0002 0.988428 15.9179 1.18717 15.7714 1.3337L1.3339 15.7712C1.26141 15.8438 1.17528 15.9014 1.08047 15.9407C0.985653 15.98 0.884016 16.0001 0.781396 16Z" fill="#101010"/>
                <path d="M15.2198 16C15.1172 16.0001 15.0156 15.98 14.9208 15.9407C14.8259 15.9014 14.7398 15.8438 14.6673 15.7712L0.22983 1.3337C0.0832975 1.18717 0.000976563 0.988428 0.000976562 0.7812C0.000976563 0.573973 0.0832975 0.375233 0.22983 0.2287C0.376362 0.0821683 0.575102 -0.000152588 0.78233 -0.000152588C0.989557 -0.000152588 1.1883 0.0821683 1.33483 0.2287L15.7723 14.6662C15.8816 14.7755 15.956 14.9147 15.9862 15.0662C16.0164 15.2178 16.0009 15.3749 15.9417 15.5177C15.8826 15.6605 15.7824 15.7825 15.6539 15.8683C15.5254 15.9542 15.3744 16 15.2198 16Z" fill="#101010"/>
                </svg>
              </span>
            )
          }
          </div>
          <div className="md:flex space-x-6 items-center hidden">
            <Link to="/login">  
                <button className="text-black text-[14px] md:text-[16] font-medium mr-6 whitespace-nowrap">Sign In</button>
            </Link>
            <Link to="/get-access">  
                <button className="text-white bg-[#00ACE6] w-36 py-3 rounded text-[14px] md:text-[16] font-medium">Get access</button>
            </Link>
          </div>
         
        </nav>
        <Transition
            show={isOpen}
            enter="transition-opacity duration-300 ease-in"
            enterFrom="opacity-0"
            enterTo=" opacity-100"
            leave="transition-opacity duration-300 ease-out"
            leaveFrom=" opacity-100"
            leaveTo=" opacity-0"
          >
             <MobileNav links={links} />
          </Transition>
        </>
    )
}

export default Navigation;