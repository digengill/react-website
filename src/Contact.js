import React, {useState} from 'react'
import './Contact.css';
import axios from 'axios';
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";

import Typography from '@material-ui/core/Typography';

const styles = {
  input: {
    color: "white"
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "rgba(33,182,174,0.2) !important",
  }
};

function Contact(props) {
  const { classes } = props;

  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    body: ""
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value
  }));
  console.log(data);
  };
  
  const submitEmail = () => {
    if (data.name !== "" && data.subject !== "" && data.email !== "" && data.body !== "")
    {
    axios.post('https://guarded-wave-26781.herokuapp.com/submit',{
      to: "gilldigen@gmail.com",
      subject: data.subject,
      text: `${data.body}\n${data.name}\n${data.email}`
    }).then(
      response => {
          console.log(response);
          alert("Message Sent.");
          window.location.reload();
          setData({
            name: "",
            email: "",
            subject: "",
            body: ""
          });
      },
      reject => {
          console.log(reject);
          alert("Error. Please Try Again Soon.");
      }
    );
    }
    else
    {
      alert("Please fill required fields.");
    }
    
  };
  
  
  return (
        <div className="reg_div">     
            
        <form className="register_form" autoComplete="off">
        <Typography variant='h4' >Contact Me</Typography>
        <br></br>
        <TextField
            required
          id="standard-error-helper-text"
          color="primary"
          label="Your Name"
          name="name"
          InputProps={{
            classes: {
                input: classes.input,
                notchedOutline: classes.notchedOutline

            }
          }}
          InputLabelProps={{
            style: { color: '#fff' },
          }}
          variant="outlined"

          onChange={handleChange}
        />
        <br></br>
        <TextField
            required
          id="standard-error-helper-text"
          label="Your Email"
          name="email"
          onChange={handleChange}
          InputProps={{
            classes: {
                input: classes.input,
                notchedOutline: classes.notchedOutline

            }
          }}
          InputLabelProps={{
            style: { color: '#fff' },
          }}
          variant="outlined"

        />
                <br></br>

        <TextField
            required
          id="standard-error-helper-text"
          label="Subject"
          name="subject"
          onChange={handleChange}
          InputProps={{
            classes: {
                input: classes.input,
                notchedOutline: classes.notchedOutline
            }
          }}
          InputLabelProps={{
            style: { color: '#fff' },
          }}
          variant="outlined"

        />
        <br></br>
        <TextField
            required
            id="filled-basic"
          label="Message"
          name="body"
          onChange={handleChange}
          multiline rows={10}
          InputProps={{
            classes: {
                input: classes.input,
                notchedOutline: classes.notchedOutline

            }
          }}
          InputLabelProps={{
            style: { color: '#fff' },
          }}
          variant="outlined"
        />
        <br></br>
        <div className="reg_button_div">
        <Button onClick={submitEmail}  variant="contained" color="primary" style={{maxWidth: '200px', maxHeight: '70px', minWidth: '50px', minHeight: '50px'}}>Send Email</Button>
        </div>
        </form>
        <br></br>
        <Typography variant='h6'>Or Email me directly at gilldigen@gmail.com</Typography>
        </div> 
    )
}
Contact.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Contact);