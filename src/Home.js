import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import image1 from './images/cool-background.png';
import {Button, Typography, IconButton} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';



import './Home.css';
function Home() {
    const [open, setOpen] = useState(false);

    const to_Project = () => {
        alert('project')
        
    }
    const openDialog = () => {
        setOpen(true);
    }
    const closeDialog = () => {
        setOpen(false);
    }
    const styles = {

        largeIcon: {
          width: 200,
          height: 60,
        },
      
      };
    return (

        <div className="backg">
        
            <Container className="home__container">                
                <div className="home__infobox">
                    <div className="home__infobox__info">
                        <Typography variant="h2">Digen Gill</Typography>
                        <Typography variant="h4">Software Engineering Undergraduate</Typography>
                    </div>
                    <div className="home__buttons">
                        <div>
                        <Button component={Link} to="/projects" variant="contained" style={{maxWidth: '100%', maxHeight: '100%', minWidth: '100%', minHeight: '5vh' ,backgroundColor: "#21b6ae"}}>Projects</Button>

                        </div>
                        <div>
                        <Button onClick={() => {openDialog()}} variant="contained" style={{maxWidth: '100%', maxHeight: '100%',minWidth: '100%', minHeight: '5vh', backgroundColor: "#21b6ae",}}>Resume</Button>
                        <Dialog open={open} maxWidth={'xl'} onClose={() => closeDialog()} >
                        <DialogTitle id="max-width-dialog-title">Resume Options</DialogTitle>
                            <DialogContent>
                            <DialogContentText>
                                Choose:
                            </DialogContentText>
                                <Button component={Link} to="/resume" variant="contained">View in browser</Button>
                                <Button component={Link} to="/digengill_resume_april.pdf" target="_blank" download variant="contained">Download</Button>
                            </DialogContent>

                        </Dialog>

                        </div>
                    </div>
                    <div className="home__links">
                        <IconButton className="github__btn" color='inherit'  component={Link} to={{ pathname: "https://github.com/digengill" }} target="_blank" aria-label="github" >
                            <GitHubIcon fontSize="large"></GitHubIcon>
                        </IconButton>
                        <IconButton className="linkedin_btn" color='inherit'   component={Link} to={{ pathname: "https://www.linkedin.com/in/digen-gill-929936164/" }} target="_blank" aria-label="linkedin">
                            <LinkedInIcon fontSize="large"></LinkedInIcon>
                        </IconButton>
                    </div>
                    
                </div>
            </Container>            
            
        </div>
            
    )
}

export default Home
