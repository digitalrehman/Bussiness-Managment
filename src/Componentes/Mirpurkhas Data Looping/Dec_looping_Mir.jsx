import React from "react";
import { Add_Data_Dec, sum_Ans } from "../DataStore/Mir_Dec";
import Dec_Mir from "../November/Dec_Mir";

const Dec_looping_Mir = () => {
  let { Sumvalue, Sumprofit } = sum_Ans[0];
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="col-12">
            <div className="text-center">
              <h1 className="fw-bold text-light">December Details</h1>
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
            {Add_Data_Dec.map((data, index) => {
              return (
                <div className="col-12" key={index}>
                  <Dec_Mir data={data} />
                </div>
              );
            })}
            <div className="row">
              <div className="col-10">
                <table className="table table-dark table-hover text-center">
                  <thead className="text-center">
                    <tr>
                      <th scope="col" className="fs-5 text-info">
                        Total Sale
                      </th>
                      <th scope="col" className="fs-5 text-info">
                        Total Profit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">{Sumvalue}</td>
                      <td scope="row"> {Sumprofit} </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dec_looping_Mir;
