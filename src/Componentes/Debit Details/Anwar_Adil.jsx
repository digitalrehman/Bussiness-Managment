import React, { useState } from "react";
import page1 from "../../assets/IMG/Page-1.jpeg";

const Anwar_Adil = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row my-3 ">
          <div className="text-center">
            <h1 className="fw-bold text-light">Anwar Adil</h1>
            <p className="text-light fs-5">Debit Information</p>
          </div>
          <div className="col-12">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Page</th>
                  <th scope="col">Date</th>
                  <th scope="col">Description</th>
                  <th scope="col">Credit</th>
                  <th scope="col">Debit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>05/11/2021</td>
                  <td>
                    Committee ke Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.
                  </td>
                  <td>400000</td>
                  <td>0</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>05/11/2021</td>
                  <td>Karachi walay bakaya</td>
                  <td>650000</td>
                  <td>250000</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>05/11/2021</td>
                  <td>Coure Car</td>
                  <td>-50000</td>
                  <td>700000</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>05/11/2021</td>
                  <td>Akbar ne Account main dalay</td>
                  <td>1079000</td>
                  <td>829000</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>05/11/2021</td>
                  <td> mir paise diye 2 saal</td>
                  <td>2679000</td>
                  <td>350000</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>05/11/2021</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>05/11/2021</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
            <div>
              <button onClick={handleClick} className="btn btn-dark fw-bold">
                Page 1
              </button>
              {visible && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "750px",
                    height: "auto",
                  }}
                >
                  <img src={page1} />

                  <button
                    style={{
                      position: "relative",
                      left: "-70px",
                      top: "-390px",
                    }}
                    className="btn btn-danger fw-bold"
                    onClick={() => setVisible(false)}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Anwar_Adil;
