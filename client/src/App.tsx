import React, { Ref, useEffect, useRef, useState } from 'react'
import './components/NavBar/Navbar'
import Home from './pages/Home/Home'
import Navbar from './components/NavBar/Navbar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AddMovie from './pages/AddMovie/AddMovie'
import SnackBar from './components/UI/SnackBar/SnackBar'
import { adminMovieRepository } from './Repository/Movie/adminMovieRepository'
import { Movie } from './Types/Movie'
const admin = { name: 'Mehmet', surname: 'Karsu', email: 'mehmetkarsu@gmail.com' }
function App() {
  const snackBarRef: any = useRef(null)
  const [response, setResponse]: any = useState({ message: null, success: null })
  const movieRep = new adminMovieRepository()

  const addMovie = async (movie: Movie) => {
    const result: any = await movieRep.store(movie)
    if (result.status === 200) {
      setResponse({ message: 'Added successfully', success: true })
    } else {
      setResponse({ message: 'Something went wrong', success: false })
    }
    return result
  }

  const deleteMovie = async (movie: Movie) => {
    const result: any = await movieRep.delete(movie)
    if (result.status === 204) {
      setResponse({ message: 'Deleted successfully', success: true })
    } else {
      setResponse({ message: 'Something went wrong', success: false })
    }
    return result
  }

  useEffect(() => {
    snackBarRef.current!.handleShow()
  }, [response])

  return (
    <div className="pageWrapper">
      <SnackBar ref={snackBarRef} message={response.message} success={response.success} />
      <BrowserRouter>
        <div className="navSection">
          <Navbar admin={admin} />
        </div>
        <Routes>
          <Route index element={<Home addMovie={addMovie} deleteMovie={deleteMovie} />}></Route>
          <Route path="/add" element={<AddMovie />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
