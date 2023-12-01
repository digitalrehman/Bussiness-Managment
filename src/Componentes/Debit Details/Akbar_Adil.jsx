import React, { useState } from "react";
import page1 from "../../assets/IMG/akbar.jpeg";
import { Table } from "react-bootstrap";

const Akbar_Adil = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  const data = [
    {
      page: "",
      Date: "00",
      description: "Gold 5 Tola 3 Gram",
      credit: "1148600",
      debit: "00",
      balance: "1148600",
    },
    {
      page: "",
      Date: "00",
      description: "Portion Liya",
      credit: "00",
      debit: "5000000",
      balance: "-3851400",
    },
    {
      page: "",
      Date: "00",
      description: "Portion ke hissay walay",
      credit: "1250000",
      debit: "00",
      balance: "-2601400",
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
        Akbar Adil
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
          {!visible ? "Page 1" : "Close"}
        </button>
        {visible && (
          <div
            style={{
              width: "95vw",
              height: "100vh",
            }}
          >
            <img src={page1} style={{ height: "auto", width: "100%" }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Akbar_Adil;
