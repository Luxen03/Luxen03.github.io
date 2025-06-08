import './App.css'
import AppHeader from './templates/AppHeader.tsx'
import AppFooter from './templates/AppFooter.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.tsx'
import Education from './pages/Education.tsx'
import Skills from './pages/Skills.tsx'

function App() {
    return (
        <BrowserRouter>
            <AppHeader />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Education' element={<Education />} />
                <Route path='/Skills' element={<Skills />} />
            </Routes>
            <AppFooter />
        </BrowserRouter>
    )
}

export default App
