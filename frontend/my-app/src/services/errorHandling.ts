// import GenericError from 'components/global/GenericError/GenericError';

import { ApiCallWithErrorHandling, ApiError, CommonResponse, ServerError } from '../app/types';

export async function callApiWithErrorHandling({
  apiCall,
  params,
}: ApiCallWithErrorHandling) {

  const response = await apiCall(params)
    .unwrap()
    .then((data: CommonResponse) => {
      return { isSuccess: true, data, };
    })
    .catch((error: ApiError | any) => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      handleServerError({
        apiCall,
        params,
        errorCode: error.originalStatus,
        error,
      });

      return { isSuccess: false, data: null, errorMessage: null };
    });
  return response;


}

export function handleServerError({
  apiCall,
  params,
  errorCode,
  error,
}: ServerError) {
  console.log(apiCall, params, errorCode, error);
}
