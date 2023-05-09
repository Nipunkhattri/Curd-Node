import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import ContactList from './components/Contactlist.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route exact path="/" element={<ContactList/>}/>
    </Routes>
    </>
  );
}

export default App;
