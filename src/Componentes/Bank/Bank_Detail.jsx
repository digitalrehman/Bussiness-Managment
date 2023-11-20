// eslint-disable-next-line no-unused-vars
import React from "react";
import { sum_Ans, Bank } from "../DataStore/Bank";
const Bank_Detail = () => {
  let { Summir, Sumk, Sumprofit, Sumkar } = sum_Ans[0];
  return (
    <>
      <div className="container-fluid">
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
                    CR Mir
                  </th>
                  <th scope="col" className="text-primary">
                    CR Kar
                  </th>
                  <th scope="col" className="text-primary">
                    DE Mir
                  </th>
                  <th scope="col" className="text-primary">
                    DE Kar
                  </th>
                </tr>
              </thead>
              {Bank.map((data,_id) => (
                <tbody key={_id}>
                  <tr>
                    <td>{data.date}</td>
                    <td>{data.name}</td>
                    <td>{data.credit_mir}</td>
                    <td>{data.credit_kar}</td>
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
                        Total CR Mir
                      </th>
                      <th scope="col" className="fs-5 text-info">
                        Total CR Kar
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
                      <td scope="row">{Summir}</td>
                      <td scope="row">{Sumk}</td>
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
