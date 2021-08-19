import Nav from '../../../components/dashboard/Nav'
import Sidebar from '../../../components/dashboard/sidebar'

const DashboardLayout: React.FC = ({children}) => {
    return(
        <div className="w-full h-screen max-h-screen min-h-screen bg-[#FAFAFA]">
            <Nav />
            <div className="w-full h-full flex relative">
                <Sidebar/>
                {children}
            </div>
        </div>
    )
}


export default DashboardLayout