
import React from 'react';
import { VehicleInfoProps } from './VehicleInfo.type';
export function VehicleInfo(vehicles: any) {
    // console.log(vehicles);
    const tableData: Array<VehicleInfoProps> = vehicles.vehicles;
    return (
        <div>
            {
                tableData && tableData.length > 0 &&
                <table id="simple-board">
                    <thead>
                        <tr>
                            {/* <th>Make</th>
                            <th>Model</th> */}
                            <th>PowerPS</th>
                            <th>PowerKW</th>
                            <th>fuelType</th>
                            <th>bodyType</th>
                            <th>Capacity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item: VehicleInfoProps, index: number) => {
                            // console.log(item, index);
                            return (
                                <tr key={index} id={`row${index}`}>
                                    {Object.values(item).map((value: any, innerindex: number) => {
                                        if(innerindex !== 0 && innerindex !== 1) {
                                            //remove make and model from the table
                                        return (
                                            <td key={`col${index}${innerindex}`}>{value}</td>
                                        )
                                        }
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            }
        </div>
    )
}