import { useContext } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import DashboardLayout from "../../../components/dashboard/Layout";
import SettingsApiKeys from "../../../components/dashboard/settings/ApiKeys";
import SettingsBilling from "../../../components/dashboard/settings/Billing";
import SettingsGeneral from "../../../components/dashboard/settings/General";
import SettingsSecurity from "../../../components/dashboard/settings/Security";
import TeamMembers from "../../../components/dashboard/settings/TeamMembers";
import { getTeamMembers } from "../../../Requests/OrganizationRequest";
import { getActiveOrganizationId } from "../../../utils/helper";
import { Context } from "../../../utils/store";

const Settings = () => {
  const { screen }: { screen: string } = useParams();
  const history = useHistory();
  const {dispatch}= useContext(Context)

  const screens: { [key: string]: any } = {
    general: <SettingsGeneral />,
    security: <SettingsSecurity />,
    "team-members": <TeamMembers />,
    billings: <SettingsBilling />,
    "api-keys": <SettingsApiKeys />,
  };

  const changeScreenHandler = (title: string) => {
    history.push(`/settings/${title}`);
  };

  useEffect(()=>{
    _getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const _getData=async()=>{
   await _getTeamMbers()
  }

  const _getTeamMbers=async()=>{
    await getTeamMembers(dispatch, getActiveOrganizationId() as string);
  }

  return (
    <DashboardLayout>
      <main className="w-full h-full relative overflow-y-auto ml-0 md:ml-[20%] lg:ml-[16.666667%] pt-20 md:pt-28 px-4 md:px-16 space-y-12 pb-12">
        <h2 className="text-2xl text-hair">MyKey Settings</h2>
        <ul className="flex space-x-4 md:space-x-10 border-b overflow-x-auto scrolling-wrapper">
          <li
            onClick={() => changeScreenHandler("general")}
            className={`font-thin text-grey text-sm py-2 md:py-4 whitespace-nowrap relative ${
              screen === "general" && "border-b-2 border-blue"
            }`}
          >
            <button>General</button>
          </li>
          <li
            onClick={() => changeScreenHandler("security")}
            className={`font-thin text-grey text-sm py-2 md:py-4 whitespace-nowrap relative ${
              screen === "security" && "border-b-2 border-blue"
            }`}
          >
            <button>Security</button>
          </li>
          <li
            onClick={() => changeScreenHandler("team-members")}
            className={`font-thin text-grey text-sm py-2 md:py-4 whitespace-nowrap relative ${
              screen === "team-members" && "border-b-2 border-blue"
            }`}
          >
            <button>Team members</button>
          </li>
          <li
            onClick={() => changeScreenHandler("billings")}
            className={`font-thin text-grey text-sm py-2 md:py-4 whitespace-nowrap relative ${
              screen === "billings" && "border-b-2 border-blue"
            }`}
          >
            <button>Billing</button>
          </li>
          <li
            onClick={() => changeScreenHandler("api-keys")}
            className={`font-thin text-grey text-sm py-2 md:py-4 whitespace-nowrap relative ${
              screen === "api-keys" && "border-b-2 border-blue"
            }`}
          >
            <button>API Keys</button>
          </li>
        </ul>
        <div className="max-w-lg space-y-12">{screens[screen]}</div>
      </main>
    </DashboardLayout>
  );
};

export default Settings;
