import react from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import { Routes,Route } from "react-router-dom";


function App() {

  return (
    <>
    
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}>Home</Route>
      <Route path="/about" element={<About/>}>About</Route>
      <Route path="/contact" element={<Contact/>}>Contact</Route>
      </Routes>
    </>
  )
}

export default App
