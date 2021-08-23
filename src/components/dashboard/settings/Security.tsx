import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../Button";
import TextInput from "../../input/TextInput";
import { IFormValues } from "../../../utils/interfaces";
import {  useState } from "react";
import { changePassword } from "../../../Requests/AuthRequest";
import { AuthError } from "../../../utils/ErrorHandler";

const schema = yup.object().shape({
  password: yup.string().required(),
  newPassword: yup.string().required(),
});

const SettingsSecurity = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors},
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });

  const [errs, setErrors] = useState<string | string[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    setErrors(null);
    setLoading(true);
    changePassword(
      { new_password: data.newPassword, old_password: data.password },
      _onDone,
      _onError
    );
  };

  const _onDone = () => {
    setLoading(false);
    setErrors(null);
    setValue("password", "")
    setValue("newPassword", "")

    //TODO: make a toast instead of alert
    alert("password changed")
  };

  const _onError = (err: string[] | string) => {
    setLoading(false);
    setErrors(err);
  };

  return (
    <div className="General">
      <form className="space-y-12 w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-7">
          <h4 className="text-sm font-medium text-black">Reset Password</h4>
          {errs && <AuthError error={errs} />}

          <div className="rounded-md">
            <div className="relative">
              <button className="absolute right-0 z-20 h-full px-4 flex justify-center items-center">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.41478 0C12.6086 0 16.0977 3.01778 16.8296 7C16.0984 10.9822 12.6086 14 8.41478 14C4.221 14 0.731889 10.9822 0 7C0.731111 3.01778 4.221 0 8.41478 0ZM8.41478 12.4444C10.001 12.4441 11.5402 11.9053 12.7803 10.9162C14.0205 9.92718 14.8881 8.54644 15.2413 7C14.8868 5.45479 14.0186 4.07556 12.7786 3.0878C11.5386 2.10004 10.0001 1.56219 8.41478 1.56219C6.82943 1.56219 5.29098 2.10004 4.05096 3.0878C2.81094 4.07556 1.94271 5.45479 1.58822 7C1.94141 8.54644 2.80908 9.92718 4.04922 10.9162C5.28937 11.9053 6.82853 12.4441 8.41478 12.4444ZM8.41478 10.5C7.48652 10.5 6.59628 10.1313 5.93991 9.47487C5.28353 8.8185 4.91478 7.92826 4.91478 7C4.91478 6.07174 5.28353 5.1815 5.93991 4.52513C6.59628 3.86875 7.48652 3.5 8.41478 3.5C9.34304 3.5 10.2333 3.86875 10.8897 4.52513C11.546 5.1815 11.9148 6.07174 11.9148 7C11.9148 7.92826 11.546 8.8185 10.8897 9.47487C10.2333 10.1313 9.34304 10.5 8.41478 10.5ZM8.41478 8.94444C8.93048 8.94444 9.42505 8.73958 9.78971 8.37493C10.1544 8.01028 10.3592 7.5157 10.3592 7C10.3592 6.4843 10.1544 5.98972 9.78971 5.62507C9.42505 5.26042 8.93048 5.05556 8.41478 5.05556C7.89908 5.05556 7.4045 5.26042 7.03985 5.62507C6.67519 5.98972 6.47033 6.4843 6.47033 7C6.47033 7.5157 6.67519 8.01028 7.03985 8.37493C7.4045 8.73958 7.89908 8.94444 8.41478 8.94444Z"
                    fill="#D1D1D1"
                  />
                </svg>
              </button>
              <TextInput
                first={true}
                second={false}
                error={errors.password?.message}
                register={register}
                last={false}
                id="password"
                label="password"
                name="password"
                type="password"
                required={true}
                placeholder="Current password"
              />
            </div>
            <div className="relative">
              <button className="absolute right-0 z-20 h-full px-4 flex justify-center items-center">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.41478 0C12.6086 0 16.0977 3.01778 16.8296 7C16.0984 10.9822 12.6086 14 8.41478 14C4.221 14 0.731889 10.9822 0 7C0.731111 3.01778 4.221 0 8.41478 0ZM8.41478 12.4444C10.001 12.4441 11.5402 11.9053 12.7803 10.9162C14.0205 9.92718 14.8881 8.54644 15.2413 7C14.8868 5.45479 14.0186 4.07556 12.7786 3.0878C11.5386 2.10004 10.0001 1.56219 8.41478 1.56219C6.82943 1.56219 5.29098 2.10004 4.05096 3.0878C2.81094 4.07556 1.94271 5.45479 1.58822 7C1.94141 8.54644 2.80908 9.92718 4.04922 10.9162C5.28937 11.9053 6.82853 12.4441 8.41478 12.4444ZM8.41478 10.5C7.48652 10.5 6.59628 10.1313 5.93991 9.47487C5.28353 8.8185 4.91478 7.92826 4.91478 7C4.91478 6.07174 5.28353 5.1815 5.93991 4.52513C6.59628 3.86875 7.48652 3.5 8.41478 3.5C9.34304 3.5 10.2333 3.86875 10.8897 4.52513C11.546 5.1815 11.9148 6.07174 11.9148 7C11.9148 7.92826 11.546 8.8185 10.8897 9.47487C10.2333 10.1313 9.34304 10.5 8.41478 10.5ZM8.41478 8.94444C8.93048 8.94444 9.42505 8.73958 9.78971 8.37493C10.1544 8.01028 10.3592 7.5157 10.3592 7C10.3592 6.4843 10.1544 5.98972 9.78971 5.62507C9.42505 5.26042 8.93048 5.05556 8.41478 5.05556C7.89908 5.05556 7.4045 5.26042 7.03985 5.62507C6.67519 5.98972 6.47033 6.4843 6.47033 7C6.47033 7.5157 6.67519 8.01028 7.03985 8.37493C7.4045 8.73958 7.89908 8.94444 8.41478 8.94444Z"
                    fill="#D1D1D1"
                  />
                </svg>
              </button>
              <TextInput
                first={false}
                second={false}
                error={errors.newPassword?.message}
                register={register}
                last={true}
                id="newPassword"
                label="newPassword"
                name="password"
                type="password"
                required={true}
                placeholder="New password"
              />
            </div>
          </div>
        </div>

        <div className="flex space-x-8 mt-16">
          <div className="w-full md:w-40">
            <Button
              text="Save changes"
              onClick={() => {}}
              loading={loading}
              disabled={loading}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SettingsSecurity;
