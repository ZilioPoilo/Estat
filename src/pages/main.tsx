import React from 'react'
import ReactDOM from 'react-dom/client'
import {WelcomeComponent, Header, Footer, WhyUs, Properties} from "../";

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <WelcomeComponent/>
    <WhyUs/>
    <Properties/>
    <Footer/>
  </React.StrictMode>
)
