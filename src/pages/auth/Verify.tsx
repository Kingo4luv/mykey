import { Link } from "react-router-dom";
import AuthLayout from '../../components/auth/layout/index'
import Button from '../../components/Button'
import OtpInput from 'react-otp-input';
import { SetStateAction, useState } from "react";


const Verify = () => {
    const [otp, setOtp] = useState("");

    const handleChange = (token:SetStateAction<string>) => {
        setOtp(token)
    }
    const onSubmit = () => {
        console.log(otp)
    }

    return(
        <AuthLayout>
            <div className="h-full w-full max-w-md mx-auto space-y-6 mt-20 md:mt-52">
                <h2 className="text-2xl font-bold text-black">Verify your account</h2>
                <p className="text-sm text-grey">Enter the correct 3 digits code sent to your email and your phone number in the boxes below</p>
                <div className="w-full" >
                    <div className="w-full relative mt-12">
                       <OtpInput
                            value={otp}
                            onChange={handleChange}
                            numInputs={6}
                            isInputNum={true}
                            containerStyle="flex justify-between"
                            inputStyle={{
                                width: "3rem",
                                height: "3rem",
                                fontSize: "2rem",
                                color: "#292929",
                                borderRadius: 4,
                                border: "1px solid rgba(209, 209, 209, 1)"
                                }}
                        />
                    </div>
                    <div className="flex justify-around text-xs mt-3 text-grey">
                        <span>Email code here</span>
                        <span>SMS code here</span>
                    </div>
                    <div className="mt-12">
                        <Button text="Verify account" onClick={onSubmit} />
                    </div>
                    <div className="mt-6 flex items-center justify-center">
                        <Link to="#" className="text-sm">
                            <span className="text-black font-thin">Didn't receive code?</span>
                            <span className="font-medium text-black">Resent code</span>
                        </Link>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Verify