import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextInput from "../input/TextInput";
import logo from "../../assets/svg/logo.svg";
import roundedUser from "../../assets/svg/rounded-user.svg";
import smile from "../../assets/svg/smile.svg";
import thumb from "../../assets/svg/thumb.svg";
import code from "../../assets/svg/code.svg";
import { IFormValues } from "../../utils/interfaces";
import { useContext } from "react";
import { Context } from "../../utils/store";
import Button from "../Button";
import { AuthError } from "../../utils/ErrorHandler";
import { createOrganization } from "../../Requests/OrganizationRequest";
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().required().email(),
  website: yup.string().url().required(),
  company: yup.string().required(),
  phone: yup.string().required(),
});

const BusinessAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });

  const { state, dispatch } = useContext(Context);

  const history= useHistory()

  const onDone=(data:Record<string,any>)=>{
      history.replace("/overview")
  }
  
  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    createOrganization(dispatch, data, onDone)
  };



  return (
    <div className="w-full flex h-screen max-h-screen min-h-screen">
      <div className="w-full md:w-1/2 h-full relative py-4 md:py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <nav className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-2 ">
              <img src={logo} alt="logo" />
              <span className="font-medium text-black">MyIdentikey</span>
            </a>
          </nav>
          <div className="w-full max-w-md mx-auto space-y-8 mt-12 md:mt-16 xl:mt-32">
            <h2 className="font-bold text-2xl text-black">
              Create a business account
            </h2>
            <p className="text-[16px] leading-[26.88px] text-grey max-w-sm ">
              With MyIdentikey, you can validate anything about anyone
            </p>
            {state?.Organization &&
              state.Organization.createOrganizationError &&
              state.Organization.createOrganizationError.status && (
                <AuthError
                  error={state.Organization.createOrganizationError.error}
                />
              )}
            <form
              className="space-y-6 w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="rounded-md">
                <div className="relative">
                  <TextInput
                    first={true}
                    second={false}
                    error={errors.company?.message}
                    register={register}
                    last={false}
                    id="company"
                    label="company"
                    name="company"
                    type="text"
                    required={true}
                    placeholder="Company name"
                  />
                </div>
                <div className="relative">
                  <TextInput
                    first={false}
                    second={false}
                    error={errors.email?.message}
                    register={register}
                    last={false}
                    id="email"
                    label="email"
                    name="email"
                    type="email"
                    required={true}
                    placeholder="Company Email Address"
                  />
                </div>
                <div className="relative">
                  <TextInput
                    first={false}
                    second={false}
                    error={errors.phone?.message}
                    register={register}
                    last={false}
                    id="phone"
                    label="phone"
                    name="phone"
                    type="text"
                    required={true}
                    placeholder="Company Phone Number"
                  />
                </div>
                <div className="relative">
                  <TextInput
                    first={false}
                    second={false}
                    error={errors.website?.message}
                    register={register}
                    last={true}
                    id="website"
                    label="website"
                    name="website"
                    type="text"
                    required={true}
                    placeholder="Company website"
                  />
                </div>
              </div>
              <div>
                <Button
                  text="Get Started"
                  onClick={handleSubmit(onSubmit)}
                  loading={state?.Organization.loadingCreateOrganization}
                  disabled={state?.Organization.loadingCreateOrganization}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-light-shade-blue hidden md:flex items-center justify-center">
        <ul className="grid grid-cols-2 gap-x-6 lg:gap-x-32 gap-y-12 max-w-3xl px-6">
          <li className="space-y-4">
            <img src={roundedUser} alt="rounded user icon" />
            <h3 className="text-black font-medium text-base">
              Validate everything
            </h3>
            <p className="text-[14px] leading-[23.52px] text-grey">
              Validate anything about anyone and leverage data to strengthen
              your relationship with your customers
            </p>
          </li>
          <li className="space-y-4">
            <img src={smile} alt="smile icon" />
            <h3 className="text-black font-medium text-base">
              Validate everything
            </h3>
            <p className="text-[14px] leading-[23.52px] text-grey">
              Harness the power of self-sovereign identity to maintain, share,
              and control the source of truth
            </p>
          </li>
          <li className="space-y-4">
            <img src={thumb} alt="thumb icon" />
            <h3 className="text-black font-medium text-base">
              Validate everything
            </h3>
            <p className="text-[14px] leading-[23.52px] text-grey">
              Manage data better with tamper-proof credentials and easy
              integration with your existing systems
            </p>
          </li>
          <li className="space-y-4">
            <img src={code} alt="code icon" />
            <h3 className="text-black font-medium text-base">
              Validate everything
            </h3>
            <p className="text-[14px] leading-[23.52px] text-grey">
              Push-button deploy” on premises or the cloud
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BusinessAccount;
