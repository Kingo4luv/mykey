import { useParams } from "react-router-dom"
import ActivateAccount from "./ActivateAccount"
import BillingInformation from "./BillingInformation";
import CompanyInformation from "./CompanyInformation";
import PaymentDetails from "./PaymentDetails";




const ActivateMain = () => {

    const {screen} : {screen:string} = useParams();

    const screens: {[key: string]: any} = {
        "get-started": <ActivateAccount/>,
        "company-information": <CompanyInformation />,
        "billing-information" : <BillingInformation />,
        "payment-details" : <PaymentDetails />,
    }
    return(
        <main className="w-full h-full relative overflow-y-auto ml-0 md:ml-[25%] xl:ml-[16.666667%] pt-20 md:pt-24 px-4 md:px-20">
           {screens[screen]}
        </main>
    )
}

export default ActivateMain;