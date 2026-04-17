import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar'


function App() {
  

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<HomePage/>}></Route>
     </Routes>
    </>
  )
}

export default App
