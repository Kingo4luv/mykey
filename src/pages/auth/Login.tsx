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
});

const Login = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm<IFormValues>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<IFormValues> = data => {
        console.log(JSON.stringify(data));
    };

    return(
        <AuthLayout>
            <div className="h-full w-full max-w-md mx-auto space-y-6 mt-20 md:mt-52">
                <h2 className="text-2xl font-bold text-black">Welcome back</h2>
                <p className="text-sm text-grey">Use form below to sign in to MyKey</p>
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full relative">
                        <TextInput first={true} error={errors?.email?.message} second={false}  last={false} id="email"  register={register} label="email" name="email" type="email" required={true} placeholder="Email" />
                    </div>
                    <div className="w-full relative">
                        <TextInput first={false} error={errors?.password?.message} second={false} last={true} id="password"  register={register} label="password" name="password" type="password" required={true} placeholder="Password" />
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="h-[18px] w-[18px]"/>
                            <span className="text-sm text-grey">Remember me</span>
                        </label>
                        <a href="/forgot-password" className="text-sm">
                            <span className="text-grey font-thin">Forgot password?</span>
                        </a>
                    </div>
                    <div className="mt-10">
                        <Button onClick={handleSubmit(onSubmit)} text="Login" />
                    </div>
                </form>
            </div>
        </AuthLayout>
    )
}

export default Login