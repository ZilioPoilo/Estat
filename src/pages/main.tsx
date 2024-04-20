import React from 'react'
import ReactDOM from 'react-dom/client'
import {WelcomeComponent, Header, Footer, WhyUs} from "../";

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <WelcomeComponent/>
    <WhyUs/>
    <Footer/>
  </React.StrictMode>
)
