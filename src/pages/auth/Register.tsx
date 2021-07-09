import TextInput from "../../components/input/TextInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import AuthLayout from '../../components/auth/layout/index'
import Button from '../../components/Button'

interface IFormValues {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  phone?: string;
  location?: string;
  password?: string;
  retypePassword?: string;
}

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
  retypePassword: yup.string().required(),
});

const Register = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm<IFormValues>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<IFormValues> = data => {
        console.log(JSON.stringify(data));
    };

    return(
        <AuthLayout>
            <div className="h-full w-full max-w-md mx-auto space-y-6 mt-20 md:mt-52">
                <h2 className="text-2xl font-bold text-black">Build with Us</h2>
                <p className="text-sm text-grey">Use form below to create an account</p>
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full relative">
                        <TextInput first={true} error={errors?.email?.message} second={false}  last={false} id="email"  register={register} label="email" name="email" type="email" required={true} placeholder="Email" />
                    </div>
                    <div className="w-full relative">
                        <TextInput first={false} error={errors?.phone?.message} second={false} last={false} id="phone"  register={register} label="phone" name="password" type="phone" required={true} placeholder="Phone number" />
                    </div>
                    <div className="w-full relative">
                        <TextInput first={false} error={errors?.password?.message} second={false} last={false} id="password"  register={register} label="password" name="password" type="password" required={true} placeholder="Choose Password" />
                    </div>
                    <div className="w-full relative">
                        <TextInput first={false} error={errors?.retypePassword?.message} second={false} last={true} id="retypePassword"  register={register} label="retypePassword" name="retypePassword" type="password" required={true} placeholder="Retype password" />
                    </div>
                    <div className="mt-4">
                        <label className="flex space-x-3">
                            <input type="checkbox" className="h-4 w-4 flex-none"/>
                            <span className="text-sm text-grey mt-[-4px]">I agree to Verifrica’s Terms of Use and consent to Verifrica's Privacy Statement.</span>
                        </label>
                    </div>
                    <div className="mt-10">
                        <Button onClick={handleSubmit(onSubmit)} text="Create an account" />
                    </div>
                </form>
            </div>
        </AuthLayout>
    )
}

export default Register