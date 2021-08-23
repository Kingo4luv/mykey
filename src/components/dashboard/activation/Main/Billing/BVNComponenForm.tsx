import TextInput from "../../../../input/TextInput";
import { IFormValues } from "../../../../../utils/interfaces";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../../Button";
import { useState } from "react";
import {
  getOrganization,
  reserveAccount,
} from "../../../../../Requests/OrganizationRequest";
import { getActiveOrganizationId } from "../../../../../utils/helper";
import { AuthError } from "../../../../../utils/ErrorHandler";
import { useContext } from "react";
import { Context } from "../../../../../utils/store";

const schema = yup.object().shape({
  bvn: yup.string().required(),
});

const BVNComponentForm = () => {
  const { dispatch, state } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const organizationId = getActiveOrganizationId();
  const [err, setErr] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    setLoading(true);
    setErr(null);
    reserveAccount(organizationId as string, data, _onDone, _onError);
  };

  const _onDone = () => {
    setErr(null);
    setLoading(false);
    getOrganization(dispatch, organizationId as string);
  };

  const _onError = (err: string | Array<string>) => {
    setErr(err as any);
    setLoading(false);
  };

  return (
    <form className="space-y-5 w-full" onSubmit={handleSubmit(onSubmit)}>
      <h4 className="text-sm font-medium text-black">
        Director’s Bank Verification Number *
      </h4>
      {err && <AuthError error={err} />}

      <div className="rounded-md w-full flex justify-around items-center g-x-4 flex-wrap">
        <div className="w-8/12">
          <TextInput
            single={true}
            error={errors.bvn?.message}
            register={register}
            id="bvn"
            label="bvn"
            name="bvn"
            type="text"
            required={true}
            placeholder="Enter your BVN"
            disabled={loading || state?.Organization.loadingOrganization}
          />
        </div>
        <div className="w-3/12">
          <Button
            text="Validate"
            onClick={() => {}}
            loading={loading || state?.Organization.loadingOrganization}
            disabled={loading || state?.Organization.loadingOrganization}
          />
        </div>
      </div>
    </form>
  );
};
export default BVNComponentForm;
