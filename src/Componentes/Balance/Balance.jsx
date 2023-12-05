import React from "react";
import { Table } from "react-bootstrap";
const Balance = () => {
  const data = [
    {
      page: "38",
      Name: "Imran Bhai Floor",
      balance: "80000",
    },
    {
      page: "39",
      Name: "Abdullah",
      balance: "200000",
    },
    {
      page: "40",
      Name: "kamran Beg",
      balance: "500000",
    },
    {
      page: "37",
      Name: "Younus Hyderabad",
      balance: "500000",
    },
    {
      page: "36",
      Name: "Shahzad Bhai",
      balance: "600000",
    },
    {
      page: "29",
      Name: "Rasool Bakhsh",
      balance: "900000",
    },
    {
      page: "33",
      Name: "Irfaan Chandija",
      balance: "3100000",
    },
    {
      page: "27",
      Name: "Shoaib Akhtar",
      balance: "2500000",
    },
    {
      page: "26",
      Name: "M Saleem",
      balance: "1275000",
    },
    {
      page: "23",
      Name: "Eram",
      balance: "53000",
    },
    {
      page: "1",
      Name: "Anwar Adil",
      balance: "1939000",
    },
    {
      page: "15",
      Name: "Afzal Hussain",
      balance: "2250000",
    },
    {
      page: "25",
      Name: "Samra",
      balance: "1000000",
    },
    {
      page: "24",
      Name: "Sana",
      balance: "375000",
    },
    {
      page: "22",
      Name: "Ghazala",
      balance: "375000",
    },
    {
      page: "11",
      Name: "Ayaz Adil",
      balance: "1190000",
    },
    {
      page: "5",
      Name: "Akbar Adil",
      balance: "-2601400",
    },
    {
      page: "35",
      Name: "Kareem Bakhsh",
      balance: "-800000",
    }
  ];

  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += parseInt(data[i].balance);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center my-3 ">
              <h1 className="fw-bold">Balance</h1>
            </div>
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
                  <th style={{ textAlign: "center" }}>Page</th>
                  <th style={{ textAlign: "center" }}>Name</th>
                  <th style={{ textAlign: "center" }}>Balance</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.page}</td>
                    <td>{item.Name}</td>
                    <td>{item.balance}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td
                    colSpan="3"
                    style={{ textAlign: "right", fontWeight: "bold" }}
                  >
                    Total Balance : {sum}
                  </td>
                </tr>
              </tfoot>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance;
