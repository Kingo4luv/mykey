export interface IOrganization{
  organization:null;
  organizations:Record<string,any>[];
  team:Record<string, any>[];
  teamMember:null;
  loadingAddTeamMember:boolean;
  loadingOrganizations: boolean;
  loadingCreateOrganization:boolean;
  loadingTeams:boolean;
  createOrganizationError?:{ error: string | string[] | null; status: boolean } | null;
  loadingOrganizationError?:{ error: string | string[] | null; status: boolean } | null;
  loadingOrganizationsError?:{ error: string | string[] | null; status: boolean } | null;
  addTeamMemberError?:{ error: string | string[] | null; status: boolean } | null;
  loadingTeamsError?:{ error: string | string[] | null; status: boolean } | null;
}