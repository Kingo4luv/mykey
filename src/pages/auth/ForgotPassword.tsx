import { Link, useHistory } from "react-router-dom";
import TextInput from "../../components/input/TextInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthLayout from "../../components/auth/layout/index";
import Button from "../../components/Button";
import { useState } from "react";
import { IFormValues } from "../../utils/interfaces";
import { useContext } from "react";
import { Context } from "../../utils/store";
import ResetPassword from "../../components/auth/ResetPassword";
import { forgotPassword } from "../../Requests/AuthRequest";
import { AuthError } from "../../utils/ErrorHandler";

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

const ForgotPassword = () => {
  const { state, dispatch } = useContext(Context);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });

  const history= useHistory()

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    forgotPassword(dispatch, data, _switchView);
  };
  const _switchView = () => {
    setShowChangePassword(!showChangePassword);
  };

  const _redirectLogin=()=>{
      history.push("/login")
  }

  return (
    <AuthLayout>
      {showChangePassword ? (
        <ResetPassword callback={_redirectLogin} />
      ) : (
        <div className="h-full w-full max-w-md mx-auto space-y-6 mt-20 md:mt-52">
          <h2 className="text-2xl font-bold text-black">Forgot password</h2>
          {state?.Auth.forgetPasswordError &&
            state.Auth.forgetPasswordError.status && (
              <AuthError error={state?.Auth.forgetPasswordError?.error} />
            )}
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full relative">
              <TextInput
                first={true}
                error={errors?.email?.message}
                second={false}
                single={true}
                half={true}
                last={true}
                id="email"
                register={register}
                label="email"
                name="email"
                type="email"
                required={true}
                placeholder="Email"
              />
            </div>
            <div className="mt-10">
              <Button
                text="Reset password"
                onClick={handleSubmit(onSubmit)}
                loading={state?.Auth.loadingForgotPassword}
                disabled={state?.Auth.loadingForgotPassword}
              />
            </div>
            <div className="mt-6 flex items-center justify-center">
              <Link to="/login" className="text-sm">
                <span className="text-black font-thin">
                  Remember your password?
                </span>
                <span className="font-medium text-black">Log in</span>
              </Link>
            </div>
          </form>
        </div>
      )}
    </AuthLayout>
  );
};

export default ForgotPassword;
