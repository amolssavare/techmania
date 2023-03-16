
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import"./style/App.scss";
import"./style/Header.scss";
import"./style/Home.scss";
import"./style/Footer.scss";
import"./style/Contact.scss";
import "./style/mediaquery.scss";



import Header from "./components/Header";
import Contact from "./components/Contact";
import  Footer from "./components/Footer";
import Home from "./components/Home";
import Service from "./components/Service";

function App(){
  return (
    <Router>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
