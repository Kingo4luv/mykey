import { useParams } from "react-router-dom"
import ActivationSidebar from "../sidebar";
import ActivateAccount from "./ActivateAccount"
import CompanyInformation from "./CompanyInformation";
import Usecases from "./Usecase";
import Billing from "./Billing";
import { useContext } from "react";
import { Context } from "../../../../utils/store";
import { useEffect } from "react";
import { getActiveOrganizationId } from "../../../../utils/helper";
import { getOrganization } from "../../../../Requests/OrganizationRequest";




const ActivateMain = () => {
    const {screen} : {screen:string} = useParams();
    const {dispatch}= useContext(Context);
    useEffect(()=>{
        _getOrganization();
        // eslint-disable-next-line 
    },[screen]);

    const _getOrganization=()=>{
        getOrganization(dispatch, getActiveOrganizationId() as string)
    }


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