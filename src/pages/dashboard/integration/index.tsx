import IntegrationMain from "../../../components/dashboard/Integration/Main"
import IntegrationSidebar from "../../../components/dashboard/Integration/Sidebar"
import Nav from "../../../components/dashboard/Nav"


const Integration = () => {
    
    return(
        <div className="w-full h-screen max-h-screen min-h-screen bg-[#FAFAFA]">
            <Nav />
            <div className="w-full h-full flex relative">
                <IntegrationSidebar />
                <IntegrationMain  />
            </div>
        </div>
    )
}

export default Integration