import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"
import Gallery from "./pages/gallery/Gallery"


function App() {

  return (
    <div className="app__container">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
