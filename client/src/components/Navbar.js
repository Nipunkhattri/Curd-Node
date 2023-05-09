import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { setLogout } from "../redux/features/authSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css"
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {

  const { user } = useSelector((state) => ({ ...state.auth }));
  // console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(()=>{
  //   const userLoggedIn = localStorage.getItem("profile");
  //   console.log(userLoggedIn);
  //   if (userLoggedIn) {
  //     setLoggedIn(true);
  //   }
  //   const userdata = localStorage.getItem("userData");
  //   if (userdata && loggedIn) {
  //     // Do something with user data
  //     console.log("User data: ", user);
  //   }
  // },[loggedIn])
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  // useEffect(()=>{
  // })
  console.log(user);
  
  const handleLogout = ()=>{
    dispatch(setLogout());
    navigate("/Login")
    toast.success("Logout successfully")
  }
  console.log(isOpen);
  return (
    <>
    <div className='fixed h-20 w-full z-10 bg-navbar-bg'>
    </div>
    <div className= "sidebar">
     {(user === null)?
     <>
     <nav>
      <ul>
        <li ><Link to="/">Home</Link></li>
        <li ><Link to="/Login">Login</Link></li>
        <li ><Link to="/Register">Sign up</Link></li>
      </ul>
     </nav>
     </>
     :
     <>
     <nav>
      <ul>
        {/* <li>Question</li> */}
        <li>
          {/* <div className=' relative top-0 left-1 text-xl'> */}
          <li ><Link to="/">Home</Link></li>
          <h4 className='relative bottom-2 right-1' >{user?.result?.email}</h4>
          {/* </div> */}
          </li>
        <li onClick={handleLogout}><Link to="" className='ml-6 text-lg'>Logout</Link></li>
      </ul>
     </nav>
     </>
     } 
    </div>
     </>
  )
}

export default Navbar
