import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../../Button";
import SelectButton from "../../SelectButton"

const ApiIntegration = () => {
    const history = useHistory()
    const [selectedValue, setSelectedValue] = useState("");

    const handleSelected = (value:string) => {
        setSelectedValue(value)
        console.log(value)
    }
    const changeScreenHandler = (title:string) => {
        history.push(`/integration/${title}`)
    }
    return(
        <div className="py-6 max-w-2xl">
            <h3 className="text-xl">Get started with our server side SDK</h3>
            <p className="mt-8 text-grey text-[14px] leading-[23.56px] max-w-md">
                Server side SDKs help you to get started faster with the MyKey API. Please find the advanced API documentation on the bottom.
            </p>

            <div className="mt-10">
                <h4 className="text-sm font-medium text-black">Choose your favorite client-side integration</h4>
                <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-x-2 md:gap-x-4">
                    <SelectButton text="Node" value={selectedValue} handleSelected={handleSelected} />
                    <SelectButton text="Python" value={selectedValue} handleSelected={handleSelected} />
                    <SelectButton text="Java" value={selectedValue} handleSelected={handleSelected} />
                    <SelectButton text="Go" value={selectedValue} handleSelected={handleSelected} />
                    <SelectButton text="Other" value={selectedValue} handleSelected={handleSelected} />
                </div>
            </div>
            <div className="mt-12">
                <h4 className="text-sm font-medium text-black">1 Add @MyKey/node npm package to your package.json. </h4>
                <div className="py-40">

                </div>
                
            </div>
            <div className="flex space-x-8">
                        <div className="w-40">
                    <Button text="Next" onClick={() => changeScreenHandler("activate-account")} />
                </div>
                <button className="text-black text-sm">Skip  step</button>
            </div>
        </div>
    )
}

export default ApiIntegration