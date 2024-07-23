
import 'bootstrap/dist/css/bootstrap.min.css';
import DemoNavbar from './components/Navbar';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Empdetails from './components/Empdetails';
import Footer from './components/Footer';
import AddEmp  from './components/Addemp';
import UpdateEmp from './components/Updateemp';  


function App() {

  return (
    <>
    <DemoNavbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path='/emp/:id' element={<Empdetails/>}/>
     <Route path='/add' element={<AddEmp/>}/>
     <Route path='/update/:id' element={<UpdateEmp/>}/>
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
