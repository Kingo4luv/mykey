import { useContext, useState } from "react";
import {
  requestApproval,
  getOrganization,
} from "../../../../../Requests/OrganizationRequest";
import { AuthError } from "../../../../../utils/ErrorHandler";
import {
  getActiveOrganizationId,
  getTokenInfo,
  toast,
} from "../../../../../utils/helper";
import { Context } from "../../../../../utils/store";
import Button from "../../../../Button";
import BVNComponentForm from "./BVNComponenForm";

const Billing = () => {
  const { state, dispatch } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const organizationId = getActiveOrganizationId();
  const [err, setErr] = useState(null);

  const onSubmit = () => {
    setLoading(true);
    setErr(null);
    requestApproval(organizationId as string, _onDone, _onError);

  };

  const fullname = () => {
    const user = getTokenInfo().user;
    if (user.enrollment.last_name && user.enrollment.first_name) {
      return `${user.enrollment.first_name} ${user.enrollment.last_name}`;
    }
    return user.email;
  };

  const _onDone = () => {
    setErr(null);
    setLoading(false);
    toast(dispatch, {type:"success", text:"activation request has been sent!"})
    getOrganization(dispatch, organizationId as string);
  };

  const _onError = (err: string | Array<string>) => {
    setErr(err as any);
    setLoading(false);
  };

  return (
    <div className="py-6 md:py-24 max-w-xl px-4 md:px-12">
      <h3 className="text-xl mt-6">Billing</h3>

      {!state?.Organization.organization?.bank_info && (
        <div className="mt-4 w-full">
          <BVNComponentForm />
          <p className="mt-8 text-hair font-thin w-full"></p>
        </div>
      )}

      {state?.Organization.organization?.bank_info && (
        <>
          <p className="mt-8 text-hair font-thin">
            We charge 60 naira per calls, for Identity verification checks
          </p>

          {
              err && <AuthError error={err}/>
          }

          <div className="mt-6 md:mt-10 bg-white p-6 rounded space-y-6 shadow-drop-down-shadow">
            <h3 className="text-sm text-black ">
              Proceed to your Banking app to fund your MyIdentikey wallet
            </h3>
            <div className="">
              <dl className="w-full flex justify-between border-b py-6 text-sm text-black">
                <dt>Account Number</dt>
                <dd>
                  {state.Organization.organization.bank_info.account_number}
                </dd>
              </dl>
              <dl className="w-full flex justify-between border-b py-6 text-sm text-black">
                <dt>Bank Name</dt>
                <dd>{state.Organization.organization.bank_info.bank_name}</dd>
              </dl>
              <dl className="w-full flex justify-between py-6 text-sm text-black">
                <dt>Beneficiary Name</dt>
                <dd>MyIdentikey({fullname()})</dd>
              </dl>
            </div>
          </div>
          {/* <p className="mt-8 text-hair text-sm font-thin">
            Are you making more than 10,000 calls? Contact our sales team
          </p> */}

          <div className="flex space-x-8 mt-10">
            <div className="w-full">
              <Button
                text="Request Business activation"
                onClick={onSubmit}
                disabled={state.Organization.loadingOrganization || loading}
                loading={state.Organization.loadingOrganization || loading}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Billing;
