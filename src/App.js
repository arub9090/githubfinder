import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import About from "./components/pages/About"
import AboutArif from "./components/pages/AboutArif"
import Home from "./components/pages/Home"
import NotFound from "./components/pages/NotFound"
export default function App() {
  return (
    
    <Router>
      <div className="flex flex-col justify-between h-screen">
      <Navbar></Navbar>
      <main className="container mx-auto px-3 pb-12">
        <Routes>
         <Route path='/' element={<Home /> }/>
         <Route path='/about' element={<About /> }/>
         <Route path='/notfound' element={<NotFound /> }/>
         <Route path='/*' element={<NotFound /> }/>
         <Route path='/aboutarif' element={<AboutArif />} />
          

        </Routes>
        
      </main>
      <Footer />
      </div>
    </Router>
    
  )
}
