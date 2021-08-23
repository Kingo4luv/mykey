import Security from '../../assets/img/security.jpeg'
const SecurityAndPrivacy = () => {
    return(
        <section className="w-full bg-[#FAFAFA] py-12 lg:py-24 px-4">
            <div className="max-w-screen-xl flex flex-col md:flex-row mx-auto">
                <div className="w-full md:w-1/2 space-y-4">
                    <h3 className="text-xl md:text-2xl text-black font-medium">Security and privacy are our top priority</h3>
                    <div className="max-w-lg space-y-4 text-black">
                        <p>
                        MyIdentiKey never gets access to your ID information.
                        </p>
                        <p>To complete registration, your information is encrypted and sent to MyIdentikey's secure registration server for verification. Once verified, it is sent back to your phone and destroyed on the server.</p>
                        <p>Your information is only stored offline on your smartphone using strong encryption and your smartphone's security mechanisms. Only you have access and control over your information.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                    <div className="h-auto md:h-80 w-full md:w-4/5 lg:w-3/5">
                        <img src={Security} alt="" className="rounded h-full w-full object-cover object-center" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecurityAndPrivacy;