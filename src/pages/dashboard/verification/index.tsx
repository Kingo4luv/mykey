import Nav from '../../../components/dashboard/Nav'
import Sidebar from '../../../components/dashboard/sidebar'
import VerificationMain from '../../../components/dashboard/Verification/Main'

const Verification = () => {
    return(
        <div className="w-full h-screen max-h-screen min-h-screen bg-[#FAFAFA]">
            <Nav />
            <div className="w-full h-full flex relative">
                <Sidebar/>
                <VerificationMain/>
            </div>
        </div>
    )
}


export default Verification