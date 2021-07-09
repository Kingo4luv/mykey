import { Link } from "react-router-dom";
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

const ForgotPassword = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm<IFormValues>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<IFormValues> = data => {
        console.log(JSON.stringify(data));
    };

    return(
        <AuthLayout>
            <div className="h-full w-full max-w-md mx-auto space-y-6 mt-20 md:mt-52">
                <h2 className="text-2xl font-bold text-black">Forgot password</h2>
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full relative">
                        <TextInput first={true} error={errors?.email?.message} second={false} single={true} half={true} last={true} id="email"  register={register} label="email" name="email" type="email" required={true} placeholder="Email" />
                    </div>
                    <div className="mt-10">
                        <Button text="Reset password" onClick={handleSubmit(onSubmit)} />
                    </div>
                    <div className="mt-6 flex items-center justify-center">
                        <Link to="/login" className="text-sm">
                            <span className="text-black font-thin">Remember your password?</span>
                            <span className="font-medium text-black">Log in</span>
                        </Link>
                    </div>
                </form>
            </div>
        </AuthLayout>
    )
}

export default ForgotPassword