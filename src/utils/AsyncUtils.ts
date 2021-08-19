export const asyncActionName = (basename:string) => ({
  loading: `${basename}_LOADING`,
  failure: `${basename}_FAILING`,
  success: `${basename}_SUCCESS`,
});

export interface IActionUtil{
  loading:(bool:boolean)=>{type:string, payload:boolean};
  success:(payload:any)=>{type:string, payload:any}
  failure:(bool:boolean, error:string|string[]|null)=>{type:string, payload:{[key:string]:any}}
}

export const asyncActions = (actionName:string) => ({
  loading: (bool:boolean) => ({
    type: asyncActionName(actionName).loading,
    payload: bool,
  }),
  success: (payload:any) => ({
    type: asyncActionName(actionName).success,
    payload,
  }),
  failure: (bool:boolean, error:string|string[]|null) => ({
    type: asyncActionName(actionName).failure,
    payload: { error, status: bool },
  }),
});
