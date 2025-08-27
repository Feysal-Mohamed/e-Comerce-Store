import { Route, Routes } from "react-router-dom"
import Head from "./components/header"
import Home from "./pages/home"
import About from "./pages/about"
import Menue from "./pages/menue"
import Orders from "./pages/orders"
import Contact from "./pages/contact"
import Footer from "./components/footer"


function App() {

  return (
    <>
        <Head />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menue" element={<Menue />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <hr className="mt-5" />
        <Footer />
    </>
  )
}

export default App
