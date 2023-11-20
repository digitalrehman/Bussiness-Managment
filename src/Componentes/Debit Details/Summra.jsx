import React from 'react'

const Summra = () => {
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="text-center">
            <h1 className="fw-bold text-light">Samra</h1>
            <p className="text-light fs-5">Debit Information</p>
          </div>
          <div className="col-12">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Description</th>
                  <th scope="col">Credit</th>
                  <th scope="col">Debit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">15/11/2023</th>
                  <td>Debt</td>
                  <td>1000000</td>
                  <td>0</td>
                </tr>
           
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Summra
