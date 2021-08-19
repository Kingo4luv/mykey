import DashboardLayout from "../Layout"


const Developers: React.FC = ({children}) => {
    return(
        <DashboardLayout>
            <main className="w-full h-full relative overflow-y-auto ml-0 md:ml-[20%] lg:ml-[16.666667%] pt-20 md:pt-24 px-4 md:px-12">
                <div className="py-12 w-full space-y-16">
                    {children}
                </div>
            </main>
        </DashboardLayout>
    )
}

export default Developers