import { asyncActionName } from "../utils/AsyncUtils";
import {
  CREATE_ORGANIZATION,
  FETCH_TEAM_MEMBERS,
  CREATE_TEAM_MEMBER
} from "../actions";
import { initialState } from "../utils/store/initialState";
import { Action } from "../utils/interfaces";

const updateTeamList=(prevState:Record<string, any>[], payload:Record<string, any>)=>{
  const team=[payload, ...prevState]
  return team

}

const OrganisationReducer = (state = initialState.Organization, action: Action) => {
  switch (action.type) {
    case asyncActionName(CREATE_ORGANIZATION).success:
      return {
        ...state,
        organization: action.payload,
      };

    case asyncActionName(CREATE_ORGANIZATION).failure:
      return {
        ...state,
        createOrganizationError: action.payload,
      };
    case asyncActionName(CREATE_ORGANIZATION).loading:
      return {
        ...state,
        loadingCreateOrganization: action.payload,
      };

    case asyncActionName(FETCH_TEAM_MEMBERS).success:
      return {
        ...state,
        team: action.payload,
      };

    case asyncActionName(FETCH_TEAM_MEMBERS).failure:
      return {
        ...state,
        loadingTeamsError: action.payload,
      };
    case asyncActionName(FETCH_TEAM_MEMBERS).loading:
      return {
        ...state,
        loadingTeams: action.payload,
      };


    case asyncActionName(CREATE_TEAM_MEMBER).success:
      return {
        ...state,
        team:updateTeamList(state.team ,action.payload),
      };

    case asyncActionName(CREATE_TEAM_MEMBER).failure:
      return {
        ...state,
        addTeamMemberError: action.payload,
      };
    case asyncActionName(CREATE_TEAM_MEMBER).loading:
      return {
        ...state,
        loadingAddTeamMember: action.payload,
      };
    default:
      return state;
  }
};
export default OrganisationReducer;
