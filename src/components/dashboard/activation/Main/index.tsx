import { useParams } from "react-router-dom"
import ActivationSidebar from "../sidebar";
import ActivateAccount from "./ActivateAccount"
import CompanyInformation from "./CompanyInformation";
import Usecases from "./Usecase";
import Billing from "./Billing";




const ActivateMain = () => {

    const {screen} : {screen:string} = useParams();

    const screens: {[key: string]: any} = {
        "get-started": <ActivateAccount/>,
        "use-cases": <Usecases />,
        "company-information" : <CompanyInformation />,
        "billing" : <Billing />,
    }
    return(
        <main className="w-full h-full flex flex-col md:flex-row overflow-y-auto ml-0 md:ml-[20%] xl:ml-[16.666667%]">
           <ActivationSidebar />
           {screens[screen]}
        </main>
    )
}

export default ActivateMain;