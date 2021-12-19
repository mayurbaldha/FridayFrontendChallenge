import React, { useEffect } from 'react';
import './App.css';
import { handleApiCall } from './App.utils';
import { SelectMenu } from './components/SelectMenu/SelectMenu';
import { VehicleInfo } from './components/SelectMenu/VehicleInfo/VehicleInfo';
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
    const response = await handleApiCall(getCarModel, { make });
    const carModels = response.data;
    if (carModels) {
      setCarModelOptionsList(carModels);
    } else {
      setCarModelOptionsList([]);
    }
  }
  const getCarMakesResponse = async () => {
    const response = await handleApiCall(getCarMakes, {});
    const carMakes = response.data;
    if (carMakes) {
      setCarMakesOptionsList(carMakes);
    } else {
      setCarMakesOptionsList([]);
    }
  }
  useEffect(() => {
    getCarMakesResponse();
    return () => {
      setCarMakesOptionsList([]);
    }
  }, []);
  return (
    <div className="App">

      {carMakesOptionsList.length > 0 && <SelectMenu options={carMakesOptionsList} setSelectedValue={getCarModelResponse} />}
      {carMakesOptionsList.length === 0 && <button onClick={() => getCarMakesResponse()}>Get Car Makes</button>}

      {carModelOptionsList.length > 0 && <SelectMenu options={carModelOptionsList} setSelectedValue={getVehiclesResponse} />}
      {selectedCarMake !== '' && carModelOptionsList.length === 0 && <button onClick={() => getCarModelResponse(selectedCarMake)}>Get Car Models</button>}

      {
        vehiclesInfo && vehiclesInfo.length > 0 &&
        <VehicleInfo vehicles={vehiclesInfo} />
      }
      {vehiclesInfo && vehiclesInfo.length === 0 && <p>No Vehicles Found <button onClick={() => getVehiclesResponse(selectedCarModel)}>Get Vehicles</button></p>}

    </div>
  );
}

export default App;
