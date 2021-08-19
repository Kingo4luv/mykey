import {Link} from "react-router-dom";
import piggyVestLogo from '../../assets/svg/piggyvest.svg'
import cowryWiseLogo from '../../assets/svg/cowrywise.svg'
import flipPayLogo from '../../assets/svg/flippay.svg'
import quidaxLogo from '../../assets/svg/quidax.svg'
import abegLogo from '../../assets/svg/abeg.svg'
import Hero from '../../assets/img/hero.jpeg'
import Navigation from "../nav";

const Header = () => {
    return(
        <header className="w-full">
        <Navigation />
        <div className="hero flex flex-col md:flex-row w-full h-auto md:h-[752px] mt-16 md:mt-2">
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center px-4 md:px-6 py-6 md:py-0">
            <div className="w-full flex justify-center">
              <div className="max-w-sm">
                <h1 className="text-[24px] md:text-[40px] leading-[31.68px] md:leading-[49.6px] font-medium">
                  A secure and easy way to verify your customer identity
                </h1>
                <p className="text-[#292929] md:leading-[26.88px] mt-5 font-normal text-[15px] md:text-[16px] leading-[23.52px]">Through smooth and secure identification data access and verification, you can validate anything about anyone</p>
              <div className="flex space-x-3 mt-12">
                <Link to="/get-access">
                    <button className="text-white bg-[#00ACE6] w-36 py-3 rounded text-[14px] md:text-[16] font-medium">Get access</button>
                </Link>
                <button className="text-[#00ACE6] bg-white border border-[#00ACE6] w-36 py-3 rounded text-[14px] md:text-[16] font-medium">Download app</button>
              </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <img src={Hero} alt="boy face" className="w-full h-96 md:h-full object-cover object-center"/>
            <div className="w-full px-0 md:px-6 static md:absolute md:-bottom-16">
              <div className="w-full py-6 md:py-10 bg-white px-4 md:px-6 rounded" style={{boxShadow:"0px 0px 20px rgba(215, 215, 215, 0.25)"}}>
                <h3 className="font-medium text-[#292929] text-base md:text-lg">Trusted by:</h3>
                <div className="mt-6 grid grid-cols-3 lg:grid-cols-5 gap-4 md:gap-12 filter blur-sm">
                  <img src={cowryWiseLogo} alt="cowrywise logo"/>
                  <img src={piggyVestLogo} alt="piggyvest logo"/>
                  <img src={flipPayLogo} alt="flippay logo"/>
                  <img src={quidaxLogo} alt="quidax logo"/>
                  <img src={abegLogo} alt="abeg logo"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;