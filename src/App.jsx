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
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <darkModeContext.Provider value={{ setDarkMode, darkMode }}>
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
    </darkModeContext.Provider>
  )
}

export default App
