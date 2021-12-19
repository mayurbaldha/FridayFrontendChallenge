/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL, FetchMethods, makesEndPoint, modelsEndPoint, vehiclesEndPoint } from '../app/constants';
import { CommonResponse } from '../app/types';
export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  endpoints: (builder) => ({
    getAllCarMakes: builder.mutation<CommonResponse,any>({
      query: () => ({
        url: `${makesEndPoint}`,
        method: FetchMethods.GET,
      }),
    }),
    getAllCarModels: builder.mutation<CommonResponse, any>({
      query: ({ make }) => ({
        url: `${modelsEndPoint}?make=${make}`,
        method: FetchMethods.GET,
      }),
    }),
    getAllVehicles: builder.mutation<CommonResponse, any>({
        query: ({ make,model }) => ({
          url: `${vehiclesEndPoint}?make=${make}&model=${model}`,
          method: FetchMethods.GET,
        }),
      }),
  }),
});

export const {
    useGetAllCarMakesMutation,
    useGetAllCarModelsMutation,
    useGetAllVehiclesMutation
} = carsApi;
