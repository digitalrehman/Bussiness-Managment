import React from "react";

const Collections = () => {
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="col-12">
            <div className="text-center my-3">
              <h1 className="fw-bold text-light">Monthly Reports</h1>
            </div>
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col" className="text-primary">
                    City
                  </th>
                  <th scope="col" className="text-primary">
                    Month
                  </th>
                  <th scope="col" className="text-primary">
                    Sale
                  </th>
                  <th scope="col" className="text-primary">
                    Profit
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Karachi</th>
                  <th scope="row">November</th>
                  <td>259290</td>
                  <td>115325</td>
                </tr>
                <tr>
                  <th scope="row">Mirpurkhas</th>
                  <th scope="row">November</th>
                  <td>918690</td>
                  <td>213200</td>
                </tr>
                <tr>
                  <th scope="row">Karachi</th>
                  <th scope="row">December</th>
                  <td>399260</td>
                  <td>179325</td>
                </tr>
                <tr>
                  <th scope="row">Mirpurkhas</th>
                  <th scope="row">December</th>
                  <td>1595645</td>
                  <td>316500</td>
                </tr>
              </tbody>
            </table>
            <div className="col-10 text-center">
              <div>
                <h1 className="fw-bold text-light">Debit Details</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
