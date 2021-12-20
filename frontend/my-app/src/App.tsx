import React, { useEffect } from 'react';
import './App.css';
import { handleApiCall } from './App.utils';
import { SelectMenu } from './components/SelectMenu/SelectMenu';
import { VehicleInfo } from './components/VehicleInfo/VehicleInfo';
import { useGetAllCarMakesMutation, useGetAllCarModelsMutation, useGetAllVehiclesMutation } from './services/apiSlice';

function App() {
  const [getCarMakes] = useGetAllCarMakesMutation();
  const [getCarModel] = useGetAllCarModelsMutation()
  const [getVehicles] = useGetAllVehiclesMutation();
  const [carMakesOptionsList, setCarMakesOptionsList] = React.useState<Array<any>>([]);
  const [selectedCarMake, setSelectedCarMake] = React.useState<string>('');
  const [selectedCarModel, setSelectedCarModel] = React.useState<string>('');
  const [carModelOptionsList, setCarModelOptionsList] = React.useState<Array<any>>([]);
  const [vehiclesInfo, setVehiclesInfo] = React.useState<Array<any>>();
  const getVehiclesResponse = async (model: string) => {
    setSelectedCarModel(model);
    const response = await handleApiCall(getVehicles, { model, make: selectedCarMake });
    const vehicles = response.data;
    console.log(vehicles);
    setVehiclesInfo(vehicles);
  }
  const getCarModelResponse = async (make: string) => {
    //  console.log(make);
    setSelectedCarMake(make);
    setVehiclesInfo([]);
    const response = await handleApiCall(getCarModel, { make });
    const carModels = response.data;
    // if (carModels) {
      setCarModelOptionsList(carModels);
    // } else {
    //   setCarModelOptionsList([]);
    // }
  }
  const getCarMakesResponse = async () => {
    const response = await handleApiCall(getCarMakes, {});
    const carMakes = response.data;
    // if (carMakes) {
      setCarMakesOptionsList(carMakes);
    // } else {
    //   setCarMakesOptionsList([]);
    // }
  }
  useEffect(() => {
    getCarMakesResponse();
    // setSelectedCarMake('');
    // setSelectedCarModel('');
    // setVehiclesInfo([]);
    return () => {
      setCarMakesOptionsList([]);
      // setCarModelOptionsList([]);
    }
  }, []);
  return (
    <div className="App">
      {carMakesOptionsList && carMakesOptionsList.length > 0 && <><SelectMenu labelTitle="Select Vehicle Make" options={carMakesOptionsList} setSelectedValue={getCarModelResponse} /></>}
      {carMakesOptionsList== null ? <button onClick={() => getCarMakesResponse()}>Retry to Get Car Makes</button>:null}

      {carModelOptionsList?.length > 0 && <><SelectMenu labelTitle="Select Vehicle Model" options={carModelOptionsList} setSelectedValue={getVehiclesResponse} /></>}
      {selectedCarMake !== '' && carModelOptionsList==null ? <button onClick={() => getCarModelResponse(selectedCarMake)}>Retry to Get Car Models</button>:null}
      {carModelOptionsList?.length === 0 && carMakesOptionsList!=null? <p>No Vehicle Model Found </p>:null}
      {
        vehiclesInfo && vehiclesInfo.length > 0 &&
        <VehicleInfo vehicles={vehiclesInfo} />
      }
      {selectedCarMake !== '' && selectedCarModel!=='' && vehiclesInfo==null  && <button onClick={() => getVehiclesResponse(selectedCarModel)}>Get Vehicles</button>}
      {vehiclesInfo?.length === 0 && carModelOptionsList!=null && carModelOptionsList.length>0? <p>No Vehicles Found </p>:null}
    </div>
  );
}

export default App;
