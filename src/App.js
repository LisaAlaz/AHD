import { React, useState, useEffect } from 'react';
import './App.css';
import logo from './img/logo.png';
import ResearchThemes from './pages/ResearchThemes';
import Sat from './pages/Sat';
import News from './pages/News';
import Publications from './pages/Publications';
import Talks from './pages/Talks';
import Reports from './pages/Reports';
import Members from './pages/Members';
import Contact from './pages/Contact';
import SlideShow from './pages/SlideShow';
import { Popper, Typography } from "@material-ui/core";
import MenuIcon from './img/menuIcon.png';
import CloseIcon from './img/closeIcon.png';

const App = () => {

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

  const menuItems = [
    "Research Themes",
    "Self-Attachment Technique",
    "News",
    "Publications",
    "Talks",
    "Theses and Reports",
    "Members",
    "Contact",
  ];

  const [currentPage, setCurrentPage] = useState("Home");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleMenu = () => {
    open ? handleClose() : handleClickOpen();
  }

  const menuSelection = (item) => {
    setCurrentPage(item);
    handleClose();
  };

  return (
   <div className="body">

      {/* Header */}
      <div className="header">
        <img className="ahd-logo" src={logo} alt="Algorithmic Human Development" onClick={()=>setCurrentPage("Home")}/>
        {windowSize[0] > 1485 ? (
          menuItems.map((item, index) => <div className="horizontal-menu-item-container" key={index}>
          <Typography variant="menu" className="menu" onClick={()=>setCurrentPage(item)}>{item}</Typography></div>)
        ) : (
        <>
          <img src={MenuIcon} className={windowSize[0] < windowSize[1] ? ("menu-icon") : ("menu-icon-landscape")} alt="menu-icon" onClick={handleMenu}/>
            <Popper 
              className={windowSize[0] < windowSize[1] ? ("menu-dialog") : ("menu-dialog-landscape")}
              open={open}
              onClose={handleClose}
              BackdropProps={{style: {backgroundColor: 'transparent', boxShadow: 'none'}}}
              style={{ position: 'fixed', right: 0, left: 'unset' }}
            >
              <div className='close-icon-container'>
                <img src={CloseIcon} className="close-icon" alt="close-icon" onClick={handleMenu}/>
              </div>
              {menuItems.map((item, index) => <div className={windowSize[0] < windowSize[1] ? ("vertical-menu-item-container") : ("vertical-menu-item-container-landscape")} key={index}>
                <Typography 
                  variant="menu-vertical"
                  className="menu-vertical"
                  onClick={()=>menuSelection(item)}>{item}
                </Typography>
              </div>)}
            </Popper>
          </>
        )}
      </div>
      <div variant={"ad-container"} className={"ad-container"}>
        <Typography variant={"advert"} className={"advert"}>
             We are currently recruiting volunteers to participate in our upcoming study. If you would like to learn more, please 
             read the <u><a href="https://www.doc.ic.ac.uk/~rh4618/3vNP/?auth=76d82X0H7cJMqvEPqpfz1gLk8NtMM7Zh" target="_blank">information page</a></u> or <u><a href="https://imperial.eu.qualtrics.com/jfe/form/SV_1FgkIz2ySsxH2e2" target="_blank">sign up</a></u>.
        </Typography>
      </div>
      {/* Main page content */}
      <div className='main-content'>
      { currentPage === "Research Themes" ? (
          <ResearchThemes/> 
        ) : (
          currentPage === "Self-Attachment Technique" ? (
            <Sat/>
          ) : (
            currentPage === "News" ? (
              <News/>
            ) : (
               currentPage === "Publications" ? (
                 <Publications/>
              ) : (
                currentPage === "Talks" ? (
                  <Talks/>
                ) : (
                  currentPage === "Theses and Reports" ? (
                    <Reports/>
                  ) : (
                    currentPage === "Members" ? (
                      <Members/>
                    ) : (
                      currentPage === "Contact" ? (
                        <Contact/>
                      ) : (
                    <SlideShow/>
                    )
                  )
                )
              )
            )
          )
        )
      )
    }
    </div>
      
      {/* Footer */}
      <div className='footer'>
        <Typography variant="footer-text" className="footer-text">
          © Copyright 2023, Algorithmic Human Development.
        </Typography>
      </div>

    </div>
  )
}

export default App;
