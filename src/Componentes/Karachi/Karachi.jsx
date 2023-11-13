import React from "react";
import { Link } from "react-router-dom";

const Karachi = () => {
  return (
    <>
      <div className="container">
        <div className="row m-4">
          <div className="Text-center">
          <h1 className="text-light fw-bold">Karachi</h1>
          </div>
          <div className="col-12">
            <Link to={"/NovKarLoop"} className="btn btn-dark btn-lg m-1">
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

export default Karachi;
