import { React, useState, useEffect } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import brain from '../img/brain.jpg';
import baby from '../img/baby.jpg';
import mb from '../img/mb.jpg';
import vr from '../img/vr.jpg';
import brainMobile from '../img/brainMobile.jpg';
import babyMobile from '../img/babyMobile.jpg';
import mbMobile from '../img/mbMobile.jpg';
import vrMobile from '../img/vrMobile.jpg';
import brainNarrow from '../img/brainNarrow.jpg';
import babyNarrow from '../img/babyNarrow.jpg';
import mbNarrow from '../img/mbNarrow.jpg';
import vrNarrow from '../img/vrNarrow.jpg';
import brainNarrower from '../img/brainNarrower.jpg';
import babyNarrower from '../img/babyNarrower.jpg';
import mbNarrower from '../img/mbNarrower.jpg';
import vrNarrower from '../img/vrNarrower.jpg';
import brainNarrowest from '../img/brainNarrowest.jpg';
import babyNarrowest from '../img/babyNarrowest.jpg';
import mbNarrowest from '../img/mbNarrowest.jpg';
import vrNarrowest from '../img/vrNarrowest.jpg';
import './SlideShow.css';
import { Typography } from '@mui/material';
import { none } from 'ol/centerconstraint';


const delay = 3250;

const slides = [
    {imgWide: <img src={brain} alt="" className='slide'/>, 
     imgNarrow: <img src={brainNarrow} alt="" className='slide'/>, 
     imgNarrower: <img src={brainNarrower} alt="" className='slide'/>,
     imgNarrowest: <img src={brainNarrowest} alt="" className='slide'/>, 
     imgMobile: <img src={brainMobile} alt="" className='slide'/>, 
     txt: "We are a multidisciplinary research group working at the crossroads of AI, mathematical modelling, cognitive and clinical psychology and neuroscience.",
     style: "text1",
    },
 
    {imgWide: <img src={baby} alt="" className='slide'/>,
     imgNarrow: <img src={babyNarrow} alt="" className='slide'/>,
     imgNarrower: <img src={babyNarrower} alt="" className='slide'/>,
     imgNarrowest: <img src={babyNarrowest} alt="" className='slide'/>,
     imgMobile: <img src={babyMobile} alt="" className='slide'/>, 
     txt: "We are developing digital tools for self-attachment technique, an integrative, holistic, self-administrable intervention informed by attachment theory.",
     style: "text2",
    },
 
    {imgWide: <img src={mb} alt="" className='slide'/>,
     imgNarrow: <img src={mbNarrow} alt="" className='slide'/>,
     imgNarrower: <img src={mbNarrower} alt="" className='slide'/>,
     imgNarrowest: <img src={mbNarrowest} alt="" className='slide'/>,
     imgMobile: <img src={mbMobile} alt="" className='slide'/>,
     txt: "We harness the power of algorithms to enhance social and emotional intelligence in individuals and treat mental illness.",
     style: "text3",
    },
 
    {imgWide: <img src={vr} alt="" className='slide'/>,
     imgNarrow: <img src={vrNarrow} alt="" className='slide'/>,
     imgNarrower: <img src={vrNarrower} alt="" className='slide'/>,
     imgNarrowest: <img src={vrNarrowest} alt="" className='slide'/>,
     imgMobile: <img src={vrMobile} alt="" className='slide'/>,
     style: "text4",
    },
  ];

const SlideShow = () => {

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

  return (
      <div className="slideshow-container">
        <Slider
          autoplay={delay}
          previousButton={none}
          nextButton={none} 
          className={windowSize[0] >= windowSize[1] ? ("slideshow") : ("slideshow-narrow")}
        >
          {slides.map((slide, index) => <div key={index}>
            <div>{windowSize[1] >= windowSize[0] ? (windowSize[1] >= 1501 ? (slide.imgWide) : 
              windowSize[0] >= 1000 ? (slide.imgNarrow) :
                (windowSize[0] >= 850 ) ? (slide.imgNarrower) :
                  windowSize[0] >= 400 ? (slide.imgNarrowest) :
                    (slide.imgMobile)) : (slide.imgWide)}</div> {
                      slide.style === "text4" ? (
                        <Typography variant={slide.style} className={slide.style}>
                          Interested in taking part in our future studies? Register <u><a href="https://imperial.eu.qualtrics.com/jfe/form/SV_6VexPjnp9OYU0U6" target="_blank" rel="noreferrer" className='here' style={{color: 'white'}}>here</a></u> and we will keep you up to date.
                        </Typography>) : (
                        <Typography variant={slide.style} className={slide.style}>
                          {slide.txt}
                        </Typography>
                    )
                  }
          </div>)
          }
         </Slider> 
      </div>
  );
}

export default SlideShow;
  