import Button from "../../Button";

const Onboarding = ({toggleOnboarding}:{toggleOnboarding:() => void}) => {
    return(
        <div className="w-full bg-white p-4 md:p-6 mt-6 rounded border border-[#E9E9E9] space-y-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-y-5 relative">
                <h4 className="text-hair font-medium text-sm">Setup Progress <span className="font-light ml-2 text-grey">1/3</span></h4>
                <div className="w-full lg:w-3/4 relative h-1">
                    <div className="w-full h-full bg-[#E9E9E9] rounded"></div>
                    <div className="absolute inset-0 h-full bg-blue rounded" style={{width: `${100/3}%`}}></div>
                </div>
                <button onClick={toggleOnboarding} className="text-sm underline text-hair absolute lg:static right-5">Hide</button>
            </div>
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-y-10 gap-x-5">
                <div className="space-y-6 md:space-y-10 w-full sm:max-w-[18rem]">
                    <dl className="space-y-2">
                        <dt>Account Creation</dt>
                        <dd className="text-grey text-sm leading-[25.2px]">Cursus urna, tristique senectus aenean fames. Quis convallis turpis in est varius </dd>
                    </dl>
                    <div className="flex items-center space-x-4">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#18A6E3"/>
                                <path d="M10.6667 14.1147L16.7947 7.98602L17.7381 8.92868L10.6667 16L6.42407 11.7573L7.36674 10.8147L10.6667 14.1147Z" fill="white"/>
                            </svg>
                        </span>
                        <p className="text-sm text-hair">Completed</p>
                    </div>
                </div>
                <div className="space-y-6 md:space-y-10">
                    <dl className="space-y-2 w-full sm:max-w-[18rem]">
                        <dt>Account Activation</dt>
                        <dd className="text-grey text-sm leading-[25.2px]">Cursus urna, tristique senectus aenean fames. Quis convallis turpis in est varius </dd>
                    </dl>
                    <div className="w-full sm:w-40">
                        <Button onClick={() => {}} text="Activate Account" />
                    </div>
                </div>
                <div className="space-y-6 md:space-y-10">
                    <dl className="space-y-2 w-full sm:max-w-[18rem]">
                        <dt>Fund wallet</dt>
                        <dd className="text-grey text-sm leading-[25.2px]">Cursus urna, tristique senectus aenean fames. Quis convallis turpis in est varius </dd>
                    </dl>
                    <div className="w-full sm:w-40">
                        <Button onClick={() => {}} text="Fund wallet" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Onboarding;