import React from 'react'
import Table from 'react-bootstrap/Table';


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
      <th scope="col" className="text-primary">Month</th>
      <th scope="col" className="text-primary">Sale</th>
      <th scope="col" className="text-primary">Profit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">November</th>
      <td>259290</td>
      <td>115325</td>
  
    </tr>
      <tr>
      <th scope="row">December</th>
      <td>0</td>
      <td>0</td>
  
    </tr>
  </tbody>
</table>
              <div className="col-10 text-center">
              <div>
                <h1 className="fw-bold text-light">Debit Details</h1>
              </div>
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th>Total Credit</th>
                    <th>Total Debit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>5675000</th>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
    </div>
        </div>
    </div>
    </>
  )
}

export default Collections
