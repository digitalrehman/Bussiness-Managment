import React, { useState } from "react";
import page2 from "../../assets/IMG/samra.jpeg";
import { Table } from "react-bootstrap";

const Summra = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };
  const data = [
    {
      page: "25",
      Date: "00",
      description: "Total Hissa",
      credit: "1000000",
      debit: "00",
      balance: "1000000",
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
        Samra
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
            <th style={{ color: "aqua", textAlign: "center" }}>Page</th>
            <th style={{ color: "aqua", textAlign: "center" }}>Date</th>
            <th style={{ width: "300px", color: "aqua", textAlign: "center" }}>
              Description
            </th>
            <th style={{ color: "aqua", textAlign: "center" }}>Credit</th>
            <th style={{ color: "aqua", textAlign: "center" }}>Debit</th>
            <th style={{ color: "aqua", textAlign: "center" }}>Balance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ textAlign: "center" }}>{item.page}</td>
              <td style={{ textAlign: "center" }}>{item.Date}</td>
              <td>{item.description}</td>
              <td style={{ textAlign: "center" }}>{item.credit}</td>
              <td style={{ textAlign: "center" }}>{item.debit}</td>
              <td
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {item.balance}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <button onClick={handleClick} className="btn btn-dark fw-bold my-3">
          {!visible ? "Page 25" : "Close"}
        </button>
        {visible && (
          <div
            style={{
              width: "95vw",
              height: "100vh",
            }}
          >
            <img src={page2} style={{ height: "auto", width: "100%" }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Summra;
