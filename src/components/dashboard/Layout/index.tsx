import Nav from '../../../components/dashboard/Nav'
import Sidebar from '../../../components/dashboard/sidebar'
import Toaster from '../Toaster'

const DashboardLayout: React.FC = ({children}) => {
    return(
        <div className="w-full h-screen max-h-screen min-h-screen bg-[#FAFAFA]">
            <Nav />
            <Toaster/>
            <div className="w-full h-full flex relative">
                <Sidebar/>
                {children}
            </div>
        </div>
    )
}


export default DashboardLayout