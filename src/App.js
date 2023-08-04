
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ContactUs from "./components/ContactUs"
import POPUP from "./components/POPUP"
import CircularLayout from "./components/CircularLayout"
import Reactchrono from "./components/Reactchrono"
import Slick from "./Slick/index.js"
import ReactPopup from "./ReactPopup/index.js"
import ReactPlayerCode from "./ReactPlayerCode/index.js"
import WhatsAppIntegration from "./components/WhatsAppIntegration"
import TechnologiesPage from "./components/TechnologiesPage"
import IndustriesPage from "./components/IndustriesPage"
import  URLAnalytics from "./components/URLAnalytics"

import "./App.css"


const App=()=>(
  <BrowserRouter>
  <Routes>
    <Route exact path="/" Component={Header}/>
    <Route exact path="/footer" Component={Footer}/>
    <Route exact path="/contactus" Component={ContactUs}/>
    <Route exact path="/popup" Component={POPUP}/>
    <Route exact path="/circular" Component={CircularLayout}/>
    <Route exact path="/technologies" Component={TechnologiesPage}/>
    <Route exact path="/industries" Component={IndustriesPage}/>
    <Route exact path="/whatsapp" Component={WhatsAppIntegration}/>
    <Route exact path="/url" Component={URLAnalytics}/>
    <Route exact path="/chrono" Component={Reactchrono}/>
    <Route exact path="/slick" Component={Slick}/>
    <Route exact path="/RP" Component={ReactPopup}/>
    <Route exact path="/ReactPlayer" Component={ReactPlayerCode}/>
  </Routes>
  </BrowserRouter>
)

export default App;
