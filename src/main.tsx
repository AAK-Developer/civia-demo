import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './styles.css'
import Landing from './pages/Landing'
import CitizenApp from './pages/CitizenApp'
import AdminPanel from './pages/AdminPanel'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<CitizenApp />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
