export interface CommonResponse {
  data: Array<any>;
}

export interface ApiCallWithErrorHandling {
  apiCall: (params: any) => any;
  params: any;
}
export enum FetchErrorCodes {
  NoPageFound = 404,
  Unauthorized = 401,
  IncorrectInput = 400,
  ServerError = 500,
}

export enum FetchErrorStatus {
  ParsingError = 'PARSING_ERROR',
}

export interface ApiError {
  data?: any;
  originalStatus: FetchErrorCodes | number;
  status: FetchErrorStatus | string;
}

export interface ServerError extends ApiCallWithErrorHandling {
  error: any;
  errorCode?: number;
}