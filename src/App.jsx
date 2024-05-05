import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Bienvenida from './pages/bienvenida'
import Sobre from './pages/sobre'
import Blog from './pages/blog'
import Proyectos from './pages/proyectos'
import Enlaces from './pages/enlaces'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Bienvenida />}/>
        <Route path="/sobre" element={<Sobre />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/proyectos" element={<Proyectos />}/>
        <Route path="/enlaces" element={<Enlaces />}/>
      </Routes>
    </>
  )
}

export default App
