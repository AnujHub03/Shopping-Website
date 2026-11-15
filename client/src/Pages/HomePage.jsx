import React from 'react'
import MainPage from '../Components/MainPage'
import BestSeller from '../Components/BestSeller'
import Offer from '../Components/Offer'

const HomePage = () => {
  return (
    <>
    <div >
      <MainPage/>
    </div>
    <div >
      <BestSeller/>
    </div>
    <div >
      <Offer/>
    </div>
    </>
  )
}

export default HomePage