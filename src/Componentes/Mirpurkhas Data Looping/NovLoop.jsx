import React from 'react'
import Nov_2023 from '../November/Nov_2023'
import { Add_Mirpur } from "../DataStore/AddMirData";

const NovLoop = () => {
  return (
    <>
             <div className="container">
        <div className="row my-3">
          <div className="col-12">
          <div className="text-center">
            <h1 className="fw-bold text-light">November Details</h1>
          </div>
          <table className="table table-dark">
            <thead className="text-center">
              <tr>
                <th scope="col" className="fs-5 text-primary">
                  Date
                </th>
                <th scope="col" className="fs-5 text-primary">
                  Sale
                </th>
                <th scope="col" className="fs-5 text-primary">
                  Profit
                </th>
              </tr>
            </thead>
            </table>
            {Add_Mirpur.map((data, index) => {
              return (
                <div className="col-12" key={index}>
                  <Nov_2023 data={data} />
                  
                </div>
                
              );
            })}
        </div>
        </div>
      </div>
   
    </>
  )
}

export default NovLoop
