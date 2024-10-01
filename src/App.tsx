import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { HomePage } from './components/pages/HomePage'
import { ConexoPage } from './components/pages/ConexoPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header text='conexo' />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/conexo/:conexoID' element={<ConexoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
