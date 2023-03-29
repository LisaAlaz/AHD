import React from 'react';
import './Members.css';
import { Typography } from '@mui/material';
import mailIcon from '../img/mail-icon.png';
import wwwIcon from '../img/www-icon.png';
import gsIcon from '../img/gs-icon.png';

import abbas from '../img/abbas.png';
import anandha from '../img/anandha.png';
import foaad from '../img/foaad.png';
import kami from '../img/kami.png';
import frank from '../img/frank.png';
import barney from '../img/barney.png';
import adrian from '../img/adrian.png';
import neophytos from '../img/neophytos.png';
import lisa from '../img/lisa.png';
import mary from '../img/mary.png';
import ruoyu from '../img/ruoyu.png';
import xinyan from '../img/xinyan.png';


const groupMembers = [
    {name: "Prof. Abbas Edalat",
     description: "Head of Group",
     img: abbas,
     background: "medium-background",
     email: "a.edalat@imperial.ac.uk",
     website: "https://www.doc.ic.ac.uk/~ae/",
     gs: "https://scholar.google.co.uk/citations?user=KP1AXgwAAAAJ&hl=en"},
  
    {name: "Prof. Fooad Khosmood",
     description: "",
     img: foaad,
     background: "light-background",
     email: "fooad@calpoly.edu",
     website: "https://foaad.net/",
     gs: "https://scholar.google.co.uk/citations?hl=en&user=JTvmrykAAAAJ"},
  
    {name: "Dr Anandha Gopalan",
     description: "",
     img: anandha,
     background: "dark-background",
     email: "a.gopalan@imperial.ac.uk",
     website: "https://www.doc.ic.ac.uk/~axgopala/"},
  
    {name: "Dr Kami Saedi",
     description: "Child and Adolescent Psychiatrist",
     img: kami,
     background: "medium-background",
     email: "kamisaedi@gmail.com"},
    
    {name: "Dr Frank Ryan",
     description: "Clinical Psychologist",
     img: frank,
     background: "light-background",
     email: "f.ryan@imperial.ac.uk",
     website: "https://www.imperial.ac.uk/people/f.ryan",
     gs: 'https://scholar.google.co.uk/citations?hl=en&user=mSahKOAAAAAJ'},

    {name: "Dr Barney Gilbert",
     description: "Research Fellow, Division of Neuroscience",
     img: barney,
     background: "dark-background",
     email: "b.gilbert@imperial.ac.uk"},

    {name: "Adrian Millea",
     description: "PhD Student",
     img: adrian,
     background: "medium-background",
     email: "a.millea14@imperial.ac.uk",
     website: "https://m3t4n01a.github.io/"},

    {name: "Neophytos Polydorou",
     description: "AI4Health PhD Student",
     img: neophytos,
     background: "light-background",
     email: "neophytos.polydorou19@imperial.ac.uk"},

    {name: "Lisa Alazraki",
     description: "PhD Student",
     img: lisa,
     background: "dark-background",
     email: "lisa.alazraki20@imperial.ac.uk"},

    {name: "Mary Kenneth",
     description: "PhD Student",
     img: mary,
     background: "medium-background",
     email: "m.kenneth22@imperial.ac.uk"},

    {name: "Ruoyu Hu",
     description: "AI4Health PhD Student",
     img: ruoyu,
     background: "light-background",
     email: "ruoyu.hu18@imperial.ac.uk"},

    {name: "Xinyan Ye",
     description: "Research Assistant",
     img: xinyan,
     background: "dark-background",
     email: "xinyan.ye19@imperial.ac.uk"},
  ];

const Members = () => {
    return (
      <div className="members-container">
        {groupMembers.map((member, index) => <div key={index} className={member.background}>
          <div className='text-container'>
            <Typography variant="name" className="name">{member.name}<br/></Typography>
            <Typography variant="job-title" className="job-title">{member.description}<br/></Typography>
          </div>
          {member.email !== undefined ? (
             <img src={mailIcon} className="icon" alt="Email" onClick={() => window.location = 'mailto:'.concat(member.email)}/>
            ) : (
                <div/>
            )}
          {member.website !== undefined ? (
             <img src={wwwIcon} className="icon" alt="Website" onClick={() => window.open(member.website, "_blank")}/>
            ) : (
                <div/>
            )}
          {member.gs !== undefined ? (
             <img src={gsIcon} className="icon" alt="Google Scholar" onClick={() => window.open(member.gs, "_blank")}/>
            ) : (
                <div/>
            )}
          <img src={member.img} alt={member.name} className="profile-pic"/>
        </div>)}
      </div>
    );
}

export default Members;