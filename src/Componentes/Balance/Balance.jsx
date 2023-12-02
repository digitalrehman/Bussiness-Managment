import React from "react";

const Balance = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center my-3 ">
              <h1 className="fw-bold">Balance</h1>
            </div>
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Page</th>
                  <th scope="col">Name</th>
                  <th scope="col">Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance;
