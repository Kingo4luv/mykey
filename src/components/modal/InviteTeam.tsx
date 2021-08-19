import ModalLayout from ".";
import Button from "../Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IFormValues } from "../../utils/interfaces";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../utils/store";
import { addTeamMembers } from "../../Requests/OrganizationRequest";
import { getActiveOrganizationId } from "../../utils/helper";
import { AuthError } from "../../utils/ErrorHandler";

const schema = yup.object().shape({
  email: yup.string().required().email(),
});

const InviteTeamMember = ({ toggleModal }: { toggleModal: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });

  const { state, dispatch } = useContext(Context);

  const [role, setRole] = useState<string | undefined>("developer");

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    const payload = { ...data, role };
    await addTeamMembers(
      dispatch,
      getActiveOrganizationId() as string,
      payload,
      _onDone
    );
  };

  const _onRoleChange = (
    e: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    setRole(e?.target.value);
  };

  const _onDone=()=>{
     toggleModal()
  }

  return (
    <ModalLayout>
      <div className="max-w-2xl w-112 bg-white rounded shadow  py-2 md:py-6 relative">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="header px-4 md:px-12">
            <h3 className="text-xl text-black mt-5">
              Invite your team to collaborate
            </h3>
            <p className="text-sm text-grey font-thin max-w-sm mt-3">
              Invite your team and developers to your project to get started or
              skip this step.
            </p>
            <button onClick={toggleModal} className="absolute top-5 right-5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 6.2225L14.2225 0L16 1.7775L9.7775 8L16 14.2225L14.2225 16L8 9.7775L1.7775 16L0 14.2225L6.2225 8L0 1.7775L1.7775 0L8 6.2225Z"
                  fill="#101010"
                />
              </svg>
            </button>
            {state?.Organization.addTeamMemberError &&
              state.Organization.addTeamMemberError.status && (
                <AuthError
                  error={state.Organization.addTeamMemberError.error}
                />
              )}

            <div className="mt-6 md:mt-12 relative">
              <input
                className="w-full border rounded focus:outline-none py-4 px-4 text-sm font-thin"
                placeholder="Member email address"
                {...register("email", { required: true })}
              />
              {errors.email?.message !== undefined &&
                errors.email?.message !== "" && (
                  <div className="flex items-center space-x-3 absolute top-[60px] md:top-[63px] w-full bg-white border border-[#A7AFB2] py-3 z-10 shadow-box-shadow rounded text-[10px] sm:text-xs">
                    <span className="absolute -top-2 left-6 w-4 h-4 border-t border-l border-[#A7AFB2] bg-white transform rotate-45 z-[-99]"></span>
                    <span className="">
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16ZM7.2 10.4V12H8.8V10.4H7.2ZM7.2 4V8.8H8.8V4H7.2Z"
                          fill="#FDA828"
                        />
                      </svg>
                    </span>
                    <span>{errors.email?.message}</span>
                  </div>
                )}
            </div>
          </div>
          <div className="body mt-8 md:mt-12 pb-6 space-y-8">
            <div className="">
              <div className="flex justify-between items-center border-t py-3 md:py-6 px-4 md:px-12">
                <div className="flex space-x-4 items-center">
                  <input
                    type="radio"
                    className="w-5 h-5"
                    id="admin"
                    name="role"
                    onChange={_onRoleChange}
                    value="admin"
                    checked={role === "admin"}
                  />
                  <div className="text-sm space-y-[2px]">
                    <h3 className="font-medium text-hair">Administrator</h3>
                    <p className="text-grey font-thin">
                      Best for business owners and company administrators
                    </p>
                  </div>
                </div>
                <span className="hidden sm:block">
                  <svg
                    width="14"
                    height="9"
                    viewBox="0 0 14 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.54564 6.00046L11.6369 0.909178L13.0913 2.36354L6.54564 8.90918L2.54288e-07 2.36354L1.45436 0.909179L6.54564 6.00046Z"
                      fill="#101010"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex justify-between items-center border-t py-3 md:py-6 px-4 md:px-12">
                <div className="flex space-x-4 items-center">
                  <input
                    type="radio"
                    className="w-5 h-5"
                    id="developer"
                    name="role"
                    onChange={_onRoleChange}
                    value="developer"
                    checked={role === "developer"}
                  />
                  <div className="text-sm space-y-[2px]">
                    <h3 className="font-medium text-hair">Developer</h3>
                    <p className="text-grey font-thin">
                      Best for business owners and company administrators
                    </p>
                  </div>
                </div>
                <span className="hidden sm:block">
                  <svg
                    width="14"
                    height="9"
                    viewBox="0 0 14 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.54564 6.00046L11.6369 0.909178L13.0913 2.36354L6.54564 8.90918L2.54288e-07 2.36354L1.45436 0.909179L6.54564 6.00046Z"
                      fill="#101010"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex justify-between items-center border-t py-3 md:py-6 px-4 md:px-12">
                <div className="flex space-x-4 items-center">
                  <input
                    type="radio"
                    className="w-5 h-5"
                    id="view"
                    name="role"
                    onChange={_onRoleChange}
                    value="view only"
                    checked={role === "view only"}
                  />
                  <div className="text-sm space-y-[2px]">
                    <h3 className="font-medium text-hair">View Only</h3>
                    <p className="text-grey font-thin">
                      Best for business owners and company administrators
                    </p>
                  </div>
                </div>
                <span className="hidden sm:block">
                  <svg
                    width="14"
                    height="9"
                    viewBox="0 0 14 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.54564 6.00046L11.6369 0.909178L13.0913 2.36354L6.54564 8.90918L2.54288e-07 2.36354L1.45436 0.909179L6.54564 6.00046Z"
                      fill="#101010"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="px-4 md:px-8 w-full flex justify-between">
              <div className="w-full sm:w-36 hidden sm:block">
                <Button text="Cancel" bordered={true} onClick={toggleModal} disabled={state?.Organization.loadingAddTeamMember} />
              </div>
              <div className="w-full sm:w-36 ">
                <Button
                  text="Send invite"
                  onClick={handleSubmit(onSubmit)}
                  loading={state?.Organization.loadingAddTeamMember}
                  disabled={state?.Organization.loadingAddTeamMember}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </ModalLayout>
  );
};

export default InviteTeamMember;
