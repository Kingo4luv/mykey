import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../../Button"
import ListButton from "../../../../listbox";
import SelectButton from "../../SelectButton"

const roles = {
    title: "Select type of content",
    items: [
        {name: "Frontend Developer"}, 
        {name:"Backend Developer"}, 
        {name:"Mobile Developer"}
    ]
}

const ActivateWebhook = () => {
    const history = useHistory();
    const [selectedValue, setSelectedValue] = useState("");

    const handleSelected = (value:string) => {
        setSelectedValue(value)
        console.log(value)
    }
    const changeScreenHandler = (title:string) => {
        history.push(`/integration/${title}`)
    }
    return(
         <div className="py-6 max-w-md space-y-12">
            <h3 className="text-xl">Setup webhooks to receive updates about your verifications</h3>
            <div className="mt-10">
                <h4 className="text-sm font-medium text-black">Choose your favorite client-side integration</h4>
                <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-5">
                    <SelectButton text="Verification Completed" value={selectedValue} handleSelected={handleSelected} />
                    <SelectButton text="Verification Reviewed" value={selectedValue} handleSelected={handleSelected} />
                    <SelectButton text="Datapoint Updated" value={selectedValue} handleSelected={handleSelected} />
                    <SelectButton text="Watchlist monitoring" value={selectedValue} handleSelected={handleSelected} />
                </div>
            </div>
            <div className="">
                <h4 className="text-sm font-medium text-black">Webhook payload example</h4>
                <textarea className="w-full h-72 bg-white shadow-drop-down-shadow mt-6 rounded"/>
            </div>
            <div className="">
                <h4 className="text-sm font-medium text-black">Webhook endpoint</h4>
                <textarea className="w-full h-12 bg-white shadow-drop-down-shadow mt-6 rounded"/>
            </div>

            <div className="">
                <h4 className="text-sm font-medium text-black">Webhook Secret (optional)</h4>
                <textarea className="w-full h-12 bg-white shadow-drop-down-shadow mt-6 rounded"/>
            </div>
            <div className="">
                <h4 className="text-sm font-medium text-black mb-6">Content Type</h4>
                <ListButton last={true} single={true}  title={roles.title} items={roles.items} input="" listChanged={() => {}} />
            </div>
            <div className="flex space-x-8 pb-10">
                <div className="w-40">
                    <Button text="Send invite" onClick={() => changeScreenHandler("api-integration")} />
                </div>
                <button className="text-black text-sm">Skip  step</button>
            </div>
        </div>
    )
}

export default ActivateWebhook