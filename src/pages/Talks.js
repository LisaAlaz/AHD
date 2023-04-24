import React from 'react';
import './Publications.css';
import { Button } from '@material-ui/core';
import { Typography } from '@mui/material';
import icssWorkshop from "../papers/ICSS-workshop-2018-1.pdf";
import icssWorkshop2 from "../papers/ICSS-workshop-2018-2.pdf";
import wcpTalk from "../papers/WCP-talk.pdf";
import ipaWorkshop from "../papers/IPA-second-workshop-1.pdf";
import iopTalk from "../papers/iop-talk.pdf";

const talks = [
    {title: "Self-attachment technique (SAT): Theory, effectiveness and VR delivery",
     venue: "Division of Psichiatry, Imperial College London, 18/10/2022",
     author: "Abbas Edalat",
     link: "http://humandevelopment.doc.ic.ac.uk/videos/Division_of_Psychiatry_Talk.mp4",
    },

    {title: "Algorithmic Human Development: What is it and why do we need it now? (Session 1)",
     venue: "Data Science Institute, Imperial College London, 2019",
     author: "Abbas Edalat",
     link: "https://humandevelopment.doc.ic.ac.uk/videos/video_AHD_session_1.mp4",
    },

    {title: "Algorithmic Human Development: What is it and why do we need it now? (Session 2)",
     venue: "Data Science Institute, Imperial College London, 2019",
     author: "Abbas Edalat",
     link: "https://humandevelopment.doc.ic.ac.uk/videos/video_AHD_session_2.mp4",
    },

    {title: "A Self-attachment workshop for psychotherapy, increasing emotional and social intelligence, and creativity (Part 1) - A new approach to psychological disorders",
     venue: "Institute for Cognitive Sciences Studies, Tehran, 01/11/2018",
     author: "Abbas Edalat",
     link: icssWorkshop},
    
    {title: "A Self-attachment workshop for psychotherapy, increasing emotional and social intelligence, and creativity (Part 2) - Theoretical foundation of self-attachment",
     venue: "Institute for Cognitive Sciences Studies, Tehran, 02/11/2018",
     author: "Abbas Edalat",
     link: icssWorkshop2},

    {title: "Self-attachment: an integrative and holistic psychotherapeutic technique",
     venue: "9th International Congress for Psychotherapy (Asian chapter), Tehran, 18/05/2016",
     author: "Abbas Edalat",
     link: wcpTalk},

    {title: "Self-Attachment: proposed method for treating chronic anxiety and depression (in Farsi)",
     venue: "Iranian Psychological Association workshop on self-attachment, Tehran, 03-04/01/2015",
     author: "Abbas Edalat",
     link: ipaWorkshop},

    {title: "Self-Attachment: A New and Integrative Psychotherapy",
     venue: "Institute of Psychiatry, King's College London, 02/05/2013",
     author: "Abbas Edalat",
     link: iopTalk},
    
    {title: "Introducing Self-Attachment",
     venue: "Imperial College Business School, 10/01/2013",
     author: "Abbas Edalat",
     link: "https://youtu.be/q2TREMfgNdU"},
  ];

const Talks = () => {
    return (
      <div className="container">
        {talks.map((talk, index) => <div key={index} className={index % 2 === 0 ? ("medium") : ("dark")}>
          <div className='text-div'>
            <Typography variant="title" className="title">{talk.title}<br/></Typography>
          </div>
          <div className='text-div'>
            <Typography variant="description" className="description">{talk.venue}<br/></Typography>
          </div>
          <div className='text-div'>
            <Typography variant="author" className="author">{talk.author}<br/></Typography>
          </div>
          <div className='button-div'>
            <div className='publication-button'>
              <Button 
                style={{color: 'white', textTransform: 'none', fontSize: '15px', fontWeight: 600}} 
                onClick={() => window.open(talk.link, "_blank")}
              >
                {(talk.title === "Introducing Self-Attachment" || talk.title === "Self-attachment technique (SAT): Theory, effectiveness and VR delivery" || talk.title.includes("Algorithmic Human Development: What is it and why do we need it now?")) ? (
                    "Video") : ("PDF")}
              </Button>
            </div>
          </div>
        </div>)}
      </div>
    );
}

export default Talks;