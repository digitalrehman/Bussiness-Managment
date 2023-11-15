import React from 'react'
import Table from 'react-bootstrap/Table';


const Collections = () => {
  return (
    <>
    <div className="container">
        <div className="row my-3">
            <div className="col-12">
                <div className="text-center">
                    <h1 className='fw-bold text-light'>Total Bussiness Detail</h1>
                </div>
        
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Bussiness Detail</th>
          <th>Mirpurkhas</th>
          <th>Karachi</th>
    
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Total Bussiness</th>
          <td>140860</td>
          <td>53550</td>
      
        </tr>
        <tr>
          <th>Profit</th>
          <td>35400</td>
          <td>35265</td>
  
        </tr>
      </tbody>
    </Table>

              <div className="Text-center my-3">
              <h1 className="fw-bold text-light">Monthly Reports</h1>
              </div>
              <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">November</th>
      <th scope="col">Sale</th>
      <th scope="col">Profit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">December</th>
      <td>0</td>
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

export default Collections
