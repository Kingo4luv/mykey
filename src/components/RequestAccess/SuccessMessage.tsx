import { Link } from 'react-router-dom'
import accessImage from '../../assets/svg/request-success.svg'

const SuccessMessage = () => {
    return(
        <div className="w-full">
            <div className="max-w-sm mx-auto flex flex-col justify-center items-center space-y-5">
                <img src={accessImage} alt="access icon" />
                <h3 className="font-bold text-2xl text-black">Thank you!</h3>
                <p className="text-black text-[16px] leading-[26.88px] max-w-md text-center font-thin">Your sign up request has been sent and we’ll be in touch with you shortly, while you’re here:</p>
                
                <div className="flex flex-col w-full space-y-5">
                    <button className="text-white bg-[#00ACE6] w-full py-3 rounded text-[14px] md:text-[16] font-medium mt-5">Watch demo</button>
                    <Link to="/">
                        <button className="text-[#00ACE6] bg-white border border-[#00ACE6] w-full py-3 rounded text-[14px] md:text-[16] font-medium">Back to home</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SuccessMessage