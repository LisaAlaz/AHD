import React from 'react';
import './Publications.css';
import { Button } from '@material-ui/core';
import { Typography } from '@mui/material';
import yanReport from "../papers/Yan-Report.pdf";
import zeenaReport from "../papers/Zeena-Report.pdf";
import royReport from "../papers/Roy-Report.pdf";
import philipReport from "../papers/Philip-Report.pdf";
import ilonaReport from "../papers/Ilona-Report.pdf";
import aliciaReport from "../papers/Alicia-Report.pdf";
import humorProtocols from "../papers/Self-initiated_humorous_protocols-f.pdf"
import lisaReport from "../papers/la-thesis-2021.pdf";
import aliReport from "../papers/ag-thesis-2021.pdf";
import neophytosReport from "../papers/np-thesis-2020.pdf";
import luciaReport from "../papers/ls-thesis-2020.pdf";
import workshopPersian from "../papers/UT-workshop-2017.pdf";
import davidThesis from "../papers/dc-thesis-2017.pdf";

const reports = [
    {title: "A Multilingual Chatbot for Self-Attachment Therapy",
    description: "MSc Project Report, 2022",
    author: "Alicia Law",
    link: aliciaReport},

    {title: "Emotion Recognition Using a Multi-Modal Approach",
    description: "MSc Project Report, 2022",
    author: "Yihui Ilona Zhu",
    link: ilonaReport},

    {title: "Target-Guiding for Open-Ended Chatbot Interactions in Digital Psychotherapy",
    description: "MSc Project Report, 2022",
    author: "Philip Nag",
    link: philipReport},

    {title: "A Multi-language Virtual Guide for Self-attachment Therapy",
    description: "MEng Project Report, 2022",
    author: "Ruoyu Hu",
    link: royReport},

    {title: "Chatbot for learning to laugh: New approach to develop a sense of humour",
    description: "MEng Project Report, 2022",
    author: "Zeena Patel",
    link: zeenaReport},

    {title: "A virtual psychotherapist that can understand human language",
    description: "MEng Project Report, 2022",
    author: "Hongyuan Yan",
    link: yanReport},

    {title: "Self-initiated humorous protocols: New approach for learning to laugh",
     description: "Department of Computing Technical Report 2022",
     author: "Abbas Edalat",
     link: humorProtocols},
    
    {title: "A deep-learning assisted empathetic guide for Self-attachment therapy",
     description: "MSc Project Report, 2021",
     author: "Lisa Alazraki",
     link: lisaReport},

    {title: "Evaluation of a Virtual Agent in Guiding Users from the Non-Clinical Population in Self-Attachment Intervention",
     description: "MEng Project Report, 2021",
     author: "Ali Ghachem",
     link: aliReport},

    {title: "Virtual reality platform for Self-Attachment therapy, assisted by a virtual agent with emotion recognition capabilities",
     description: "MSc Project Report, 2020",
     author: "Neophytos Polydorou",
     link: neophytosReport},

    {title: "Multi-emotion Recognition and Dialogue Manager for VR-based Self-attachment Therapy",
     description: "MSc Project Report, 2020",
     author: "Lucia Simkanin",
     link: luciaReport},
    
    {title: "Immersive Virtual Reality platform for Self-attachment therapy",
     description: "PhD Thesis, 2020",
     author: "Ibrahim Ghaznavi",
     link: "https://spiral.imperial.ac.uk:8443/bitstream/10044/1/90477/1/Ghaznavi-S-2020-PhD-Thesis.pdf"},

    {title: "Cross-corpus Speech and Textual Emotion Learning for Psychotherapy",
     description: "MEng Project Report, 2020",
     author: "James Tavernor",
     link: "https://www.imperial.ac.uk/media/imperial-college/faculty-of-engineering/computing/public/1920-ug-projects/distinguished-projects/Cross-corpus-Speech-and-Textual-Emotion-Learning-for-Psychotherapy.pdf"},
    
    {title: "Self-Attachment: A Self-Administrable Intervention for Chronic Anxiety and Depression",
     description: "Department of Computing Technical Report 2017",
     author: "Abbas Edalat",
     persianVersion: workshopPersian,
     link: "https://www.doc.ic.ac.uk/research/technicalreports/2017/DTRS17-3.pdf"},

    {title: "Computational Models of Attachment and Self-Attachment",
     description: "PhD Thesis, 2017",
     author: "David Cittern",
     link: davidThesis},
  ];

const Reports = () => {
    return (
      <div className="container">
        {reports.map((report, index) => <div key={index} className={index % 2 === 0 ? ("medium") : ("dark")}>
          <div className='text-div'>
            <Typography variant="title" className="title">{report.title}<br/></Typography>
          </div>
          <div className='text-div'>
            <Typography variant="description" className="description">{report.description}<br/></Typography>
          </div>
          <div className='text-div'>
            <Typography variant="author" className="author">{report.author}<br/></Typography>
          </div>
          <div className='button-div'>
            {
              report.persianVersion !== undefined ? (
                <div className='publication-button'>
                  <Button 
                    style={{color: 'white', textTransform: 'none', fontSize: '15px', fontWeight: 600}} 
                    onClick={() => window.open(report.persianVersion, "_blank")}
                  >
                    Persian version
                  </Button>
                </div>
              ) : (<div/>)
            }
            <div className='publication-button'>
              <Button 
                style={{color: 'white', textTransform: 'none', fontSize: '15px', fontWeight: 600}} 
                onClick={() => window.open(report.link, "_blank")}
              >
                PDF
              </Button>
            </div>
          </div>
        </div>)}
      </div>
    );
}

export default Reports;