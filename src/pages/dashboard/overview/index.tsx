import Onboarding from "../../../components/dashboard/Overview/onboarding"
import { useState } from "react"
import Summary from "../../../components/dashboard/Overview/Summary"
import OverviewChart from "../../../components/dashboard/Overview/Chart"
import DashboardLayout from "../../../components/dashboard/Layout"



const Overview = () => {
    const [showOnboarding, setShowOnboarding] = useState(true);
    const toggleOnboarding = () => {
        setShowOnboarding(!showOnboarding)
    }
    return(
        <DashboardLayout>
            <main className="w-full h-full relative overflow-y-auto ml-0 md:ml-[20%] lg:ml-[16.666667%] pt-20 md:pt-28 px-4 md:px-16 space-y-12 pb-12">
                {showOnboarding && <Onboarding toggleOnboarding={toggleOnboarding}/>}
                <div className="dashboard-overview space-y-10">
                    <Summary/>
                    <OverviewChart />
                </div>
            </main>
        </DashboardLayout>
    )
}

export default Overview