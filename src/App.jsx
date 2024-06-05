import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Settings from './component/Settings';
import Login from './component/Login'
import Register from './component/Register'


function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path="/shop" element={<Settings/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          
        </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
