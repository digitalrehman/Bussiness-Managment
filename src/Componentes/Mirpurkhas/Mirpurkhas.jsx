import React from "react";
import { Link } from "react-router-dom";

const Mirpurkhas = () => {
  return (
    <>
      <div className="container">
        <div className="row m-4">
          <div className="text-center">
          <h1 className="text-light fw-bold">Mirpurkhas</h1>
          </div>
          <div className="col-12">
            <Link to={"/NovLoop"} className="btn btn-dark btn-lg m-1">
              November
            </Link>
           <Link to={"/Dec_looping_Mir"} className="btn btn-dark btn-lg m-1">
              December
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mirpurkhas;
