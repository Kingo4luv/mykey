import { useHistory } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from "../../../../Button"
import ListButton from "../../../../listbox";
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

const roles = {
    title: "Select your company role",
    items: [
        {name: "Frontend Developer"}, 
        {name:"Backend Developer"}, 
        {name:"Mobile Developer"}
    ]
}

const BillingInformation = () => {
    const history = useHistory();
    const { register, handleSubmit, formState:{ errors } } = useForm<IFormValues>({
        resolver: yupResolver(schema)
    });

    const onSubmit:SubmitHandler<IFormValues> = async (data) =>{}

    const changeScreenHandler = (title:string) => {
        history.push(`/activation/${title}`)
    }

    return(
        <div className="py-6 max-w-md">
            <h3 className="text-xl">Enter your company and billing details</h3>
            <p className="mt-8 text-grey text-[14px] leading-[23.56px] max-w-sm">
                You can also add specific billing address and billing contact.
            </p>


            <div className="mt-10">
                <form className="space-y-12 w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-7">
                        <h4 className="text-sm font-medium text-black">Company Information</h4>
                        <div className="rounded-md">
                            <div className="relative">
                                <TextInput first={true} second={false}  error={errors.company?.message} register={register} last={false}  id="company" label="company" name="company" type="text" required={true} placeholder="Name" />
                            </div>
                            <div className="relative">
                                <TextInput first={false} second={false} error={errors.email?.message} register={register} last={false}  id="email" label="email" name="email" type="email" required={true} placeholder="Company Email Address" />
                            </div>
                            <div className="relative">
                                <TextInput first={false} second={false} last={true} error={errors.email?.message} register={register}  id="email" label="email" name="email" type="email" required={true} placeholder="Company Email Address" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-7">
                        <h4 className="text-sm font-medium text-black">Billing contact</h4>
                        <div className="rounded-md">
                            <div className="relative">
                                <TextInput first={true} second={false}  error={errors.company?.message} register={register} last={false}  id="company" label="company" name="company" type="text" required={true} placeholder="Name" />
                            </div>
                            <div className="relative">
                                <TextInput first={false} second={false} error={errors.email?.message} register={register} last={false}  id="email" label="email" name="email" type="email" required={true} placeholder="Company Email Address" />
                            </div>
                            <div className="relative">
                                <ListButton last={true} title={roles.title} items={roles.items} input="" listChanged={() => {}} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex space-x-8 mt-16">
                <div className="w-40">
                    <Button text="Next" onClick={() => changeScreenHandler("payment-details")} />
                </div>
            </div>
        </div>
    )
}

export default BillingInformation