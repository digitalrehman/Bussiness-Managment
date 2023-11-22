import React from 'react'
import { Link } from 'react-router-dom'

const Debit = () => {
  return (
    <>
      <div>
      <div className="container">
        <div className="row m-4">
            <div className="text-center">
                <h1 className='text-light fw-bold'>Debits</h1>
            </div>
          <div className="col-12">
            <Link to={"/Akbar_Adil"} className="btn btn-dark btn-lg m-1">
              Akbar Adil
            </Link>
            <Link to={"/Anwar_Adil"} className="btn btn-dark btn-lg m-1">
              Anwar Adil
            </Link>
            <Link to={"/Ayaz_Adil"} className="btn btn-dark btn-lg m-1">
              Ayaz Adil
            </Link>
            <Link to={"/Afzal_Hussain"} className="btn btn-dark btn-lg m-1">
              Afzal Hussain
            </Link>
            <Link to={"/Raziya"} className="btn btn-dark btn-lg m-1">
              Raziya
            </Link>
            <Link to={"/Rukhsana"} className="btn btn-dark btn-lg m-1">
              Rukhsana
            </Link>
            <Link to={"/Ghazala"} className="btn btn-dark btn-lg m-1">
              Ghazala
            </Link>
            <Link to={"/Sana"} className="btn btn-dark btn-lg m-1">
              Sana
            </Link>
            <Link to={"/Eram"} className="btn btn-dark btn-lg m-1">
              Eram
            </Link>
            <Link to={"/Summra"} className="btn btn-dark btn-lg m-1">
              Samra
            </Link>
            <Link to={"/Rasool_Bakhsh"} className="btn btn-dark btn-lg m-1">
              Rasool Bakhsh
            </Link>
            <Link to={"/Faqeer_M_Saleem"} className="btn btn-dark btn-lg m-1">
              Faqeer M Saleem
            </Link>
            <Link to={"/Shoaib_Akhtar"} className="btn btn-dark btn-lg m-1">
            Shoaib Akhtar
            </Link>
            <Link to={"/Irfan_Chandaji"} className="btn btn-dark btn-lg m-1">
            Irfan Chandaji
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Debit
