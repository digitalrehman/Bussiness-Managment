import React, { useState } from "react";
import page2 from "../../assets/IMG/ayaz.jpeg";
import { Table } from "react-bootstrap";

const Ayaz_Adil = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };
  const data = [
    {
      page: "11",
      Date: "05/11/2021",
      description: "Gold 9 Tola 1 Gram",
      credit: "1600000",
      debit: "00",
      balance: "1600000",
    },
    {
      page: "11",
      Date: "00",
      description: "Hajj Time walay",
      credit: "90000",
      debit: "00",
      balance: "1690000",
    },
    {
      page: "11",
      Date: "00",
      description: "Portion walay Hissay ke",
      credit: "1250000",
      debit: "00",
      balance: "2940000",
    },
    {
      page: "11",
      Date: "00",
      description: "2 saal ke hisaab walay",
      credit: "350000",
      debit: "00",
      balance: "3290000",
    },
    {
      page: "11",
      Date: "00",
      description: "Corolla Car",
      credit: "00",
      debit: "2100000",
      balance: "1190000",
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
        Ayaz Adil
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
          {!visible ? "Page 11" : "Close"}
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

export default Ayaz_Adil;
