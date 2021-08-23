import { useHistory } from "react-router-dom";
import Button from "../../../../Button";

const ActivateAccount = () => {
    const history = useHistory();

    const changeScreenHandler = (title:string) => {
        history.push(`/activation/${title}`)
    }
    return(
        <div className="py-6 md:py-24 max-w-lg px-4 md:px-16">
            <h3 className="text-xl mt-6">Activate your MyIdentikey Business Account</h3>
            <p className="mt-8 text-grey text-[14px] leading-[23.56px] max-w-sm font-thin">
                You need to activate your business to use MyIdentikey  in live mode. Start by entering your company Information
            </p>

            <div className="flex space-x-8 mt-8">
                <div className="w-40">
                    <Button text="Get started" onClick={() => changeScreenHandler("use-cases")} />
                </div>
            </div>
        </div>
    )
}

export default ActivateAccount