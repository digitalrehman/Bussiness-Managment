import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mirpurkhas from '../Mirpurkhas/Mirpurkhas'
import Home from '../Home/Home'
import Karachi from '../Karachi/Karachi'
import NovKarLoop from '../Karachi Data Looping/NovKarLoop'
import NovLoop from '../Mirpurkhas Data Looping/NovLoop'
import Collections from '../Collections/Collections'

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
        
      </Routes>
    </>
  )
}

export default Router
