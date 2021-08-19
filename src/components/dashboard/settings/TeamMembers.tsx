import { useContext } from "react";
import { useState } from "react";
import { Context } from "../../../utils/store";
import InviteTeamMember from "../../modal/InviteTeam";

const TeamMembers = () => {
  const [isOpen, setIsopen] = useState(false);
  const toggleModal = () => {
    setIsopen(!isOpen);
  };
  const { state } = useContext(Context);

  const _formatRole = (role: string) => {
    return role.replace("-", " ");
  };

  return (
    <>
      {isOpen && <InviteTeamMember toggleModal={toggleModal} />}
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium text-black">Team members</h3>
        <button className="text-sm font-medium text-blue" onClick={toggleModal}>
          +Invite team mate
        </button>
      </div>
      <div className="w-full bg-white px-6 py-2 rounded border border-[#D1D1D1">
        <table className="w-full text-left">
          <thead>
            <tr className="">
              <th className="py-4 text-sm text-hair">Email</th>
              <th className="py-4 text-sm text-hair">Role</th>
              <th className="py-4 text-sm text-hair text-right">Options</th>
            </tr>
          </thead>
          <tbody>
            {!state?.Organization.loadingTeams &&
              state?.Organization.team &&
              state?.Organization.team.length > 0 &&
              state?.Organization.team.map((tm, idx) => {
                return (
                  <tr key={idx}>
                    <td className="py-4 text-sm text-black">{tm.email}</td>
                    <td className="py-4 text-sm text-black">
                      {tm.role && _formatRole(tm.role)}
                    </td>
                    <td className="py-4 flex space-x-3 items-center justify-end">
                      <p className="text-sm text-black text-right">Can view</p>
                      <span>
                        <svg
                          width="11"
                          height="7"
                          viewBox="0 0 11 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.18804 4.31846L9.0065 0.499998L10.0973 1.59077L5.18804 6.5L0.278809 1.59077L1.36958 0.5L5.18804 4.31846Z"
                            fill="#101010"
                          />
                        </svg>
                      </span>
                    </td>
                  </tr>
                );
              })}

            {!state?.Organization.loadingTeams &&
              state?.Organization.team &&
              state?.Organization.team.length === 0 &&
              <tr aria-colspan={3}>
             
                <td className="py-4 flex space-x-3 items-center justify-end">
                     No Data found
                </td>
            </tr>}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TeamMembers;
