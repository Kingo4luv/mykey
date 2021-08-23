import Developers from "../../../components/dashboard/Developers"
import Table from "../../../components/dashboard/table"


const ApiLogs = () => {
    return(
        <Developers>
            <div className="space-y-2">
                <h2 className="text-2xl text-hair">API logs</h2>
                <p className="text-sm text-hair">A list of customers using MyIdentikey app for Identity Verification</p>
            </div>
            <Table handleClick={() => {}}/>
        </Developers>
    )
}

export default ApiLogs