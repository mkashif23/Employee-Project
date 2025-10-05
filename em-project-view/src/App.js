import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import EmployeeList from './Components/EmployeeList';
import AddEmployee from './Components/AddEmployee';
import UpdateEmployee from './Components/UpdateEmployee';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
  <Routes>
    <Route index element={<EmployeeList/>}/>
    <Route path="/" element={<EmployeeList/>}/>
    <Route path="/add-employee" element={<AddEmployee/>}/>
    <Route path="/editEmployee/:id" element={<UpdateEmployee/>}/>
  </Routes>
    </BrowserRouter>
   
    
    
   
    </>
  );
}

export default App;
