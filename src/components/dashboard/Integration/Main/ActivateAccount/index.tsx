import Button from "../../../../Button";

const ActivateAccount = () => {
    return(
        <div className="py-6 max-w-md">
            <h3 className="text-xl">Activate your production environment</h3>
            <p className="mt-8 text-grey text-[14px] leading-[23.56px] max-w-sm">
                In order to use MyKey in production, you need to choose a plan and set up a payment method.
            </p>

            <div className="flex space-x-8 mt-8">
                <div className="w-40">
                    <Button text="Get started" onClick={() => {}} />
                </div>
            </div>
        </div>
    )
}

export default ActivateAccount