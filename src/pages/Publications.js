import React from 'react';
import './Publications.css';
import { Button } from '@material-ui/core';
import { Typography } from '@mui/material';
import cogmi22_paper from '../papers/Alicia_Ruoyu_Paper.pdf'
import pilot_study from '../papers/ijerph-19-06376.pdf'
import cogmi21_paper from '../papers/Lisa_paper.pdf';
import eai21_paper from '../papers/eai-2021.pdf';
import aivr20_paper from '../papers/aivr-2020.pdf';
import cmh19_paper from '../papers/cmh-2019.pdf';
import pone18_paper from '../papers/plos-2018.pdf';
import cpsy17_paper from '../papers/cpsy-2017.pdf';
import aisb17_paper from '../papers/aisb-2017.pdf';
import springer16_paper from '../papers/cnp-2016.pdf';
import ijcnn15_paper from '../papers/ijcnn-2015-a.pdf';
import ijcnn15b_paper from '../papers/ijcnn-2015-b.pdf';
import aamas15_paper from '../papers/rlneg.pdf';
import ssci14_paper from '../papers/ssci-2014.pdf';
import ijcnn14_paper from '../papers/ijcnn-2014.pdf';
import nips13_paper from '../papers/nips-2013.pdf';
import nips13_supplement from '../papers/nips-sup-2013.pdf';
import ijcnn13_paper from '../papers/ijcnn-2013.pdf';
import bukhara_paper from '../papers/Mongols-8-3-13.pdf';


const articles = [
    {title: "A Multilingual Virtual Guide for Self-Attachment Technique",
     journal: "Proceedings of the Fourth IEEE International Conference on Cognitive Machine Intelligence, 2022 (Best Student Paper Award winner)",
     author: "Alicia Jiayun Law, Ruoyu Hu, Lisa Alazraki, Anandha Gopalan, Neophytos Polydorou, Abbas Edalat",
     link: "https://ieeexplore.ieee.org/abstract/document/10063528",
     pdf: cogmi22_paper},

    {title: "A Pilot Study to Evaluate the Efficacy of Self-Attachment to Treat Chronic Anxiety and/or Depression in Iranian Women",
     journal: "Special Issue on Attachment and Mental Health, International Journal of Environmental Research and Public Health, 2022",
     author: "Abbas Edalat, Massoumeh Farsinezhad, Makhsoos Bokharaei, Fateme Judy",
     link: "https://www.mdpi.com/1660-4601/19/11/6376/htm",
     pdf: pilot_study},

    {title: "An Empathetic AI Coach for Self-Attachment Therapy",
     journal: "Proceedings of the Third IEEE International Conference on Cognitive Machine Intelligence, 2021",
     author: "Lisa Alazraki, Ali Ghachem, Neophytos Polydorou, Foaad Khosmood, Abbas Edalat",
     link: "https://ieeexplore.ieee.org/document/9750315",
     pdf: cogmi21_paper},

    {title: "Valence/Arousal Estimation of Occluded Faces from VR Headsets",
     journal: "Proceedings of the Third IEEE International Conference on Cognitive Machine Intelligence, 2021",
     author: "Tom Gotsman, Neophytos Polydorou, Abbas Edalat",
     link: "https://ieeexplore.ieee.org/document/9750297",
     pdf: "https://spiral.imperial.ac.uk/bitstream/10044/1/93231/2/EmoFAN_VR_paper.pdf"},
    
    {title: "An Interactive VR Platform with Emotion Recognition for Self-Attachment Intervention",
     journal: "EAI Endorsed Transactions on Pervasive Health and Technology, 2021",
     author: "Neophytos Polydorou, Abbas Edalat",
     link: "https://eudl.eu/doi/10.4108/eai.14-9-2021.170951",
     pdf: eai21_paper},

    {title: "Photorealistic Avatars to Enhance the Efficacy of the Self-attachment Psychotherapy",
     journal: "Proceedings of International Conference on Artificial Intelligence and Virtual Reality (AIVR) 2020",
     author: "Ibrahim Ghaznavi, Duncan Gillies, Dasha Nicholls, Abbas Edalat",
     link: "https://www.computer.org/csdl/proceedings-article/aivr/2020/746300a060/1qpzCwDcDKM",
     pdf: aivr20_paper},

    {title: "Usability Evaluation of an Immersive Virtual Reality Platform for Self-attachment Psychotherapy",
     journal: "Proceedings of the symposium on Computing and Mental Health (CMH) at CHI 2019",
     author: "Ibrahim Ghaznavi, Usman Jehanzeb, Abbas Edalat, Duncan Fyfe Gillies",
     link: "https://aspirin.media.mit.edu/mentalhealth/wp-content/uploads/sites/2/2019/04/CMH2019_paper_45.pdf",
     pdf: cmh19_paper},

    {title: "Intrinsic and Extrinsic Motivators of Attachment Under Active Inference",
     journal: "PLOS ONE 2018",
     author: "David Cittern, Tobias Nolte, Karl Friston, Abbas Edalat",
     link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0193955",
     pdf: pone18_paper},

    {title: "A Neural Model of Empathic States in Attachment-Based Psychotherapy",
     journal: "Computational Psychiatry (CPSY), Volume 1, 2017",
     author: "David Cittern, Abbas Edalat",
     link: "https://cpsyjournal.org/article/10.1162/CPSY_a_00006/",
     pdf: cpsy17_paper},

    {title: "An Immersive Virtual Reality Mobile Platform for Self-Attachment",
     journal: "Proceedings of the Society for the Study of Artificial Intelligence and Simulation of Behaviour (AISB) Annual Convention, 2017",
     author: "David Cittern, Abbas Edalat, Ibrahim Ghaznavi",
     link: "http://aisb2017.cs.bath.ac.uk/conference-edition-proceedings.pdf",
     pdf: aisb17_paper},

    {title: "Self-Attachment: A Holistic Approach to Computational Psychiatry",
     journal: "Computational Neurology and Psychiatry, Springer Series in Bio/Neuroinformatics, 2016",
     author: "Abbas Edalat",
     link: "https://link.springer.com/chapter/10.1007/978-3-319-49959-8_10",
     pdf: springer16_paper},

    {title: "Introduction to Self-Attachment and its Neural Basis",
     journal: "Proceedings of the International Joint Conference on Neural Networks (IJCNN), 2015",
     author: "Abbas Edalat",
     link: "https://ieeexplore.ieee.org/document/7280780",
     pdf: ijcnn15_paper},

    {title: "Towards a Neural Model of Bonding in Self-Attachment",
     journal: "Proceedings of the International Joint Conference on Neural Networks (IJCNN), 2015",
     author: "David Cittern, Abbas Edalat",
     link: "https://ieeexplore.ieee.org/document/7280548",
     pdf: ijcnn15b_paper},

    {title: "Reinforcement Learning for Nash Equilibrium Generation",
     journal: "Proceedings of the International Conference on Autonomous Agents and Multiagent Systems (AAMAS), 2015",
     author: "David Cittern, Abbas Edalat",
     link: "https://dl.acm.org/doi/10.5555/2772879.2773406",
     pdf: aamas15_paper},

    {title: "An Arousal-Based Neural Model of Infant Attachment",
     journal: "Proceedings of the IEEE Symposium Series on Computational Intelligence: Cognitive Algorithms, Mind, and Brain (IEEE SSCI), 2014",
     author: "David Cittern, Abbas Edalat",
     link: "https://ieeexplore.ieee.org/document/7020694",
     pdf: ssci14_paper},

    {title: "A Neural Model of Mentalization/ Mindfulness based Psychotherapy",
     journal: "Proceedings of the International Joint Conference on Neural Networks (IJCNN), 2014",
     author: "Abbas Edalat, Zheng Lin",
     link: "https://ieeexplore.ieee.org/document/6889896",
     pdf: ijcnn14_paper},

    {title: "Capacity of strong attractor patterns to model behavioural and cognitive prototypes",
     journal: "Proceedings of Advances in Neural Information Processing Systems (NeurIPS), 2013",
     author: "Abbas Edalat",
     link: "https://proceedings.neurips.cc/paper/2013/file/39e4973ba3321b80f37d9b55f63ed8b8-Paper.pdf",
     pdf: nips13_paper,
     supplement: nips13_supplement},

    {title: "Strong Attractors of Hopfield Neural Networks to Model Attachment Types and Behavioural Patterns",
     journal: "Proceedings of the International Joint Conference on Neural Networks (IJCNN), 2013",
     author: "Abbas Edalat, Federico Mancinelli",
     link: "https://ieeexplore.ieee.org/document/6706924",
     pdf: ijcnn13_paper},

    {title: "Trauma Hypothesis: The enduring legacy of the Mongol Catastrophe on the Political, Social and Scientific History of Iran",
     journal: "The Persian version appeared in Bukhara magazine, no. 77-78, January 2011 (1389), pages 227-263",
     author: "Abbas Edalat",
     link: "http://humandevelopment.doc.ic.ac.uk/papers/Mongols-Bukhara-77-78.pdf",
     pdf: bukhara_paper},
  ];

const Publications = () => {
    return (
      <div className="container">
        {articles.map((article, index) => <div key={index} className={index % 2 === 0 ? ("medium") : ("dark")}>
          <div className='text-div'>
            <Typography variant="title" className="title">{article.title}<br/></Typography>
          </div>
          {article.journal !== undefined ? (
            <div className='text-div'>
              <Typography variant="description" className="description">{article.journal}<br/></Typography>
            </div> ) : (null)
          }
          <div className='text-div'>
            <Typography variant="author" className="author">{article.author}<br/></Typography>
          </div>
          <div className='button-div'>
          {article.link !== undefined ? (
              <div className='publication-button'>
                <Button 
                  style={{color: 'white', textTransform: 'none', fontSize: '15px', fontWeight: 600}} 
                  onClick={() => window.open(article.link, "_blank")}
                >
                  {article.title === "Trauma Hypothesis: The enduring legacy of the Mongol Catastrophe on the Political, Social and Scientific History of Iran" ? (
                    "Persian version") : ("View at publisher")}
                </Button>
              </div>
            ) : (null)
          }    
            <div className='publication-button'>
              <Button
                style={{color: 'white', textTransform: 'none', fontSize: '15px', fontWeight: 600}} 
                onClick={() => window.open(article.pdf, "_blank")}
              >
                PDF
              </Button>
            </div>
            {article.supplement !== undefined ? (
              <div className='publication-button'>
                <Button
                  style={{color: 'white', textTransform: 'none', fontSize: '15px', fontWeight: 600}} 
                  onClick={() => window.open(article.supplement, "_blank")}
                >
                  Supplementary material
                </Button>
              </div>) : (<div/>)
            }
          </div>
        </div>)}
      </div>
    );
}

export default Publications;