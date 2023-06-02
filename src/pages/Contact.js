import { React, useState, useEffect } from 'react';
import huxley from '../img/huxley.jpg';
import './Contact.css';
import { Typography } from '@mui/material';
import { Button } from '@material-ui/core';



const Contact = () => {

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const openForm = () =>{
    const url = 'https://imperial.eu.qualtrics.com/jfe/form/SV_6VexPjnp9OYU0U6';
    window.open(url, '_blank');
  }

  return (
    <div className="contact-container">
      <div className={windowSize[0] < windowSize[1] ? ("image-container") : ("image-container-landscape")}>
        <img src={huxley} alt="" className='image'/>
      </div>
      <Typography 
        variant={windowSize[0] < windowSize[1] ? ("email-text") : ("email-text-landscape")}
        className={windowSize[0] < windowSize[1] ? ("email-text") : ("email-text-landscape")}
      >
        General enquiries: <u><a href="mailto:ahd@imperial.ac.uk" target="_blank" rel="noreferrer" className='link'>ahd@imperial.ac.uk</a></u>
      </Typography>
      <div className={windowSize[0] < windowSize[1] ? ("participate-button") : ("participate-button-landscape")}>
        <Button
          onClick={openForm}
          style={{color: 'rgb(1, 7, 74)', textTransform: 'none', fontSize: '15px', fontWeight: 600}}
        >
            Participate in future studies
        </Button>
      </div>
      <Typography
        variant={windowSize[0] < windowSize[1] ? ("address-text") : ("address-text-landscape")}
        className={windowSize[0] < windowSize[1] ? ("address-text") : ("address-text-landscape")}
      >
        Department of Computing <br/>
        Imperial College London <br/>
        180 Queen's Gate <br/>
        London SW7 2RH
      </Typography>

      <div class={windowSize[0] < windowSize[1] ? ("google-maps") : ("google-maps-landscape")}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9935.110748636052!2d-0.1791185!3d51.498947!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaeb3ee9cd35bc197!2sDepartment%20of%20Computing!5e0!3m2!1sen!2suk!4v1631800219317!5m2!1sen!2suk"
            width="400"
            height="300"
            frameBorder="0"
            allowfullscreen=""
            loading="lazy"
            title='map'
          ></iframe>
        </div>
    </div>
  )
};

export default Contact;
