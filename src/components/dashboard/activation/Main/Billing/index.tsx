import Button from "../../../../Button"



const Billing = () => {
   
    return(
        <div className="py-6 md:py-24 max-w-xl px-4 md:px-12">
            <h3 className="text-xl mt-6">Billing</h3>
            <p className="mt-8 text-hair font-thin">
                We charge 60 naira per calls, for Identity verification checks
            </p>

            <div className="mt-6 md:mt-10 bg-white p-6 rounded space-y-6 shadow-drop-down-shadow">
                <h3 className="text-sm text-black ">Proceed to your Banking app to fund your MyKey wallet</h3>
                <div className="">
                    <dl className="w-full flex justify-between border-b py-6 text-sm text-black">
                        <dt>Account Number</dt>
                        <dd>1234567890</dd>
                    </dl>
                    <dl className="w-full flex justify-between border-b py-6 text-sm text-black">
                        <dt>Bank Name</dt>
                        <dd>Wema Bank</dd>
                    </dl>
                    <dl className="w-full flex justify-between py-6 text-sm text-black">
                        <dt>Beneficiary Name</dt>
                        <dd>MMyKey(Username)</dd>
                    </dl>
                </div>
            </div>
            <p className="mt-8 text-hair text-sm font-thin">
                Are you making more than 10,000 calls? Contact our sales team
            </p>
            
            <div className="flex space-x-8 mt-10">
                <div className="w-40">
                    <Button text="Activate account" onClick={() => {}} />
                </div>
            </div>
        </div>
    )
}

export default Billing