import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Alert from "./components/layout/Alert"
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import UniAlert from "./components/layout/UniAlert"
import About from "./components/pages/About"
import AboutArif from "./components/pages/AboutArif"
import Home from "./components/pages/Home"
import NotFound from "./components/pages/NotFound"
import User from "./components/pages/User"
import { AlertProvider } from "./context/alert/AlertContext"

import { GithubProvider } from "./context/github/GithubContext"
import { UniAlertProvider } from "./context/universalAlert/UniAlertContext"

export default function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <UniAlertProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
      <Navbar></Navbar>
      <main className="container mx-auto px-3 pb-12">
        <Alert />
        <UniAlert />
        <Routes>
         <Route path='/' element={<Home /> }/>
         <Route path='/about' element={<About /> }/>
         <Route path='/user/:login' element={<User /> }/>
         <Route path='/notfound' element={<NotFound /> }/>
         <Route path='/*' element={<NotFound /> }/>
         <Route path='/aboutarif' element={<AboutArif />} />
          

        </Routes>
        
      </main>
      <Footer />
      </div>
    </Router>
    </UniAlertProvider>
    </AlertProvider>
    </GithubProvider>
    
  )
}
