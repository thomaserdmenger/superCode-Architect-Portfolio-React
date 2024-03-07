import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Gallery from './pages/Gallery/Gallery'
import Projects from './pages/Projects/Projects'
import Certifications from './pages/Certifications/Certifications'
import Contacts from './pages/Contacts/Contacts'
import Footer from './pages/Footer/Footer'
import { darkModeContext } from './context/Context'
import { useState, useEffect } from 'react'
import Loading from './pages/Loading/Loading'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading)
    }, 1000)
  }, [])

  return (
    <>
      <darkModeContext.Provider value={{ setDarkMode, darkMode }}>
        {loading ? (
          <BrowserRouter>
            <Header />
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/gallery'
                element={<Gallery />}
              />
              <Route
                path='/projects'
                element={<Projects />}
              />
              <Route
                path='/certifications'
                element={<Certifications />}
              />
              <Route
                path='/contacts'
                element={<Contacts />}
              />
            </Routes>
            <Footer />
          </BrowserRouter>
        ) : (
          <Loading />
        )}
      </darkModeContext.Provider>
    </>
  )
}

export default App
