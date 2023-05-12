import React from 'react'
import './components/NavBar/Navbar'
import Home from './pages/Home/Home'
import Navbar from './components/NavBar/Navbar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AddMovie from './pages/AddMovie/AddMovie'
const admin = { name: 'Mehmet', surname: 'Karsu', email: 'mehmetkarsu@gmail.com' }
function App() {
  return (
    <div className="pageWrapper">
      <BrowserRouter>
        <div className="navSection">
          <Navbar admin={admin} />
        </div>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/add" element={<AddMovie />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
