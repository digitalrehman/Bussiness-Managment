import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Mirpurkhas,
  Kareem,
  Balance,
  JanuaryMir24,
  Bank_Detail,
  Karachi_Expense,
  Irfan_Chandaji,
  Dec_looping_Mir,
  December_Looping,
  Shoaib_Akhtar,
  Summra,
  Raziya,
  Sana,
  Rukhsana,
  Ghazala,
  Rasool_Bakhsh,
  Home,
  Ayaz_Adil,
  Faqeer_M_Saleem,
  Eram,
  Karachi,
  Akbar_Adil,
  Anwar_Adil,
  Afzal_Hussain,
  NovKarLoop,
  NovLoop,
  Collections,
  Debit,
  Mirpur_Expense,
  January_24,
  Feberuary,
  FebKarachi,
} from "../index";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mirpurkhas" element={<Mirpurkhas />} />
        <Route path="/Karachi" element={<Karachi />} />
        <Route path="/NovLoop" element={<NovLoop />} />
        <Route path="/NovKarLoop" element={<NovKarLoop />} />
        <Route path="/Collections" element={<Collections />} />
        <Route path="/Debit" element={<Debit />} />
        <Route path="/Afzal_Hussain" element={<Afzal_Hussain />} />
        <Route path="/Akbar_Adil" element={<Akbar_Adil />} />
        <Route path="/Anwar_Adil" element={<Anwar_Adil />} />
        <Route path="/Ayaz_Adil" element={<Ayaz_Adil />} />
        <Route path="/Eram" element={<Eram />} />
        <Route path="/Faqeer_M_Saleem" element={<Faqeer_M_Saleem />} />
        <Route path="/Ghazala" element={<Ghazala />} />
        <Route path="/Rasool_Bakhsh" element={<Rasool_Bakhsh />} />
        <Route path="/Raziya" element={<Raziya />} />
        <Route path="/Rukhsana" element={<Rukhsana />} />
        <Route path="/Sana" element={<Sana />} />
        <Route path="/Summra" element={<Summra />} />
        <Route path="/Bank_Detail" element={<Bank_Detail />} />
        <Route path="/Shoaib_Akhtar" element={<Shoaib_Akhtar />} />
        <Route path="/Irfan_Chandaji" element={<Irfan_Chandaji />} />
        <Route path="/December_Looping" element={<December_Looping />} />
        <Route path="/Dec_looping_Mir" element={<Dec_looping_Mir />} />
        <Route path="/Balance" element={<Balance />} />
        <Route path="/Kareem" element={<Kareem />} />
        <Route path="/Karachi_Expense" element={<Karachi_Expense />} />
        <Route path="/Mirpur_Expense" element={<Mirpur_Expense />} />
        <Route path="/January_24" element={<January_24 />} />
        <Route path="/JanuaryMir24" element={<JanuaryMir24 />} />
        <Route path="/Feberuary" element={<Feberuary />} />
        <Route path="/FebKarachi" element={<FebKarachi />} />
      </Routes>
    </>
  );
};

export default Router;
