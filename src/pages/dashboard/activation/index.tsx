import ActivateMain from "../../../components/dashboard/activation/Main"
import ActivationSidebar from "../../../components/dashboard/activation/sidebar"
import Nav from "../../../components/dashboard/Nav"


const Activation = () => {
    
    return(
        <div className="w-full h-screen max-h-screen min-h-screen bg-[#FAFAFA]">
            <Nav />
            <div className="w-full h-full flex relative">
                <ActivationSidebar />
                <ActivateMain  />
            </div>
        </div>
    )
}

export default Activation