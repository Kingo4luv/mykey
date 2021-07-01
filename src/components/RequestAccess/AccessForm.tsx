import React, { useState } from "react";
import Listbox from "../../components/listbox/index";
import TextInput from "../../components/input/TextInput";
import emailjs from 'emailjs-com';
import harperFetch from '../../utils/harperdb';

const serviceId: string = (process.env.REACT_APP_EMAIL_SERVICE_ID as string);
const templateId: string = (process.env.REACT_APP_EMAIL_TEMPLATE_ID as string);
const userId: string = (process.env.REACT_APP_EMAIL_USER_ID as string);

const products = 
{
    title: "How can we help?",
    items: [
        { name: "I am interested in MyKey’s Solution" },
        { name: "I am a consultant interested in MyKey for my client" },
        { name: "I am a technology provider & want to partner with My..." },
        { name: "I am a customer and I need support " },
        { name: "I am trying to verify I need support" },
        { name: "I want to work at MyKey" },
        { name: "Others" },
    ]       
}

const AccessForm = ({switchView}:{switchView: () => void}) => {
    const [loading, setLoading] = useState(false)
    const [formData, setformData] = useState({
         firstName: "",
         lastName: "",
         email: "",
         company: "",
         phone: "",
         location:"",
         product: "",
         description:"",
     });
     const [errors, setErrors] = useState({
         firstName: "",
         lastName: "",
         email: "",
         company: "",
         phone:"",
         location:"",
         general: "",
     });
    const {firstName, lastName, email, company, phone, location, product, description} = formData;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        clearErrors();
        setformData({...formData, [e.target.name]: e.target.value})
        
    }
    const clearErrors = () =>{
        setErrors({...errors, firstName: "", lastName:"", company:"", email:"",phone:"", general:""});
    }

    const resetForm = () =>{
        setformData({...formData, firstName: "", lastName:"", company:"", email:"", phone:""});
    }
    const listChanged = (data:any) => {
        // console.log(data)
        setformData({...formData, [data.input] : data.selected})
    }

    const onSubmit = async (e: React.SyntheticEvent ) =>{
        e.preventDefault();
        if (loading) return;
        if(firstName === ""){
            return setErrors({...errors, firstName: "First name is required"})
        }
        if(lastName === ""){
            return setErrors({...errors, lastName: "Last name is required"})
        }
        if(company === "" && company.length < 5){
            return setErrors({...errors, company: "Company name is too short"})
        }
        if (email === "" || !email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return setErrors({...errors, email: "Email is required and must be valid"})
        }
        if(phone === "" && phone.length < 11){
            return setErrors({...errors, phone: "Phone number is required with minimum of 11 characters"})
        }
        if(location === "" ){
            return setErrors({...errors, phone: "Location is required"})
        }
        if(product === undefined ){
            return
        }
        if(description === "" ){
            return
        }
        setLoading(true);
        const response = await harperFetch({
            operation: 'insert',
            schema: 'verifrica',
            table: 'mykey',
            records: [formData],
        });
        if(response.error){
            setErrors({...errors, general:"Something went wrong. Please try again"});
            return setLoading(false)
        }
        emailjs.send(serviceId, templateId, formData, userId)
            .then((result) => {
                if(result.text === "OK"){
                    resetForm();
                    switchView()
                }
            }, (error) => {
                setErrors({...errors, general:"Something went wrong. Please try again"});
                setLoading(false)
            });
    }

    return(
        <div className="form">
            <header className="mx-auto max-w-lg space-y-3">
                <h1 className="font-bold text-center text-2xl">Request access</h1>
                <p className="text-center text-subtitle-3 lg:text-subtitle-2 text-black font-thin">
                    Our team's always happy to help with any enquiries. Simply fill out the form and we'll get in touch with you shortly.
                </p>
            </header>
            <div className="w-full max-w-md mx-auto space-y-8 mt-6">
                {errors.general !== "" && <div className="bg-red-100 rounded w-full py-3 text-sm text-red-500 my-4 px-4">{errors.general}</div>}
                <form className="space-y-6 w-full" onSubmit={onSubmit}>
                    <div className="rounded-md">
                        <div className="flex w-full">
                            <div className="w-1/2 relative">
                                <TextInput first={true} error={errors.firstName} second={false} onchange={handleChange} last={false} id="first-name" value={firstName} label="First Name" name="firstName" type="text" required={true} placeholder="First Name" />
                            </div>
                            <div className="w-1/2 relative">
                                <TextInput first={false} error={errors.lastName} second={true} last={false} onchange={handleChange} id="last-name" value={lastName} label="Last Name" name="lastName" type="text" required={true} placeholder="Last Name" />
                            </div>
                        </div>
                            <div className="relative">
                                <TextInput first={false} second={false} error={errors.email} last={false} onchange={handleChange} value={email} id="email" label="email" name="email" type="email" required={true} placeholder="Email Address" />
                            </div>
                            <div className="relative">
                                <TextInput first={false} second={false}  error={errors.company} last={false} onchange={handleChange} value={company} id="company" label="company" name="company" type="text" required={true} placeholder="Company" />
                            </div>
                            <div className="relative">
                                <TextInput first={false} second={false}  error={errors.phone} last={false} onchange={handleChange} value={phone} id="phone" label="phone" name="phone" type="text" required={true} placeholder="Phone Number" />
                            </div>
                            <div className="relative">
                                <TextInput first={false} second={false}  error={errors.location} last={false} onchange={handleChange} value={location} id="location" label="location" name="location" type="text" required={true} placeholder="Location" />
                            </div>
                            <Listbox last={false} items={products.items} title={products.title} input={"product"} listChanged={listChanged}/>
                            <div>
                                <textarea value={description} onChange={(
                                        e: React.ChangeEvent<HTMLTextAreaElement>,
                                    ): void => setformData({...formData, description: e.target.value})} 
                                placeholder="Anything else we need to know? type here" className="w-full border border-[#D1D1D1] h-24 rounded-b p-4 text-sm"/>
                            </div>
                        </div>
                        <div>
                        <button
                        onClick={onSubmit}
                        type="submit"
                        className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded text-white bg-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                        {loading ? 'Please wait...' : 'Submit'}
                        </button>
                    </div>
                </form>

                <p className="text-center text-grey text-subtitle-3 lg:text-subtitle-2">By submitting this form, I confirm that I have read and understood Verifrica's Privacy Statement.</p>
            </div>
        </div>
    )
}

export default AccessForm;