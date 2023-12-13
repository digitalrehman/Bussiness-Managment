import React from "react";

import { Link } from "react-router-dom";
const Bank_Details = () => {
  return (
    <div className="container">
      <div className="row m-4">
        <div className="text-center">
          <h1 className="text-light fw-bold">Karachi</h1>
        </div>
        <div className="col-12">
          <Link to="/Karachi_Expense" className="btn btn-dark btn-lg m-1">
            Karachi 11/2023
          </Link>
          <Link to="/Mirpur_Expense" className="btn btn-dark btn-lg m-1">
            Mirpurkhas 11/2023
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bank_Details;
