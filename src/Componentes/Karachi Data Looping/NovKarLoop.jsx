import React from "react";
import { Add_Data } from "../DataStore/AddData";
import NovKarachi_2023 from "../Nov Karachi/NovKarachi_2023";

const NovKarLoop = () => {
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
            {Add_Data.map((data, index) => {
              return (
                <div className="col-12" key={index}>
                  <NovKarachi_2023 data={data} />
                  
                </div>
                
              );
            })}
        </div>
        </div>
      </div>
    </>
  );
};

export default NovKarLoop;
