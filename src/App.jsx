import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner.jsx/Banner'

function App() {


  return (
    <>

      <Navbar></Navbar>

      <Banner></Banner>


      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
