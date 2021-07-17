import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../../Button"
import ListButton from "../../../../listbox";
import SelectButton from "../../../Integration/SelectButton"

const countries = [
    {name: "Nigeria"},
    {name: "Ghana"},
    {name: "Kenya"},
    {name: "Uganda"},
]

const CompanyInformation = () => {
    const history = useHistory();
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedVerificationValue, setSelectedVerification] = useState("");

    const handleSelected = (value:string) => {
        setSelectedValue(value)
    }
    const handleSelectedVerification = (value:string) => {
        setSelectedVerification(value)
    }

    const changeScreenHandler = (title:string) => {
        history.push(`/activation/${title}`)
    }
    return(
        <div className="py-6 max-w-md">
            <h3 className="text-xl">Tell us about your company and project</h3>
            <p className="mt-8 text-grey text-[14px] leading-[23.56px] max-w-sm">
                This information will help us serve you better and allow our compliance team to activate your account.
            </p>

            <div className="mt-10">
                <h4 className="text-sm font-medium text-black">Which industry do you serve?</h4>
                <div className="mt-10 grid grid-cols-3 gap-2 md:gap-x-4">
                    <SelectButton text="Fintech" value={selectedValue} handleSelected={handleSelected} />
                    <SelectButton text="Health care" value={selectedValue} handleSelected={handleSelected} />
                    <SelectButton text="Government" value={selectedValue} handleSelected={handleSelected} />
                    <SelectButton text="Travel" value={selectedValue} handleSelected={handleSelected} />
                    <SelectButton text="Legal services" value={selectedValue} handleSelected={handleSelected} />
                    <SelectButton text="E-Commerce" value={selectedValue} handleSelected={handleSelected} />
                    <SelectButton text="Other" value={selectedValue} handleSelected={handleSelected} />
                </div>
            </div>
            <div className="mt-10">
                <h4 className="text-sm font-medium text-black">How many verifications do you expect per month?</h4>
                <div className="mt-10 grid grid-cols-3 gap-2 md:gap-x-4">
                    <SelectButton text="10-1000" value={selectedVerificationValue} handleSelected={handleSelectedVerification} />
                    <SelectButton text="1001-5000" value={selectedVerificationValue} handleSelected={handleSelectedVerification} />
                    <SelectButton text="5001-10,000" value={selectedVerificationValue} handleSelected={handleSelectedVerification} />
                    <SelectButton text="10,000+" value={selectedVerificationValue} handleSelected={handleSelectedVerification} />
                    <SelectButton text="Not sure" value={selectedVerificationValue} handleSelected={handleSelectedVerification} />
                </div>
            </div>
            <div className="mt-10">
                <h4 className="text-sm font-medium text-black">What country do you operate in?</h4>
                <div className="mt-10 w-full">
                    <ListButton last={true} single={true} input="Nigeria" title="Nigeria" items={countries} listChanged={() => {}} />
                </div>
            </div>

            <div className="flex space-x-8 mt-16">
                <div className="w-40">
                    <Button text="Next" onClick={() => changeScreenHandler("billing-information")} />
                </div>
            </div>
        </div>
    )
}

export default CompanyInformation