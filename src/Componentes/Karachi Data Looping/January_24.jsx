import React from "react";
import { Add_Data_Dec, sum_Ans } from "../DataStore/Januarykarachi24";

const January_24 = () => {
  let { Sumvalue, Sumprofit, Akbar, Anwar } = sum_Ans[0];
  let salary = 103850;
  let akbar_remaining = 123966;
  let anwar_remaining = 122660;
  return (
    <>
      <div className="container-fluid">
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
                <table
                  className="table table-dark table-hover text-center"
                  key={index}
                >
                  <tbody>
                    <tr>
                      <td>{data.date}</td>
                      <td>{data.sale}</td>
                      <td>{data.profit}</td>
                      <td>{data.Akbar}</td>
                      <td>{data.Anwar}</td>
                    </tr>
                  </tbody>
                </table>
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

                <table className="table table-dark table-hover text-center">
                  <thead className="text-center">
                    <tr>
                      <th scope="col" className="fs-5 text-info">
                        Total Salary
                      </th>

                      <th scope="col" className="fs-5 text-info">
                        Akbar Credit
                      </th>
                      <th scope="col" className="fs-5 text-info">
                        Anwar Credit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row"> {salary} </td>
                      <td scope="row"> {salary - Akbar} </td>
                      <td scope="row"> {salary - Anwar} </td>
                    </tr>
                  </tbody>
                </table>

                <h3 className="text-center fw-bold my-4">Remaining Details</h3>
                <table className="table table-dark table-hover text-center">
                  <thead className="text-center">
                    <tr>
                      <th scope="col" className="fs-5 text-info">
                        Name
                      </th>

                      <th scope="col" className="fs-5 text-info">
                        Description
                      </th>
                      <th scope="col" className="fs-5 text-info">
                        Akbar
                      </th>
                      <th scope="col" className="fs-5 text-info">
                        Anwar
                      </th>
                      <th scope="col" className="fs-5 text-info">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row" className="fw-bold text-info">
                        Akbar
                      </td>
                      <td scope="row"> 12/23 previous </td>
                      <td scope="row"> {akbar_remaining}</td>
                      <td scope="row"> {anwar_remaining} </td>
                      <td scope="row">{akbar_remaining + (salary - Akbar)}</td>
                    </tr>
                    <tr>
                      <td scope="row" className="fw-bold text-info">
                        Anwar
                      </td>
                      <td scope="row"> 12/23 previous </td>
                      <td scope="row"> {akbar_remaining} </td>
                      <td scope="row"> {anwar_remaining}</td>
                      <td scope="row">{anwar_remaining + (salary - Anwar)} </td>
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

export default January_24;
