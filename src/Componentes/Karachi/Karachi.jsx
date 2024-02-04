import React from "react";
import { Link } from "react-router-dom";

const Karachi = () => {
  return (
    <>
      <div className="container">
        <div className="row m-4">
          <div className="text-center">
          <h1 className="text-light fw-bold">Karachi</h1>
          </div>
          <div className="col-12">
            <Link to={"/NovKarLoop"} className="btn btn-dark btn-lg m-1">
              November
            </Link>
            <Link to={"/December_Looping"} className="btn btn-dark btn-lg m-1">
              December
            </Link>
            <Link to={"/January_24"} className="btn btn-dark btn-lg m-1">
              January 24
            </Link>
               <Link to={"/FebKarachi"} className="btn btn-dark btn-lg m-1">
              February 24
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Karachi;
