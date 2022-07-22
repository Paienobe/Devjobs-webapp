import React from 'react'
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DetailsPage from './pages/DetailsPage'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/jobs/:company' element={<DetailsPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
