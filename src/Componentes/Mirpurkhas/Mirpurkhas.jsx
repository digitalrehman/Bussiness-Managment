import React from "react";
import { Link } from "react-router-dom";

const Mirpurkhas = () => {
  return (
    <>
      <div className="container">
        <div className="row m-4">
          <div className="col-12">
            <Link to={"/NovLoop"} className="btn btn-dark btn-lg m-1">
              November
            </Link>
            <Link to={"/"} className="btn btn-dark btn-lg m-1">
              December
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mirpurkhas;
