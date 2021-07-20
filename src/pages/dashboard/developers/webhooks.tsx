import Developers from "../../../components/dashboard/Developers"
import Table from "../../../components/dashboard/table"


const Webhooks = () => {
    return(
        <Developers>
            <div className="space-y-2">
                <h2 className="text-2xl text-hair">Webhooks</h2>
                <p className="text-sm text-hair">A list of customers using MyKey app for Identity Verification</p>
            </div>
            <Table handleClick={() => {}}/>
        </Developers>
    )
}

export default Webhooks