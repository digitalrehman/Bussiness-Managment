import React from "react";
import { Table } from "react-bootstrap";
const Mirpur_Expense = () => {
  const data = [
    {
      page: "118",
      Date: "11/11/2023",
      description: "11/11 se 30/11 Tak Profit",
      credit: "213200",
      debit: "00",
      balance: "213200",
    },
    {
      page: "118",
      Date: "00",
      description: "Ayaz ne liye",
      credit: "00",
      debit: "66666",
      balance: "146534",
    },
    {
      page: "118",
      Date: "00",
      description: "Afazal ne liye",
      credit: "00",
      debit: "66666",
      balance: "79818",
    },
    {
      page: "118",
      Date: "30/11/2023",
      description: "Shoaib Akhtar ko diye",
      credit: "00",
      debit: "24400",
      balance: "52468",
    },
    {
      page: "118",
      Date: "00",
      description: "Saleem bhai ko diye",
      credit: "00",
      debit: "15300",
      balance: "37168",
    },
  ];
  return (
    <>
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
          Mirpurkhas Expense
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
              <th
                style={{ width: "300px", color: "aqua", textAlign: "center" }}
              >
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
      </div>
    </>
  );
};

export default Mirpur_Expense;
