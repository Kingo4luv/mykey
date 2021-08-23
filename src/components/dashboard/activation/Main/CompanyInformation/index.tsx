import { useHistory } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../../Button";
import TextInput from "../../../../input/TextInput";
import { IFormValues } from "../../../../../utils/interfaces";
import { useContext } from "react";
import { Context } from "../../../../../utils/store";
import { useEffect } from "react";
import { updateOrganization } from "../../../../../Requests/OrganizationRequest";
import { AuthError } from "../../../../../utils/ErrorHandler";
import { useState } from "react";
import { processFormData } from "../../../../../utils/helper";

const schema = yup.object().shape({
  website: yup.string().required().url(),
  directorName: yup.string().required("Director's fullname is required"),
  rcNumber: yup.string().required("RC Number is required"),
  company: yup.string().required(),
  address: yup.string().required(),
});

const CompanyInformation = () => {
  const { state, dispatch } = useContext(Context);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });

  const [file, setFile] = useState<any>(null);
  const [preview, setPreview]= useState<string|null>(null)

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    let payload: any = {
      name: data.company,
      website: data.website,
      address: data.address,
      rc_number: data.rcNumber,
      director_name: data.directorName,
    };
    if (file) {
      payload = processFormData(file, "logo", payload);
    }
    updateOrganization(
      dispatch,
      state?.Organization.organization?.id as string,
      payload,
      onDone
    );
  };

  const changeScreenHandler = (title: string) => {
    history.push(`/activation/${title}`);
  };

  useEffect(() => {
    if (state?.Organization.organization) {
      setValue("website", state.Organization.organization.website);
      setValue("address", state.Organization.organization.address);
      setValue("company", state.Organization.organization.name);
      setValue("rcNumber", state.Organization.organization.rc_number);
      setValue("directorName", state.Organization.organization.director_name);
      setPreview(state.Organization.organization.logo)
    }
    // eslint-disable-next-line
  }, [state?.Organization.organization]);

  const onDone = () => {
    changeScreenHandler("billing");
  };

  const _openFileManger = () => {
    document.getElementById("logo")?.click();
  };

  const onImageChange = (
    e: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    const img = e?.target.files;
    if (img && img.length > 0) {
      setFile(img[0]);
      setPreview(URL.createObjectURL(img[0]));
    }
  };

  return (
    <div className="py-6 md:py-24 max-w-lg px-4 md:px-12">
      <h3 className="text-xl mt-6 md:mt-12">
        Enter your company and billing details
      </h3>
      <p className="mt-8 text-grey text-[14px] leading-[23.56px] max-w-sm">
        You can also add specific billing address and details.
      </p>

      <div className="mt-10">
        <form className="space-y-12 w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-7">
            <h4 className="text-sm font-medium text-black">
              Company Information
            </h4>
            {state?.Organization.updateOrganizationError &&
              state.Organization.updateOrganizationError.status && (
                <AuthError
                  error={state.Organization.updateOrganizationError.error}
                />
              )}

            <div className="rounded-md">
              <input
                type="file"
                hidden
                id="logo"
                accept="image/png, image/jpeg, image/jpg"
                onChange={onImageChange}
              />
              <div
                className="w-full px-4 cursor-pointer bg-[#F8F8F8] space-y-2 border border-dashed border-[#E9E9E9] rounded-t h-40 flex flex-col justify-center items-center"
                onClick={_openFileManger}
              >
                {
                  preview ? <div className="h-full">
                      <img src={preview} alt="logo peview" className="w-full h-full object-cover object-top"/>
                  </div> :
                  <>
                  
                    {" "}
                    <span>
                      <svg
                        width="32"
                        height="26"
                        viewBox="0 0 32 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.6562 6.29123C23.2068 4.49497 22.1702 2.90033 20.711 1.76053C19.2518 0.620716 17.4536 0.00107653 15.602 1.40143e-06C13.7504 -0.00107373 11.9515 0.616477 10.491 1.75459C9.03044 2.89271 7.992 4.48614 7.54055 6.28187C5.41103 6.48172 3.44034 7.49423 2.03784 9.10909C0.635328 10.7239 -0.0911977 12.817 0.00917114 14.9535C0.10954 17.0901 1.02909 19.1058 2.57681 20.5821C4.12453 22.0583 6.18146 22.8816 8.32034 22.881H11.4395C11.7152 22.881 11.9797 22.7714 12.1747 22.5764C12.3697 22.3814 12.4792 22.117 12.4792 21.8412C12.4792 21.5655 12.3697 21.301 12.1747 21.106C11.9797 20.9111 11.7152 20.8015 11.4395 20.8015H8.32034C7.50111 20.8039 6.68944 20.6449 5.93166 20.3336C5.17388 20.0223 4.48483 19.5648 3.90386 18.9872C2.73054 17.8207 2.06866 16.2359 2.06384 14.5814C2.05901 12.9269 2.71163 11.3383 3.87813 10.1649C5.04463 8.99161 6.62945 8.32974 8.28395 8.32491C8.55073 8.345 8.81546 8.26527 9.02678 8.10121C9.23811 7.93714 9.38096 7.70043 9.42763 7.43699C9.63935 5.95234 10.3796 4.59391 11.5124 3.61118C12.6452 2.62845 14.0945 2.08741 15.5942 2.08741C17.0939 2.08741 18.5432 2.62845 19.676 3.61118C20.8088 4.59391 21.549 5.95234 21.7608 7.43699C21.8151 7.69128 21.9561 7.91881 22.1596 8.08074C22.363 8.24268 22.6164 8.32898 22.8764 8.32491C24.5309 8.32491 26.1176 8.98216 27.2875 10.1521C28.4574 11.322 29.1147 12.9087 29.1147 14.5632C29.1147 16.2177 28.4574 17.8045 27.2875 18.9744C26.1176 20.1443 24.5309 20.8015 22.8764 20.8015H19.7572C19.4815 20.8015 19.217 20.9111 19.022 21.106C18.827 21.301 18.7175 21.5655 18.7175 21.8412C18.7175 22.117 18.827 22.3814 19.022 22.5764C19.217 22.7714 19.4815 22.881 19.7572 22.881H22.8764C24.9996 22.8587 27.0339 22.0253 28.5625 20.5516C30.0911 19.0778 30.9982 17.0752 31.0979 14.9542C31.1976 12.8332 30.4824 10.7544 29.0987 9.14371C27.7151 7.53305 25.7679 6.51251 23.6562 6.29123Z"
                          fill="#5D5B5B"
                        />
                        <path
                          d="M20.0626 15.2979C20.2587 15.4873 20.5213 15.5921 20.7939 15.5897C21.0665 15.5873 21.3273 15.478 21.5201 15.2852C21.7128 15.0924 21.8222 14.8317 21.8246 14.559C21.8269 14.2864 21.7221 14.0238 21.5327 13.8277L16.3341 8.62912C16.1392 8.43421 15.8748 8.32471 15.5991 8.32471C15.3234 8.32471 15.059 8.43421 14.864 8.62912L9.6654 13.8277C9.476 14.0238 9.37121 14.2864 9.37357 14.559C9.37594 14.8317 9.48529 15.0924 9.67806 15.2852C9.87083 15.478 10.1316 15.5873 10.4042 15.5897C10.6768 15.5921 10.9395 15.4873 11.1356 15.2979L14.5593 11.8741V24.96C14.5593 25.2357 14.6689 25.5002 14.8639 25.6952C15.0589 25.8901 15.3233 25.9997 15.5991 25.9997C15.8748 25.9997 16.1393 25.8901 16.3343 25.6952C16.5292 25.5002 16.6388 25.2357 16.6388 24.96V11.8741L20.0626 15.2979Z"
                          fill="#5D5B5B"
                        />
                      </svg>
                    </span>
                    <p className="text-xs text-hair text-center">
                      Click to upload your business logo (jpeg or png format)
                    </p>
                  </>
                }
              </div>
              <div className="relative">
                <TextInput
                  first={false}
                  second={false}
                  error={errors.company?.message}
                  register={register}
                  last={false}
                  id="company"
                  label="company"
                  name="company"
                  type="text"
                  required={true}
                  placeholder="Company Name"
                />
              </div>
              <div className="relative">
                <TextInput
                  first={false}
                  second={false}
                  error={errors.address?.message}
                  register={register}
                  last={false}
                  id="address"
                  label="address"
                  name="address"
                  type="text"
                  required={true}
                  placeholder="Company Address"
                />
              </div>
              <div className="relative">
                <TextInput
                  first={false}
                  second={false}
                  last={true}
                  error={errors.directorName?.message}
                  register={register}
                  id="director_name"
                  label="directorName"
                  name="directorName"
                  type="text"
                  required={true}
                  placeholder="Company Director's Fullname"
                />
              </div>

              <div className="relative">
                <TextInput
                  first={false}
                  second={false}
                  last={true}
                  error={errors.rcNumber?.message}
                  register={register}
                  id="rcNumber"
                  label="rcNumber"
                  name="rcNumber"
                  type="text"
                  required={true}
                  placeholder="RC Number"
                />
              </div>

              <div className="relative">
                <TextInput
                  first={false}
                  second={false}
                  last={true}
                  error={errors.website?.message}
                  register={register}
                  id="website"
                  label="website"
                  name="website"
                  type="url"
                  required={true}
                  placeholder="Company Website"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="flex space-x-8 mt-16">
        <div className="w-40">
          <Button
            text="Next"
            onClick={handleSubmit(onSubmit)}
            loading={state?.Organization.loadingUpdateOrganizations}
            disabled={state?.Organization.loadingUpdateOrganizations}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
