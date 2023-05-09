import React,{useState,useEffect} from 'react'
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Getdata, deletedata, postdata ,updatedata} from '../redux/features/apicontrol.js';
import { error } from 'console';
import './Contact.css'
import { configureStore } from '../redux/store.js';
// import { link } from 'fs/promises';
import {Link} from "react-router-dom"
import { toast } from 'react-toastify';

interface Contact {
    name: string;
    email: string;
    contact: string;
}

interface FormValues {
    name: string;
    email: string;
    contact: string;
  }
interface FormUpdatedValue {
    name: string;
    contact: string;
  }

  interface Props {
    onSubmit: (values: FormValues) => void;
  }

const Contactlist = ({ onSubmit }: Props) => {
   const { user } = useSelector((state) => state.auth);
    const { data } = useSelector((state: configureStore) => state.data);
    console.log(localStorage.getItem('data'));
    const [load,setload] = useState("hello");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);


    // ----------------Read the data---------------------


    useEffect(() => {
        dispatch(Getdata({navigate}))
    }, [load]);
    const [emailu,setemailu] = useState("")

    function handleUpdate(contact: Contact) {
    //     const form = document.getElementsByClassName("formupdated");
    //     form[0].classList.add('visible');
    //     setemailu(contact.email);
    }
    
    // ---------------------Delete the specific data-----------------------

    function handleDelete(contact: Contact) {
        dispatch(deletedata({email: contact.email,navigate}))
        .then(() => {
            setload("hii");
            // dispatch(Getdata({navigate}));
          })
          .catch((err) => {
            // (false);
            console.log(err)
            // setError(error);
          });
      }



      console.log(data);
      useEffect(()=>{
          setContacts(data);
      },[])
      console.log(contacts)



      const [values, setValues] = useState<FormValues>({
        name: "",
        email: "",
        contact: "",
      });
      // const [updatedvalues, setupdatedValues] = useState<FormUpdatedValue>({
      //   name: "",
      //   contact: "",
      // });
      
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
      };
      // const handleChangeupdate = (event: React.ChangeEvent<HTMLInputElement>) => {
      //   const { name, value } = event.target;
      //   setupdatedValues({ ...updatedvalues, [name]: value });
      // };

      // const handleSubmitupdate = (event: React.FormEvent<HTMLFormElement>) => {
      //   event.preventDefault();
      //   console.log(updatedvalues,emailu);
      //   dispatch(updatedata({updatedvalues,emailu,navigate}))
      //   .then(() => {
      //       setload("hiiiuiii");
      //       // dispatch(Getdata({navigate}));
      //     })
      //     .catch((err) => {
      //       // (false);
      //       console.log(err)
      //       // setError(error);
      //     });
      // };
    
      const handlenavigate = () =>{
        toast.error("login please..")
      }

      // -----------------Add the data-------------------

      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // onSubmit(values);
        // setValues({ name: "", email: "", phone: "" });
        console.log(values);
        dispatch(postdata({values,navigate}))
        .then(() => {
            setload("hiii");
            // dispatch(Getdata({navigate}));
          })
          .catch((err) => {
            // (false);
            console.log(err)
            // setError(error);
          });
      };

      console.log(data);

      console.log(values);
      // console.log(updatedvalues);
  return (
    <div>
        <h1>Contact List</h1>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {
            user == null?  
            
              data?.map((contact: Contact) => (
              <tr key={contact.email}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.contact}</td>
              <td><button onClick={() => handleUpdate(contact)}>Update</button></td>
              <td><button onClick={() => handleDelete(contact)}>Delete</button></td>
            </tr>
              ))
          :
          <></>
          }
        </tbody>
      </table>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Add The data</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="contact"
          value={values.contact}
          onChange={handleChange}
          required
        />
      </div>
      {
        user?
        <button type="submit">Submit</button>
        :
        <Link to="/Login">
        <Link className='bt	' to="/Login">Submit</Link>
        </Link>
      }
    </form>
    </div>
  )
}

export default Contactlist
