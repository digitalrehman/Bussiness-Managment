import React from "react";
import { Add_Data_Dec, sum_Ans } from "../DataStore/Add_December";
import December from "../Nov Karachi/December";

const December_Looping = () => {
  let { Sumvalue, Sumprofit, Akbar, Anwar } = sum_Ans[0];
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
                  <th scope="col" className="fs-5 text-primary">
                    Akbar
                  </th>
                  <th scope="col" className="fs-5 text-primary">
                    Anwar
                  </th>
                </tr>
              </thead>
            </table>
            {Add_Data_Dec.map((data, index) => {
              return (
                <div className="col-12" key={index}>
                  <December data={data} />
                </div>
              );
            })}
            <div className="row">
              <div className="col-12">
                <table className="table table-dark table-hover text-center">
                  <thead className="text-center">
                    <tr>
                      <th scope="col" className="fs-5 text-info">
                        Total Sale
                      </th>
                      <th scope="col" className="fs-5 text-info">
                        Total Profit
                      </th>
                      <th scope="col" className="fs-5 text-info">
                        Akbar
                      </th>
                      <th scope="col" className="fs-5 text-info">
                        Anwar
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">{Sumvalue}</td>
                      <td scope="row"> {Sumprofit} </td>
                      <td scope="row"> {Akbar} </td>
                      <td scope="row"> {Anwar} </td>
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

export default December_Looping;
