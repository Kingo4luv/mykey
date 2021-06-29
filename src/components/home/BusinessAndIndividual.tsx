import {Link} from "react-router-dom";
import appleStore from '../../assets/svg/applestore.svg'
import playStore from '../../assets/svg/playstore.svg'

const BusinessAndIndividual = () => {
    return(
        <section className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-hair flex justify-center items-center py-20 md:py-32 px-4">
          <div className="max-w-md">
            <span className="bg-yellow text-sm md:text-base px-3 py-1 rounded-2xl">Business</span>
            <h3 className="mt-6 text-[20px] md:text-[32px] text-white font-medium">Ready to get started? </h3>
            <p className="mt-6 text-white text-[14px] md:text-[18px] font-thin leading-[22.96px] md:leading-[29.56px]">Join us and get customers authenticated and verified in a convenient and secure way.</p>
            <Link to="/get-access">
                <button className="mt-12 text-white bg-transparent border border-white w-44 py-3 md:py-4 rounded text-[14px] md:text-[16] font-medium">Get access</button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-[#99E6FF] flex justify-center items-center py-20 md:py-32 px-4">
          <div className="max-w-xl md:max-w-md">
            <span className="bg-hair text-sm md:text-base px-3 py-1 rounded-2xl text-white">Individual</span>
            <h3 className="mt-6 text-[20px] md:text-[32px] text-hair font-medium">Ready to get started? </h3>
            <p className="mt-6 text-hair text-[14px] md:text-[18px] font-thin leading-[22.96px] md:leading-[29.56px]">Join us and get customers authenticated and verified in a convenient and secure way.</p>
            <div className="flex space-x-6 mt-8 md:mt-12">
              <a href="/">
                <img src={appleStore} alt="Apple store icon" className="w-44" />
              </a>
              <a href="/">
                <img src={playStore} alt="play store icon" className="w-44" />
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default BusinessAndIndividual;