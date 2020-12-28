import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import {Card, CardContent, CardMedia, Typography, IconButton} from '@material-ui/core';
import './InfoCard.css';


function InfoCard2({title, image_src, body, github_link, live_link}) {

    return (
        <div>
        <Card className="project__card">
            <CardContent className="card__div">
                <div className="card__left">
                <CardMedia className="card__image" image={image_src}/>
                </div>
                <div className="card__right">
                    <div className="card__info">
                        <Typography variant="h5">{title}</Typography>   
                        <Typography variant="subtitle1">{body}</Typography>
                    </div>
                    <div className="card__links">
                        <IconButton className="github__btn" onClick={() => {window.location.href = github_link;}}  target="_blank" aria-label="github">
                            <GitHubIcon></GitHubIcon>
                        </IconButton>
                        
                            {/* component={Link} to={{ pathname: live_link }} */}
                    </div>
                </div>    
            </CardContent>
        </Card>
        </div>
    )
}

export default InfoCard2
