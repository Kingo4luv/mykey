import TextInput from "../../components/input/TextInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../components/Button";
import { IFormValues } from "../../utils/interfaces";
import { useContext } from "react";
import { Context } from "../../utils/store";
import { AuthError } from "../../utils/ErrorHandler";
import { resetPassword } from "../../Requests/AuthRequest";

const schema = yup.object().shape({
  token: yup.string().required(),
  password: yup.string().required(),
});

const ResetPassword = ({ callback }: { callback?: () => void }) => {
  const { state, dispatch } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    resetPassword(dispatch, data, callback)
  };

  return (
    <div className="h-full w-full max-w-md mx-auto space-y-6 mt-20 md:mt-52">
      <h2 className="text-2xl font-bold text-black">Change Password</h2>
      {state?.Auth.resetPasswordError &&
        state.Auth.resetPasswordError.status && (
          <AuthError error={state?.Auth.resetPasswordError?.error} />
        )}
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full relative">
          <TextInput
            first={true}
            error={errors?.token?.message}
            second={false}
            last={false}
            id="token"
            register={register}
            label="token"
            name="token"
            type="token"
            required={true}
            placeholder="Enter Token"
          />
        </div>
        <div className="w-full relative">
          <TextInput
            first={false}
            error={errors?.password?.message}
            second={false}
            last={true}
            id="password"
            register={register}
            label="password"
            name="password"
            type="password"
            required={true}
            placeholder="New Password"
          />
        </div>
        <div className="mt-10">
          <Button
            text="Change password"
            onClick={handleSubmit(onSubmit)}
            disabled={state?.Auth.loadingResetPassword}
            loading={state?.Auth.loadingResetPassword}
          />
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
