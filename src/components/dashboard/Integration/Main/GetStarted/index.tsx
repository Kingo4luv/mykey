import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../../Button";
import SelectButton from "../../SelectButton";

const GetStarted = () => {
    const history = useHistory()
     const [selectedValue, setSelectedValue] = useState("");

    const handleSelected = (value:string) => {
        setSelectedValue(value)
        console.log(value)
    }
    const changeScreenHandler = (title: string) => {
        history.push(`/integration/${title}`)
    }
    return(
        <div className="py-6 max-w-md">
            <h3 className="text-xl">Get started in sand box mode</h3>
            <p className="mt-12 text-grey text-[14px] leading-[23.56px]">This is your sandbox environment with your sandbox API keys. Please use your publishable API key for your client side integrations (Mobile App or Website) and your secret API key for your backend.</p>
        
            <div className="mt-12 bg-white px-6 py-8 shadow-drop-down-shadow rounded space-y-10">
                <div className="flex justify-between items-center">
                    <h4 className="text-lg font-medium text-hair">MyIdentikey</h4>
                    <a href="/integration" className="text-sm text-blue">Read documentation</a>
                </div>
                <div className="w-full space-y-6">
                    <div className="space-y-1">
                        <h5 className="text-sm font-medium">Test Public Key</h5>
                        <div className="w-full flex justify-between items-center">
                            <p className="text-grey text-sm font-thin">test_pk_CTgsXghshggdghgh</p>
                            <button className="flex space-x-2 bg-gray-100 rounded px-2 py-1 items-center">
                                <span><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.11054 3.3V1.2C3.11054 1.01435 3.18429 0.8363 3.31557 0.705025C3.44684 0.57375 3.62489 0.5 3.81054 0.5H12.2105C12.3962 0.5 12.5742 0.57375 12.7055 0.705025C12.8368 0.8363 12.9105 1.01435 12.9105 1.2V11C12.9105 11.1856 12.8368 11.3637 12.7055 11.495C12.5742 11.6262 12.3962 11.7 12.2105 11.7H10.1105V13.8C10.1105 14.1864 9.79554 14.5 9.40564 14.5H1.01545C0.923135 14.5005 0.831624 14.4828 0.746172 14.4479C0.66072 14.413 0.58301 14.3615 0.517508 14.2965C0.452005 14.2314 0.400002 14.1541 0.364485 14.0689C0.328968 13.9837 0.310637 13.8923 0.310547 13.8L0.312647 4C0.312647 3.6136 0.627647 3.3 1.01755 3.3H3.11054ZM1.71265 4.7L1.71055 13.1H8.71054V4.7H1.71265ZM4.51054 3.3H10.1105V10.3H11.5105V1.9H4.51054V3.3Z" fill="#101010"/>
                                    </svg>
                                </span>
                                <span className="text-xs text-black">Copy</span>
                            </button>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h5 className="text-sm font-medium">Test Public Key</h5>
                        <div className="w-full flex justify-between items-center">
                            <p className="text-grey text-sm font-thin">test_pk_CTgsXghshggdghgh</p>
                            <button className="flex space-x-2 bg-gray-100 rounded px-2 py-1 items-center">
                                <span><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.11054 3.3V1.2C3.11054 1.01435 3.18429 0.8363 3.31557 0.705025C3.44684 0.57375 3.62489 0.5 3.81054 0.5H12.2105C12.3962 0.5 12.5742 0.57375 12.7055 0.705025C12.8368 0.8363 12.9105 1.01435 12.9105 1.2V11C12.9105 11.1856 12.8368 11.3637 12.7055 11.495C12.5742 11.6262 12.3962 11.7 12.2105 11.7H10.1105V13.8C10.1105 14.1864 9.79554 14.5 9.40564 14.5H1.01545C0.923135 14.5005 0.831624 14.4828 0.746172 14.4479C0.66072 14.413 0.58301 14.3615 0.517508 14.2965C0.452005 14.2314 0.400002 14.1541 0.364485 14.0689C0.328968 13.9837 0.310637 13.8923 0.310547 13.8L0.312647 4C0.312647 3.6136 0.627647 3.3 1.01755 3.3H3.11054ZM1.71265 4.7L1.71055 13.1H8.71054V4.7H1.71265ZM4.51054 3.3H10.1105V10.3H11.5105V1.9H4.51054V3.3Z" fill="#101010"/>
                                    </svg>
                                </span>
                                <span className="text-xs text-black">Copy</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <h4 className="text-sm font-medium text-black">Choose your favorite client-side integration</h4>
                <div className="mt-10 grid grid-cols-3 gap-x-2 md:gap-x-4">
                    <SelectButton text="IOS" value={selectedValue} handleSelected={handleSelected} />
                    <SelectButton text="Android" value={selectedValue} handleSelected={handleSelected} />
                    <SelectButton text="Others" value={selectedValue} handleSelected={handleSelected} />
                </div>
            </div>
            <div className="mt-24 w-44">
                <Button text="Next" onClick={() => changeScreenHandler("invite-team")} />
            </div>
        </div>
    )
}

export default GetStarted;