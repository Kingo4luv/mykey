import { Link } from "react-router-dom"
import Navigation from "../nav"

const Header = ({image, title, text}:{image: string, title: string, text:string}) => {
    return(
        <header className="w-full">
                <Navigation />
                <div className={`hero flex flex-col md:flex-row w-full ${title !== 'Login and Multi-Factor Authentication' ? 'max-w-screen-2xl':'max-w-screen-xl'} mx-auto h-auto md:h-[752px] mt-16 md:mt-2`}>
                    <div className={`${title !== 'Login and Multi-Factor Authentication' ? 'lg:w-1/2':'lg:w-2/5'} w-full h-full flex flex-col justify-center items-center px-4 lg:px-6 py-6 md:py-0`}>
                        <div className="w-full flex justify-start lg:justify-center">
                            <div className="max-w-lg">
                                <h4 className="text-grey text-base md:text-lg">{title}</h4>
                                <h1 className="text-[20px] md:text-[40px] leading-[31.68px] md:leading-[49.6px] font-medium mt-3">
                                {text}
                                </h1>
                                <div className="flex space-x-5 mt-12">
                                    <Link to="/get-access" className="w-full md:w-40">
                                        <button className="text-white bg-[#00ACE6] w-full py-3 rounded text-[14px] md:text-[16] font-medium">Get access</button>
                                    </Link>
                                    <button className="text-[#00ACE6] bg-white border border-[#00ACE6] w-full md:w-40 py-3 rounded text-[14px] md:text-[16] font-medium">Contact sales</button>
                                </div>
                                <p className="mt-6 text-sm text-black">Not a business? <span className="font-medium">Visit MyKey for Individuals.</span></p>
                            </div>
                        </div>
                    </div>
                    <div className={`${title !== 'Login and Multi-Factor Authentication' ? 'lg:w-1/2':'lg:w-3/5'} w-full flex justify-center items-center mt-4 md:mt-0`}>
                        <img src={image} alt="boy face" className={`${title !== 'Login and Multi-Factor Authentication' ? 'lg:w-4/5':'w-full'} w-full object-cover object-center rounded-none md:rounded`}/>
                    </div>
                </div>
            </header>
    )
}

export default Header