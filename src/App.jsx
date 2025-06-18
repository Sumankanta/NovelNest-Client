import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import MyFooter from './components/MyFooter'

function App() {

  return (
    <>
      <div className=" font-Roboto">
      <Navbar/>
      <Outlet/>
      <MyFooter/>
      </div>
    </>
  )
}

export default App