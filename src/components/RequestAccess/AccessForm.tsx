import React, { useState } from "react";
import Listbox from "../../components/listbox/index";
import TextInput from "../../components/input/TextInput";
import emailjs from 'emailjs-com';
import harperFetch from '../../utils/harperdb';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IFormValues {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  phone?: string;
  location?: string;
  password?: string
}

const schema = yup.object().shape({
  email: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  location: yup.string().required(),
  company: yup.string().required(),
  phone: yup.string().required(),
});

const serviceId: string = (process.env.REACT_APP_EMAIL_SERVICE_ID as string);
const templateId: string = (process.env.REACT_APP_EMAIL_TEMPLATE_ID as string);
const userId: string = (process.env.REACT_APP_EMAIL_USER_ID as string);

const products = 
{
    title: "How can we help?",
    items: [
        { name: "I am interested in MyIdentikey's Solution" },
        { name: "I am a consultant interested in MyIdentikey for my client" },
        { name: "I am a technology provider & want to partner with My..." },
        { name: "I am a customer and I need support " },
        { name: "I am trying to verify I need support" },
        { name: "I want to work at MyIdentikey" },
        { name: "Others" },
    ]       
}

const AccessForm = ({switchView}:{switchView: () => void}) => {
    const { register, handleSubmit, formState:{ errors } } = useForm<IFormValues>({
        resolver: yupResolver(schema)
    });

    const [loading, setLoading] = useState(false)
    const [formData, setformData] = useState({
         product: "",
         description:"",
     });
     const [errorsArr, setErrorsArr] = useState({
         general: "",
     });
    const { product, description} = formData;

    const listChanged = (data:any) => {
        // console.log(data)
        setformData({...formData, [data.input] : data.selected})
    }

    const onSubmit:SubmitHandler<IFormValues> = async (data) =>{
        if (loading) return;
        if(product === undefined ){
            return
        }
        if(description === "" ){
            return
        }
        setLoading(true);
        const newFormData = {...formData, ...data}
        const response = await harperFetch({
            operation: 'insert',
            schema: 'verifrica',
            table: 'mykey',
            records: [newFormData],
        });
        if(response.error){
            setErrorsArr({...errors, general:"Something went wrong. Please try again"});
            return setLoading(false)
        }
        emailjs.send(serviceId, templateId, newFormData, userId)
            .then((result) => {
                if(result.text === "OK"){
                    switchView()
                }
            }, (error) => {
                setErrorsArr({...errors, general:"Something went wrong. Please try again"});
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
                {errorsArr.general !== "" && <div className="bg-red-100 rounded w-full py-3 text-sm text-red-500 my-4 px-4">{errorsArr.general}</div>}
                <form className="space-y-6 w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="rounded-md">
                        <div className="flex w-full">
                            <div className="w-1/2 relative">
                                <TextInput first={true} half={true} error={errors?.firstName?.message} register={register} second={false} last={false} id="first-name"  label="firstName" name="firstName" type="text" required={true} placeholder="First Name" />
                            </div>
                            <div className="w-1/2 relative">
                                <TextInput first={false} error={errors.lastName?.message} register={register} second={true} last={false}  id="last-name"  label="lastName" name="lastName" type="text" required={true} placeholder="Last Name" />
                            </div>
                        </div>
                            <div className="relative">
                                <TextInput first={false} second={false} error={errors.email?.message} register={register} last={false}  id="email" label="email" name="email" type="email" required={true} placeholder="Email Address" />
                            </div>
                            <div className="relative">
                                <TextInput first={false} second={false}  error={errors.company?.message} register={register} last={false}  id="company" label="company" name="company" type="text" required={true} placeholder="Company" />
                            </div>
                            <div className="relative">
                                <TextInput first={false} second={false}  error={errors.phone?.message} register={register} last={false}   id="phone" label="phone" name="phone" type="text" required={true} placeholder="Phone Number" />
                            </div>
                            <div className="relative">
                                <TextInput first={false} second={false}  error={errors.location?.message} register={register} last={false}   id="location" label="location" name="location" type="text" required={true} placeholder="Location" />
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