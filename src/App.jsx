import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner.jsx/Banner'
import TechnologiesSection from './components/TechnologiesSection/TechnologiesSection'
import Footer from './components/Footer/Footer'

const stacksPromise = fetch("/stacks-data.json").then(res => res.json())


function App() {

  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>

      <TechnologiesSection stacksPromise={stacksPromise}></TechnologiesSection>

      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
