import React, { useEffect, useRef, useState } from 'react'
import './components/NavBar/Navbar'
import Home from './pages/Home/Home'
import Navbar from './components/NavBar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddMovie from './pages/AddMovie/AddMovie'
import SnackBar from './components/UI/SnackBar/SnackBar'
import { adminMovieRepository } from './Repository/Movie/adminMovieRepository'
import { Movie } from './Types/Movie'
const admin = { name: 'Mehmet', surname: 'Karsu', email: 'mehmetkarsu@gmail.com' }
function App() {
  const snackBarRef: any = useRef(null)
  const [response, setResponse]: any = useState(null)
  const movieRep = new adminMovieRepository()

  const addMovie = async (movie: Movie) => {
    try {
      const result: any = await movieRep.store(movie)
      if (result.status === 200) {
        setResponse({ message: 'Added successfully', success: true })
      } else {
        setResponse({ message: 'Something went wrong', success: false })
      }
      return result
    } catch (error) {
      setResponse({ message: 'Something went wrong', success: false })
    }
  }

  const deleteMovie = async (movie: Movie) => {
    try {
      const result: any = await movieRep.delete(movie)
      if (result.status === 204) {
        setResponse({ message: 'Deleted successfully', success: true })
      } else {
        setResponse({ message: 'Something went wrong', success: false })
      }
      return result
    } catch (error) {
      setResponse({ message: 'Something went wrong', success: false })
    }
  }

  useEffect(() => {
    if (response) {
      snackBarRef.current!.handleShow()
    }
  }, [response])

  return (
    <>
      {response ? (
        <SnackBar ref={snackBarRef} message={response.message} success={response.success} />
      ) : null}
      <div className="pageWrapper">
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
    </>
  )
}

export default App
