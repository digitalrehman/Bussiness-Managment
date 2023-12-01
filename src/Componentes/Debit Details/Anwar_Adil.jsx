import React, { useState } from "react";
import page1 from "../../assets/IMG/Page-1.jpeg";
import { Table } from "react-bootstrap";

const Anwar_Adil = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };
  const data = [
    {
      page: "1",
      description: "This is item 1",
      credit: "34566",
      debit: "456567",
      balance: "5764675",
    },
    {
      page: "1",
      description: "This is item 2 ldfuisdfgsd vycgvzxvcyvfdsy",
      credit: "34566",
      debit: "456567",
      balance: "5764675",
    },
    {
      page: "1",
      description: "This is item 3",
      credit: "34566",
      debit: "456567",
      balance: "5764675",
    },
    {
      page: "1",
      description: "This is item 4",
      credit: "34566",
      debit: "456567",
      balance: "5764675",
    },
    {
      page: "1",
      description: "This is item 5",
      credit: "34566",
      debit: "456567",
      balance: "5764675",
    },
  ];

  return (
    <div>
      <h1
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "13px",
          marginBottom: "10px",
          color: "snow",
        }}
      >
        Anwar Adil
      </h1>
      <Table
        striped
        bordered
        hover
        responsive
        variant="dark"
        style={{ overflowX: "auto" }}
      >
        <thead>
          <tr>
            <th>Page</th>
            <th style={{ width: "270px" }}>Description</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.page}</td>
              <td>{item.description}</td>
              <td>{item.credit}</td>
              <td>{item.debit}</td>
              <td>{item.balance}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <button onClick={handleClick} className="btn btn-dark fw-bold">
         {!visible ? "Page 1" : "Close"} 
        </button>
        {visible && (
          <div
            style={{
              width: "90vw",
              height: "100vh",
            }}
          >
            <img src={page1} style={{height: "100%", width: "100%"}} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Anwar_Adil;
