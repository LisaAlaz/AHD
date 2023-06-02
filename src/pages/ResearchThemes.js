import React from 'react';
import './ResearchThemes.css';
import { Typography } from '@mui/material';

import mri from '../img/mri.jpg';
import avatar from '../img/avatar.jpg';
import emotion from '../img/emotion.jpg';
import game from '../img/game.jpg';
import hci from '../img/hci.jpg';
import chatbot from '../img/chatbot.jpg';


const themes = [
    {title: "Self-Attachment Technique (SAT)",
     description: "A new, integrative, self-administered intervention using ideas from attachment theory, developmental neuroscience and fMRI studies of bond-making and neural plasticity, along with simulation techniques.",
     img: mri},
  
    {title: "Immersive virtual reality",
     description: "We have developed an experimental VR platform for SAT, equipped with emotion recognition capabilities based on speech and facial expression analysis.",
     img: avatar},

    {title: "Dialogue agents",
     description: "We study the application of dialogue agents to mental health and education, focussing on their safety, capability for empathy and emotion awareness.",
     img: chatbot},

    {title: "Human-computer interaction",
     description: "We investigate human perception of and interaction with digital machines. In particular, we are interested in virtual agents that display human-like traits and personalities.",
     img: hci},
  
    {title: "Affective computing",
     description: "We are interested in the development of tools and algorithms that allow machines to correctly  interpret and appropriately respond to human emotions. ",
     img: emotion},
    
    {title: "Video games for learning",
     description: "We research, design and develop educational video game platforms aimed at learning about SAT and enhancing social and emotional intelligence.",
     img: game},
  ];

const ResearchThemes = () => {
    return (
      <div className="themes-container">
        {themes.map((theme, index) => <div key={index} className={index%2==0 ? ("light-background-themes") : ( "dark-background-themes")}>
            <div className={(index === 2 || index === 3) ? ("text-container-right") : ("text-container-left")}>
              <Typography variant="theme-title" className="theme-title">{theme.title}<br/><br/></Typography>
              <Typography variant="theme-description" className="theme-description">
                    {theme.description}<br/>
              </Typography>
            </div>
            <img src={theme.img} alt={theme.name} className={(index === 2 || index === 3) ? ("image-left") : ("image-right")}/>
        </div>)}
      </div>
    );
}

export default ResearchThemes;