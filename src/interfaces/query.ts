export enum QueryState {
  Idle = 'Idle',
  Loading = 'Loading',
  Error = 'Error',
  Success = 'Success',
}

export interface RequestConfigPayload {
  controller?: AbortController;
}
