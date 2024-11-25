import { Outlet } from 'react-router-dom'

import Header from './component/header'
import Footer from './component/footer'

import './App.css'

export default function App() {

  return (
    <>
    <Header />
      <Outlet />
    <Footer />
    </>
  )
}
