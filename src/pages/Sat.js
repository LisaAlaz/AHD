import React from 'react';
import './Sat.css';
import { Typography } from '@mui/material';


const Sat = () => {
    return (
      <div className="sat-container">
         <div className="video-container">
           <video width="100%" controls>
             <source src="http://humandevelopment.doc.ic.ac.uk/videos/Division_of_Psychiatry_Talk.mp4" type="video/mp4"/>
           </video>
         </div>
           <Typography
             variant='caption-text'
             className='caption-text'
           >
              Watch Professor Abbas Edalat's lecture on SAT at the Division of Psychiatry, Imperial College London.
           </Typography>
         <div className='main-text-container'>
           <Typography
             variant='main-text'
             className='main-text'
           >
            <p>
              Self-Attachment Technique (SAT) is a self-administrable intervention rooted in Attachment Theory for improving mental health in the non-clinical populations and for treating mental illness. 
              <br/><br/>
              SAT reformulates the evolutionary optimal parent-child interaction as a self-administrable action programme - in which the user role-plays both the care-seeker and the care-giver - aiming to kick-start and accelerate a psychological and behavioural strategy for earning emotion self-regulation and secure attachment. In SAT, the individual's mindset and behaviour are viewed as the interaction of two distinct actors: the childhood self and the adult self. The childhood self, mentally depicted by the individual’s childhood photos (or a VR avatar created from such photos), represents the emotional self, which is usually dominant when the individual is under stress. The adult self, on the other hand, represents the rational self which is usually dominant in the absence of stress.
              <br/><br/>
              SAT thus leverages one of Mother Nature’s most powerful algorithms through a series of exercises that are practised by an individual on their own, for 30 minutes a day over an eight-week period. In a recent pilot study, SAT has demonstrated a huge effect size on a population of chronically depressed and/or anxious Iranian women when evaluating GAD-7 and PHQ-9 pre and post-intervention, including a 12-week follow-up test.
            </p>
           </Typography>
         </div>
      </div>
      
    )
  };
  
  export default Sat;