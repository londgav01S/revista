import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MagazineLayout from './components/Layout/MagazineLayout'
import CoverPage from './pages/CoverPage'
import ArticlePage from './pages/ArticlePage'
import './App.css'

function App() {
  const location = useLocation();

  return (
    <MagazineLayout>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<CoverPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </AnimatePresence>
    </MagazineLayout>
  )
}

export default App
