import React from 'react';
import './News.css';
import { Button } from '@material-ui/core';
import { Typography } from '@mui/material';
import DoCShowcasePoster from '../papers/DoCShowcasePoster.png';

const stories = [
    {date: "15/03/2023",
     title: "Sign up to participate in our upcoming study",
     body: "The Algorithmic Human Development group is recruiting participants for the study 'Self-Initiated Humour Protocols - A Novel Laughter Exercise Programme'. See links below for more information and to sign up to participate.",
     info: "https://www.doc.ic.ac.uk/~rh4618/3vNP/?auth=76d82X0H7cJMqvEPqpfz1gLk8NtMM7Zh",
     signup: "https://imperial.eu.qualtrics.com/jfe/form/SV_1FgkIz2ySsxH2e2"},

    {date: "06/03/2023",
     title: "AHD presents the current research at the DoC Showcase Day",
     body: "The Algorithmic Human Development group will give a presentation on the ongoing research on Wednesday 8th March at 11 am, as part of the DoC Showcase Day at Imperial College. Join us in Huxley 315.",
     link: DoCShowcasePoster},

    {date: "22/02/2023",
    title: "Professor Edalat is guest editor of Healthcare Journal's Special Issue",
    body: "Professor Abbas Edalat, head of the Algorithmic Human Development group, is guest editor of 'The Utilization of Digital Technologies, Remote Patient Monitoring and Machine Learning to Treat Mental Illness and Improve General Wellbeing', Special Issue of Healthcare Journal.",
    link: "https://www.mdpi.com/journal/healthcare/special_issues/639C068RIV"},

    {date: "15/02/2023",
     title: "Best Student Paper Award at IEEE CogMI 2022",
     body: "'A Multilingual Virtual Guide for Self-Attachment Technique' wins the Best Student Paper Award at the 4th IEEE International Conference on Cognitive Machine Intelligence.",
     link: "https://www.imperial.ac.uk/news/243335/doc-students-awarded-best-student-paper/"},

    {date: "13/02/2023",
     title: "Hajar Aminnzadeh presents her research at UCL's Department of Imaging Neuroscience",
     body: "Professor Abbas Edalat's PhD student Hajar Aminnzadeh will present her work 'Impact of self-attachment therapy on affective, reward and memory networks of patients with major depression: an fMRI study using DCM' on Tuesday 14th Feb, from 12.30 to 2 pm, at the Functional Imaging Laboratory (FIL) at UCL.",
     link: "https://www.fil.ion.ucl.ac.uk/"},
];

const News = () => {
    return (
      <div className="container">
        {stories.map((story, index) => <div key={index} className={index % 2 === 0 ? ("medium") : ("dark")}>
          <div className='news-div'>
            <Typography variant="date" className="date">{story.date}<br/></Typography>
          </div>
          <div className='news-div'>
            <Typography variant="title" className="title">{story.title}<br/></Typography>
          </div>
          <div className='news-div'>
            <Typography variant="news-body" className="news-body">{story.body}<br/></Typography>
          </div>
          <div className='button-div'> 
            {story.title === "Sign up to participate in our upcoming study" ? (
              <><div className='link-button'>
                <Button
                  style={{color: 'white', textTransform: 'none', fontSize: '15px', fontWeight: 600}} 
                  onClick={() => window.open(story.info, "_blank")}
                >
                  More info
                </Button>
              </div>
              <div className='link-button'>
                <Button
                  style={{color: 'white', textTransform: 'none', fontSize: '15px', fontWeight: 600}} 
                  onClick={() => window.open(story.signup, "_blank")}
                >
                  Sign up
                </Button>
              </div></>
            ) : (
              <div className='link-button'>
                <Button
                  style={{color: 'white', textTransform: 'none', fontSize: '15px', fontWeight: 600}} 
                  onClick={() => window.open(story.link, "_blank")}
                >
                  Visit link
                </Button>
              </div>
            )}
          </div>
        </div>)}
      </div>
    );
}

export default News;