
import { Home } from './paginas/home/Home'
import { Navbar } from './components/estaticos/navbar/Navbar'
import { Footer } from './components/estaticos/footter/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Aqui ficam os componentes que serão alterados */}

        {/* <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<CadastroUsuario />} /> */}
        <Route path="/home" element={<Home />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
