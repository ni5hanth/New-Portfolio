import React from "react";
import { useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faHtml5, faCss3, faNode, faJava} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; 

const Skills = () => {
    const navigate = useNavigate(); // Initialize the navigate hook
      
    const handleBackClick = () => {
      navigate('/'); // Navigate to the Carousel.js component (adjust the path if needed)
    };
    return (
    
        <div className="skills-container">
             <div className="back1"onClick={handleBackClick}>BACK</div>
            <h2 className="skills-heading">Programming Languages</h2>
            <div className="programming-icons">
                <div className="icon-wrapper">
                    <FontAwesomeIcon icon={faJs} style={{color: "#FFD43B"}} className="program-icon" />
                    <p className="icon-label">JavaScript</p>
                </div>
                <div className="icon-wrapper">
                    <FontAwesomeIcon icon={faReact} style={{color: "#61dbfb"}} className="program-icon" />
                    <p className="icon-label">React</p>
                </div>
                <div className="icon-wrapper">
                    <FontAwesomeIcon icon={faHtml5} style={{color: "#F06529"}} className="program-icon" />
                    <p className="icon-label">HTML5</p>
                </div>
                <div className="icon-wrapper">
                    <FontAwesomeIcon icon={faCss3} style={{color: "#2965f1"}} className="program-icon" />
                    <p className="icon-label">CSS3</p>
                </div>
                <div className="icon-wrapper">
                    <FontAwesomeIcon icon={faNode} style={{color: "#68a063"}} className="program-icon" />
                    <p className="icon-label">Node.js</p>
                </div>
                <div className="icon-wrapper">
                    <img src="/python.png" alt="Python" className="program-icon1" />
                    <p className="icon-label">Python</p>
                </div>
                <div className="icon-wrapper">
                    <FontAwesomeIcon icon={faJava} style={{color: "#68a063"}} className="program-icon" />
                    <p className="icon-label">Java</p>
                </div>
                <div className="icon-wrapper">
                    <FontAwesomeIcon icon={faDatabase} style={{color: "pink"}} className="program-icon" />
                    <p className="icon-label">Database</p>
                </div>
            </div>

            <h2 className="skills-heading">Web Technologies</h2>
            <div className="techno">
                <div className="icon-wrapper">
                    <img src="/figma.png" alt="Figma" className="techno-icon" />
                    <p className="icon-label">Figma</p>
                </div>
                <div className="icon-wrapper">
                    <img src="/tailwind.svg" alt="Tailwind" className="techno-icon" />
                    <p className="icon-label">Tailwind</p>
                </div>
                <div className="icon-wrapper">
                    <img src="/bootstrap.svg" alt="Bootstrap" className="techno-icon" />
                    <p className="icon-label">Bootstrap</p>
                </div>
                <div className="icon-wrapper">
                    <img src="/three.png" alt="Three.js" className="techno-icon" />
                    <p className="icon-label">Three.js</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;
