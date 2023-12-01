import React, { useState } from "react";
import page2 from "../../assets/IMG/anwar.jpeg";
import { Table } from "react-bootstrap";

const Anwar_Adil = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };
  const data = [
    {
      page: "1",
      Date: "5/11/2021",
      description: "commette",
      credit: "400000",
      debit: "00",
      balance: "400000",
    },
    {
      page: "1",
      Date: "00",
      description: "Karachi Walay",
      credit: "250000",
      debit: "00",
      balance: "650000",
    },
    {
      page: "1",
      Date: "00",
      description: "Coure Car",
      credit: "00",
      debit: "700000",
      balance: "-50000",
    },
    {
      page: "1",
      Date: "00",
      description: "Coure Car sell",
      credit: "300000",
      debit: "00",
      balance: "250000",
    },
    {
      page: "1",
      Date: "00",
      description: "Akbar ne account main paise dalay",
      credit: "829000",
      debit: "00",
      balance: "1079000",
    },
    {
      page: "1",
      Date: "00",
      description: "Akbar se portion ke paise lenay hai",
      credit: "1250000",
      debit: "00",
      balance: "2329000",
    },
    {
      page: "1",
      Date: "00",
      description: "Mir main paise diye",
      credit: "350000",
      debit: "00",
      balance: "2679000",
    },
    {
      page: "1",
      Date: "00",
      description: "HighRoof De",
      credit: "00",
      debit: "740000",
      balance: "1939000",
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
            <img src={page2} style={{ height: "auto", width: "100%" }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Anwar_Adil;
