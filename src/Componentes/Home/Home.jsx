import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-12">
            <h1 className="text-light">
              <span className="text-dark fw-bold">Welcome!</span> Adil Brother's
            </h1>
            <p className="text-light">Welcome to our Managment System</p>
            <Link
              to="/Mirpurkhas"
              className="text-light text-decoration-none p-2 bg-dark rounded-2 m-1"
            >
              Mirpurkhas
            </Link>
            <Link
              to="/Karachi"
              className="text-light text-decoration-none p-2 bg-dark rounded-2 m-1"
            >
              Karachi
            </Link>
            <Link
              to="/Collections"
              className="text-light text-decoration-none p-2 bg-dark rounded-2 m-1"
            >
              Data Information
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
