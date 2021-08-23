import { useContext } from "react";
import ActivateMain from "../../../components/dashboard/activation/Main";
import AwaitingActivation from "../../../components/dashboard/activation/Main/AwaitingActivation";
import DashboardLayout from "../../../components/dashboard/Layout";
import { ORGANIZATION_STATUS } from "../../../utils/enum";
import { Context } from "../../../utils/store";

const Activation = () => {
  const { state } = useContext(Context);

  const DisplayStage = () => {
    if (
      state?.Organization.organization?.status?.toLowerCase() ===
      ORGANIZATION_STATUS.pendingActivation
    ) {
      return <AwaitingActivation />;
    }
    return <ActivateMain />;
  };

  return <DashboardLayout>{DisplayStage()}</DashboardLayout>;
};

export default Activation;
