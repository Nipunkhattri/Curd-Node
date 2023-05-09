import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import ContactList from './components/Contactlist.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <ToastContainer/>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<ContactList/>}/>
      <Route exact path="/Login" element={<Login/>}/>
      <Route exact path="/Register" element={<Register/>}/>
    </Routes>
    </>
  );
}

export default App;
