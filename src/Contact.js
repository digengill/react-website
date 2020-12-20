import React, {useState, useEffect} from 'react'
import Particles from 'react-particles-js';
import './Contact.css';


const sty = {
  color : {color:'black'}
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject,setSubject ] = useState("");
  const [body, setBody] = useState("");

  const handleNameChange = e => {
    setName(e.target.value);
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }
  const handleSubjectChange = e => {
    setSubject(e.target.value);
  }
  const handleBodyChange = e => {
    setBody(e.target.value);
  }
  useEffect(() =>
  {
    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(body);

  },[name, email, subject, body]);
  
  const submitEmail = () => {
    setName("");
    setEmail("");
    setSubject("");
    setBody("");
    
    
  };
  
  
  return (
        <div className="contact__div">     
          <form className="_form" onSubmit={submitEmail}>
            <label for="name" >Name:</label><br></br>
            <input  type="text" style={sty.color} onChange={handleNameChange}></input><br></br>
            <label for="email">Email:</label><br></br>
            <input  type="email" style={sty.color} onChange={handleEmailChange} ></input><br></br>
            <label for="subject">Subject:</label><br></br>
            <input  type="text" style={sty.color} onChange={handleSubjectChange}></input><br></br>
            <label for="email" >Body:</label><br></br>
            <input  type="text" style={sty.color} onChange={handleBodyChange} ></input><br></br>
            <input type="submit"></input>
          </form>
        </div> 
    )
}
