import React, { useState } from "react";
import page3 from "../../assets/IMG/eram.jpeg";
import { Table } from "react-bootstrap";

const Eram = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };
  const data = [
    {
      page: "23",
      Date: "00",
      description: "Total Hissa Bana",
      credit: "1000000",
      debit: "00",
      balance: "1000000",
    },
    {
      page: "23",
      Date: "00",
      description: "Hissa Diya Pehle",
      credit: "00",
      debit: "625000",
      balance: "375000",
    },{
      page: "23",
      Date: "10/01/2023",
      description: "Nakkad Paise Liye",
      credit: "2000000",
      debit: "00",
      balance: "2375000",
    },{
      page: "23",
      Date: "10/05/2023",
      description: "",
      credit: "2200000",
      debit: "00",
      balance: "4575000",
    },{
      page: "23",
      Date: "29/05/2023",
      description: "",
      credit: "120000",
      debit: "00",
      balance: "4695000",
    },{
      page: "23",
      Date: "30/05/2023",
      description: "",
      credit: "252000",
      debit: "00",
      balance: "4947000",
    },{
      page: "23",
      Date: "00",
      description: "",
      credit: "00",
      debit: "5000000",
      balance: "+53000",
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
        Eram
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
          {!visible ? "Page 23" : "Close"}
        </button>
        {visible && (
          <div
            style={{
              width: "95vw",
              height: "100vh",
            }}
          >
            <img src={page3} style={{ height: "auto", width: "100%" }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Eram;
