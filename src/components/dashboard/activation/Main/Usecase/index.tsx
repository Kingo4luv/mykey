import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { updateOrganization } from "../../../../../Requests/OrganizationRequest";
import {
  getBusinessTypes,
  getCountries,
  getVerificationRanges,
} from "../../../../../Requests/PopulateRequest";
import { ICountry, IOrganization } from "../../../../../utils/interfaces";
import { Context } from "../../../../../utils/store";
import Button from "../../../../Button";
import ListButton from "../../../../listbox";
import SelectButton from "../../../Integration/SelectButton";

const _mapListToValue = (
  selectedValue: any,
  list: Array<any>,
  outputLabel?: any
) => {
  const output = list.find(
    (item) => item.name === selectedValue || item.id === selectedValue
  );
  if (output) {
    if (outputLabel) {
      return output[outputLabel];
    }
    return output;
  }
  return undefined;
};
const Usecases = () => {
  const { state, dispatch } = useContext(Context);
  const history = useHistory();

  const [data, setData] = useState<IOrganization>({
    verification_range: null,
    country: null,
    industry: null,
  });

  useEffect(() => {
    if (state?.Organization.organization) {
      setData({
        verification_range: state.Organization.organization.verification_range,
        country: _mapListToValue(
          state.Organization.organization.country,
          state.Populate.countries
        ),
        industry: _mapListToValue(
          state.Organization.organization.industry,
          state.Populate.businessTypes,
          "id"
        ),
      });
    }
  }, [
    state?.Organization.organization,
    state?.Populate.businessTypes,
    state?.Populate.countries,
  ]);

  const changeScreenHandler = (title: string) => {
    history.push(`/activation/${title}`);
  };

  useEffect(() => {
    getCountries(dispatch);
    getBusinessTypes(dispatch);
    getVerificationRanges(dispatch);
    // eslint-disable-next-line
  }, []);

  const _onSelectButtonChange = (target: string, value: any) => {
    setData({ ...data, [target]: value });
  };

  const _onSelectCountry = (value: any) => {
    const { selected } = value;
    if (selected) setData({ ...data, country: selected });
  };

  const _onDone = () => {
    changeScreenHandler("company-information");
  };

  const disableButton = () => {
    return (
      state?.Organization.loadingUpdateOrganizations ||
      Object.keys(data).some((key) => !data[key as keyof IOrganization])
    );
  };

  const onSubmit = () => {
    const payload = { ...data };
    payload.country = data.country.id;
    updateOrganization(
      dispatch,
      state?.Organization.organization?.id as string,
      payload,
      _onDone
    );
  };

  return (
    <div className="py-6 max-w-md px-4 md:px-12">
      <h3 className="text-xl">Tell us about your company and project</h3>
      <p className="mt-8 text-grey text-[14px] leading-[23.56px] max-w-sm">
        This information will help us serve you better and allow our compliance
        team to activate your account.
      </p>

      <div className="mt-10">
        <h4 className="text-sm font-medium text-black">
          Which industry do you serve?
        </h4>
        <div className="mt-10 grid grid-cols-3 gap-2 md:gap-x-4">
          {state?.Populate.businessTypes &&
            state.Populate.businessTypes.length > 0 &&
            state.Populate.businessTypes.map((type) => {
              return (
                <SelectButton
                  key={type.id}
                  text={type.name}
                  value={type.id}
                  selectedValue={data.industry}
                  handleSelected={(value) =>
                    _onSelectButtonChange("industry", value)
                  }
                />
              );
            })}
        </div>
      </div>
      <div className="mt-10">
        <h4 className="text-sm font-medium text-black">
          How many verifications do you expect per month?
        </h4>
        <div className="mt-10 grid grid-cols-3 gap-2 md:gap-x-4">
          {state?.Populate.verificationRanges &&
            state.Populate.verificationRanges.map((range, idx) => {
              return (
                <SelectButton
                  key={idx}
                  text={range}
                  value={range}
                  selectedValue={data.verification_range}
                  handleSelected={(value) =>
                    _onSelectButtonChange("verification_range", value)
                  }
                />
              );
            })}
        </div>
      </div>
      <div className="mt-10">
        <h4 className="text-sm font-medium text-black">
          What country do you operate in?
        </h4>
        <div className="mt-10 w-full">
          <ListButton
            last={true}
            single={true}
            input="Nigeria"
            title={state?.Organization.organization?.country || "Country"}
            items={
              state?.Populate.countries.sort(
                (a: any, b: any) => a.name - b.name
              ) as ICountry[]
            }
            listChanged={_onSelectCountry}
          />
        </div>
      </div>

      <div className="flex space-x-8 mt-16">
        <div className="w-40">
          <Button
            text="Next"
            onClick={onSubmit}
            loading={state?.Organization.loadingUpdateOrganizations}
            disabled={disableButton()}
          />
        </div>
      </div>
    </div>
  );
};

export default Usecases;
