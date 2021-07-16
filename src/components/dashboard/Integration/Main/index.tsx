import { useParams } from "react-router-dom"
import ActivateAccount from "./ActivateAccount"
import ActivateWebhook from "./ActivateWebhook"
import ApiIntegration from "./ApiIntegration"
import GetStarted from "./GetStarted"
import InviteTeam from "./InviteTeam"



const IntegrationMain = () => {

    const {screen} : {screen:string} = useParams();

    const screens: {[key: string]: any} = {
        "get-started": <GetStarted/>,
        "invite-team": <InviteTeam />,
        "activate-webhook" : <ActivateWebhook />,
        "api-integration" : <ApiIntegration />,
        'activate-account': <ActivateAccount/>
    }
    return(
        <main className="w-full h-full relative overflow-y-auto ml-0 md:ml-[25%] xl:ml-[16.666667%] pt-20 md:pt-24 px-4 md:px-20">
           {screens[screen]}
        </main>
    )
}

export default IntegrationMain;