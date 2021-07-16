import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import TextInput from '../../../../input/TextInput';
import Button from '../../../../Button';
import ListButton from '../../../../listbox';
import { useHistory } from 'react-router-dom';

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
const InviteTeam = () => {
    const history = useHistory();
    const { register, handleSubmit, formState:{ errors } } = useForm<IFormValues>({
        resolver: yupResolver(schema)
    });

    const [loading, setLoading] = useState(false)

    const [errorsArr, setErrorsArr] = useState({
        general: "",
    });

    const onSubmit:SubmitHandler<IFormValues> = async (data) =>{}

    const changeScreenHandler = (title:string) => {
        history.push(`/integration/${title}`)
    }

    
   
    return(
        <div className="py-6 max-w-sm">
            <h3 className="text-xl">Invite your team to collaborate</h3>
            <p className="mt-8 text-grey text-[14px] leading-[23.56px] max-w-sm">Invite your team and developers to your project to get started or skip this step.</p>
            <div className="mt-12">
                <form className="space-y-12 w-full" onSubmit={handleSubmit(onSubmit)}>
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
                    <div className="flex space-x-8">
                        <div className="w-40">
                            <Button text="Send invite" onClick={() => changeScreenHandler("activate-webhook")} />
                        </div>
                        <button className="text-black text-sm">Skip  step</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default InviteTeam;