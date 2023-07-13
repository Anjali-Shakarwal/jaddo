import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header'
import Service from './components/Service'
import Book from './components/Book'
import Destination from './components/Destination'
import Ads from './components/Ads';
import Subscribe from './components/Subscribe'
import Footer2 from "./components/Footer2"
import Testimonials from "./components/Testimonials"
import './App.css'

const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Header />
      <Book />
      <Destination />
      <Service />
      <Testimonials />
      <Ads />
      <Subscribe />
      <Footer2 />
    </div>
  )
}

export default App