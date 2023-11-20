// eslint-disable-next-line no-unused-vars
import React from "react";
import { sum_Ans, Bank } from "../DataStore/Bank";
const Bank_Detail = () => {
  let { Sumvalue, Sumprofit, Sumkar } = sum_Ans[0];
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="text-center">
            <h1 className="fw-bold text-light">Bank Details</h1>
          </div>
          <div className="col-12">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col" className="text-primary">
                    Date
                  </th>
                  <th scope="col" className="text-primary">
                    Name
                  </th>
                  <th scope="col" className="text-primary">
                    Credit
                  </th>
                  <th scope="col" className="text-primary">
                    Debit Mir
                  </th>
                  <th scope="col" className="text-primary">
                    Debit Kar
                  </th>
                </tr>
              </thead>
              {Bank.map((data) => (
                <tbody key={data._id}>
                  <tr>
                    <td>{data.date}</td>
                    <td>{data.name}</td>
                    <td>{data.credit}</td>
                    <td>{data.debit_mir}</td>
                    <td>{data.debit_kar}</td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div className="row">
              <div className="col-10">
                <table className="table table-dark table-hover text-center">
                  <thead className="text-center">
                    <tr>
                      <th scope="col" className="fs-5 text-info">
                        Total Credit
                      </th>
                      <th scope="col" className="fs-5 text-info">
                        Total DE Mir
                      </th>
                      <th scope="col" className="fs-5 text-info">
                        Total DE Kar
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">{Sumvalue}</td>
                      <td scope="row">{Sumprofit}</td>
                      <td scope="row">{Sumkar}</td>
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

export default Bank_Detail;
