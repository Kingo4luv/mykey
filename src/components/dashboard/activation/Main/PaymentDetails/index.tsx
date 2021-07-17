import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from "../../../../Button"
import TextInput from "../../../../input/TextInput";

interface IFormValues {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  phone?: string;
  location?: string;
  password?: string;
  website?: string;
}

const schema = yup.object().shape({
  email: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  location: yup.string().required(),
  company: yup.string().required(),
  phone: yup.string().required(),
});


const PaymentDetails = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm<IFormValues>({
        resolver: yupResolver(schema)
    });

    const onSubmit:SubmitHandler<IFormValues> = async (data) =>{}


    return(
        <div className="py-6 max-w-md">
            <h3 className="text-xl">Enter your debit/credit card details</h3>
            <p className="mt-8 text-grey text-[14px] leading-[23.56px] max-w-sm">
                You can remove your card details at anytime so if you need to scale up or down we’re here to help.
            </p>

            <div className="mt-16">
                <p className="text-sm bg-light-shade-blue inline-block px-4 py-3 rounded border border-[#18A6E3]">We charge 60 naira per call</p>
            </div>

            <div className="mt-10">
                <form className="space-y-12 w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-7">
                        <h4 className="text-sm font-medium text-black">Card Details</h4>
                        <div className="rounded-md">
                            <div className="relative">
                                <TextInput first={true} second={false}  error={errors.company?.message} register={register} last={false}  id="company" label="company" name="company" type="text" required={true} placeholder="Card Number" />
                            </div>
                            <div className="relative">
                                <TextInput first={false} second={false} error={errors.email?.message} register={register} last={false}  id="email" label="email" name="email" type="email" required={true} placeholder="Expiry date (MM/YY)" />
                            </div>
                            <div className="relative">
                                <TextInput first={false} second={false} last={true} error={errors.email?.message} register={register}  id="email" label="email" name="email" type="email" required={true} placeholder="CVC" />
                            </div>
                        </div>
                        <div>
                            <label className="space-x-4 items-center flex">
                                <input type="checkbox" className="w-5 h-5 flex-none border border-[#E9E9E9]" />
                                <span className="text-sm text-grey">Hereby I accept the MyKey subscription agreement</span>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex space-x-8 mt-16">
                <div className="w-40">
                    <Button text="Activate account" onClick={() => {}} />
                </div>
            </div>
        </div>
    )
}

export default PaymentDetails