import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from "./pages/about.jsx";
//import Footer from "./components/Footer";
//import Header from "./components/Header";
import Contact from "./pages/contact.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Route path="/about" element={<About />} />
    
    <Route path="/contact" element={<Contact />} />

    </>
  )
}

export default App
