import React from "react";
import { Add_Data_Dec, sum_Ans } from "../DataStore/januarymirpurkhas";

const JanuaryMir24 = () => {
  let { Sumvalue, Sumprofit, ayaz, afzal } = sum_Ans[0];
  let salary = 103850;
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="col-12">
            <div className="text-center">
              <h1 className="fw-bold text-light">January Details</h1>
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
                    Ayaz
                  </th>
                  <th scope="col" className="fs-5 text-primary">
                    Afzal
                  </th>
                </tr>
              </thead>
            </table>
            {Add_Data_Dec.map((data, index) => (
              <table
                className="table table-dark table-hover text-center"
                key={index}
              >
                <tbody>
                  <tr>
                    <td scope="row">{data.date}</td>
                    <td scope="row"> {data.sale}</td>
                    <td scope="row">{data.profit}</td>
                    <td scope="row">{data.ayaz}</td>
                    <td scope="row">{data.afzal}</td>
                  </tr>
                </tbody>
              </table>
            ))}
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
                        Ayaz
                      </th>
                      <th scope="col" className="fs-5 text-info">
                        Afzal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">{Sumvalue}</td>
                      <td scope="row"> {Sumprofit} </td>
                      <td scope="row"> {ayaz} </td>
                      <td scope="row"> {afzal} </td>
                    </tr>
                  </tbody>
                </table>

                <table className="table table-dark table-hover text-center">
                  <thead className="text-center">
                    <tr>
                      <th scope="col" className="fs-5 text-info">
                        Total Salary
                      </th>
                      <th scope="col" className="fs-5 text-info">
                        Ayaz Credit
                      </th>
                      <th scope="col" className="fs-5 text-info">
                        Afzal Credit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">{salary}</td>
                      <td scope="row">{salary - ayaz} </td>
                      <td scope="row"> {salary - afzal} </td>
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

export default JanuaryMir24;
