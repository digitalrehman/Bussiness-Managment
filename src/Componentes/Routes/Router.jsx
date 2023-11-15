import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mirpurkhas from '../Mirpurkhas/Mirpurkhas'
import Home from '../Home/Home'
import Karachi from '../Karachi/Karachi'
import NovKarLoop from '../Karachi Data Looping/NovKarLoop'
import NovLoop from '../Mirpurkhas Data Looping/NovLoop'
import Collections from '../Collections/Collections'
import Debit from '../Debit Details/Debit'
import Afzal_Hussain from '../Debit Details/Afzal_Hussain'
import Akbar_Adil from '../Debit Details/Akbar_Adil'
import Anwar_Adil from '../Debit Details/Anwar_Adil'
import Ayaz_Adil from '../Debit Details/Ayaz_Adil'
import Eram from '../Debit Details/Eram'
import Faqeer_M_Saleem from '../Debit Details/Faqeer_M_Saleem'
import Ghazala from '../Debit Details/Ghazala'
import Rasool_Bakhsh from '../Debit Details/Rasool_Bakhsh'
import Raziya from '../Debit Details/Raziya'
import Rukhsana from '../Debit Details/Rukhsana'
import Sana from '../Debit Details/Sana'
import Summra from '../Debit Details/Summra'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Mirpurkhas' element={<Mirpurkhas/>}/>
        <Route path='/Karachi' element={<Karachi/>}/>
        <Route path='/NovLoop' element={<NovLoop/>}/>
        <Route path='/NovKarLoop' element={<NovKarLoop/>}/>
        <Route path='/Collections' element={<Collections/>}/>
        <Route path='/Debit' element={<Debit/>}/>
        <Route path='/Afzal_Hussain' element={<Afzal_Hussain/>}/>
        <Route path='/Akbar_Adil' element={<Akbar_Adil/>}/>
        <Route path='/Anwar_Adil' element={<Anwar_Adil/>}/>
        <Route path='/Ayaz_Adil' element={<Ayaz_Adil/>}/>
        <Route path='/Eram' element={<Eram/>}/>
        <Route path='/Faqeer_M_Saleem' element={<Faqeer_M_Saleem/>}/>
        <Route path='/Ghazala' element={<Ghazala/>}/>
        <Route path='/Rasool_Bakhsh' element={<Rasool_Bakhsh/>}/>
        <Route path='/Raziya' element={<Raziya/>}/>
        <Route path='/Rukhsana' element={<Rukhsana/>}/>
        <Route path='/Sana' element={<Sana/>}/>
        <Route path='/Summra' element={<Summra/>}/>
        
      </Routes>
    </>
  )
}

export default Router
