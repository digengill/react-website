import React from 'react'
import InfoCard from './InfoCard.js';
import InfoCard2 from './InfoCard2.js';
import image1 from './images/covid-tracker-img.JPG'
import image2 from './images/handwriting_img.jpg'
import image3 from './images/cool-background.png'

import './Projects.css';
//rfce

//Error: Cannot find module './images/covid-tracker-img.JPG'



function Projects() {
    const project_info = [
         {
            name : "Handwriting Recognition",
            body : "This project uses a Convolutional Recurrent Neural Network and trained with the CTC loss function to recognize words character-by-character. The network was built using the Keras API with Tensorflow 2.0 as the backend.",
            image_src : image2,
            github_link : "https://github.com/digengill/keras-ctc_loss-handwriting_recogintion",
            live_link : "https://github.com/digengill/keras-ctc_loss-handwriting_recogintion" ,
    
        },

         {
            name : "OS-from-Scratch",
            body : "An operating system written from scratch with x86 CPU registers. Working components include interrupts (IDT and IRQ's), paging, keyboard & screen drivers, and ports. Written in C and x86 assembly.",
            image_src : image3,
            github_link : "https://github.com/digengill/os-from-scratch",
            live_link : "https://github.com/digengill/os-from-scratch" ,
            
        },
        {
            name : "TalkBox App",
            body : "Worked in a small group to create a unique application which aids the user to communicate. The TalkBox application is a customizable application which allows you to play audio files. The software was programmed in Java and implemented on the Raspberry PI. The project comprised of Documentation, Testing, Issue Tracking, Debugging, and Refactoring.",
            image_src : image3,
            github_link : "https://github.com/digengill/2311Project",
            live_link : "https://github.com/digengill/2311Project" ,
            
        },
        
    ]
    const project_info2 = {
        name : "Covid-19 Stats Tracker App",
        body : "The Covid tracker is a webpage application which shows the latest statistics of Covid cases, recoveries, and deaths. With this app, you can visualize the data on the world map, and a line graph. The app is built with React, Javascript, and CSS. ",
        image_src : image1,
        github_link : "https://github.com",
        live_link : "https://covid-tracker-a309c.web.app/" ,
    }

    return (
        <div className="bg">
            <div className="container">
                <h1>Projects</h1>
                    <InfoCard title={project_info2.name} image_src={project_info2.image_src} body={project_info2.body} github_link={project_info2.github_link} live_link={project_info2.live_link}></InfoCard>
                    {project_info.map((project) =>  
                    (
                        <InfoCard2 title={project.name} image_src={project.image_src} body={project.body} github_link={project.github_link} live_link={project.live_link}></InfoCard2>
                    )
                    )} 
    
            </div>
        </div>
    )
}

export default Projects
