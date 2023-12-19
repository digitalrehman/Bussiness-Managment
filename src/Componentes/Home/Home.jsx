import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row my-5">
          <div className="col-12">
            <h1 className="text-light">
              <span className="text-dark fw-bold">Welcome!</span> Adil Brothers
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
             <br/>
              <br/>
            <Link
              to="/Collections"
              className="text-light text-decoration-none p-2 bg-dark rounded-2 m-1"
            >
              Business
            </Link>
            <Link
              to="/Bank_Detail"
              className="text-light text-decoration-none p-2 bg-dark rounded-2 m-1"
            >
              Expense
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
