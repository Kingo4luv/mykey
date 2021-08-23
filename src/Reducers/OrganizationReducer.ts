import { asyncActionName } from "../utils/AsyncUtils";
import {
  CREATE_ORGANIZATION,
  FETCH_TEAM_MEMBERS,
  CREATE_TEAM_MEMBER,
  FETCH_ORGANIZATION,
  UPDATE_ORGANIZATION
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

      case asyncActionName(FETCH_ORGANIZATION).success:
        return {
          ...state,
          organization: action.payload,
        };
  
      case asyncActionName(FETCH_ORGANIZATION).failure:
        return {
          ...state,
          loadingOrganizationError: action.payload,
        };
      case asyncActionName(FETCH_ORGANIZATION).loading:
        return {
          ...state,
          loadingOrganization: action.payload,
        };

        case asyncActionName(UPDATE_ORGANIZATION).success:
          return {
            ...state,
            organization: action.payload,
          };
    
        case asyncActionName(UPDATE_ORGANIZATION).failure:
          return {
            ...state,
            updateOrganizationError: action.payload,
          };
        case asyncActionName(UPDATE_ORGANIZATION).loading:
          return {
            ...state,
            loadingUpdateOrganizations: action.payload,
          };
    default:
      return state;
  }
};
export default OrganisationReducer;
