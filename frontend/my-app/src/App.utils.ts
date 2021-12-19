import { callApiWithErrorHandling } from "./services/errorHandling";

export const handleApiCall = async (apiCall: any, params: any) => {
    const response = await callApiWithErrorHandling({
        apiCall: apiCall,
        params
    });
    return response;
}