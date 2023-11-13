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
          <td>000</td>
          <td>11520</td>
      
        </tr>
        <tr>
          <th>Profit</th>
          <td>000</td>
          <td>8120</td>
  
        </tr>
      </tbody>
    </Table>
    </div>
        </div>
    </div>
    </>
  )
}

export default Collections
