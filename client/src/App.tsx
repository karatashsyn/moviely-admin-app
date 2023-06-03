import React, { useEffect, useRef, useState } from 'react'
import './Components/NavBar/Navbar'
import Home from './Pages/Home/Home'
import Navbar from './Components/NavBar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddMovie from './Pages/AddMovie/AddMovie'
import SnackBar from './Components/UI/SnackBar/SnackBar'
import { Movie } from './Types/Movie'
import EditMovie from './Pages/EditMovie/EditMovie'
import { adminMovieRepository } from './Repository/Movie/adminMovieRepository'
const admin = { name: 'Mehmet', surname: 'Karsu', email: 'mehmetkarsu@gmail.com' }
function App() {
  const snackBarRef: any = useRef(null)
  const [response, setResponse]: any = useState(null)
  const movieService = new adminMovieRepository()

  const addMovie = async (movie: Movie) => {
    try {
      const result: any = await movieService.store(movie)
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
  const updateMovie = async (movie: Movie) => {
    try {
      const result: any = await movieService.update(movie)
      if (result.status === 200) {
        setResponse({ message: 'Updated successfully', success: true })
      } else {
        setResponse({ message: 'Something went wrong', success: false })
      }
      return result
    } catch (error) {
      console.log(error)

      setResponse({ message: 'Something went wrong', success: false })
    }
  }

  const deleteMovie = async (movie: Movie) => {
    try {
      const result: any = await movieService.delete(movie)
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
            <Route path="/add" element={<AddMovie addMovie={addMovie} />}></Route>
            <Route path="/movies/:id" element={<EditMovie updateMovie={updateMovie} />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
