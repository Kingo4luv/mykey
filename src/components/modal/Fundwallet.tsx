import ModalLayout from ".";
import Button from "../Button";

const FundWalletModal = ({toggleFilter}: {toggleFilter: () => void}) => {
    return(
        <ModalLayout>
            <div className="max-w-lg bg-white rounded shadow px-4 md:px-8 py-6 relative">
                <div className="header flex items-center justify-between">
                    <h3 className="text-sm text-black mt-5">Proceed to your Banking app to fund your MyKey wallet</h3>
                    <button onClick={toggleFilter} className="absolute top-5 right-5">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 6.2225L14.2225 0L16 1.7775L9.7775 8L16 14.2225L14.2225 16L8 9.7775L1.7775 16L0 14.2225L6.2225 8L0 1.7775L1.7775 0L8 6.2225Z" fill="#101010"/>
                        </svg>
                    </button>
                </div>
                <div className="body mt-12 pb-6 space-y-8">
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

                    <div className="w-full sm:w-36">
                        <Button text="Okay, got it!" onClick={toggleFilter}/>
                    </div>
                </div>
            </div>
        </ModalLayout>
    )
}

export default FundWalletModal;