import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Products from './Pages/Products'



function App() {
  

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/Products' element={<Products/>}></Route>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
