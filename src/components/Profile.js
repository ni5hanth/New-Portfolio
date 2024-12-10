import React from "react";
import { useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // GitHub icon
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'; // Gmail icon
import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; 
import '../App.css';

library.add(faGithub, faSquareEnvelope);

    const Profile = () => {
        const navigate = useNavigate(); // Initialize the navigate hook
      
        const handleBackClick = () => {
          navigate('/'); // Navigate to the Carousel.js component (adjust the path if needed)
        };
  return (
    <div className="intro">
      <div className="content">
        <span className="back"onClick={handleBackClick}>BACK</span>
        <div className="name">
          <div className="name-text">Hi I'm</div>
          <div className="name-text1">Nishanth</div>
          <div className="profession-text">A Web developer</div>
        </div>
      </div>
    <div className="info">
      <div className="pic-container">
        <img src="/image.png" className="profile-image" alt="profile" />
      </div>


      <div className="contact">
      <div className="social-icons">
        {/* GitHub Icon with beatFade animation */}
        <a href="https://github.com/ni5hanth" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" beatFade />
        </a>
        {/* Gmail Icon with beatFade animation */}
        <a href="mailto:nishanthnishu04@gmail.com">
          <FontAwesomeIcon icon={faSquareEnvelope} size="2x" beatFade />
        </a>
      </div>
      <button className="download-cv">
        {/* Link to Google Docs CV */}
        <a href="https://drive.google.com/uc?export=download&id=1J3J0qAkn7GXRXH02-1CA2Y1-n37l4UWQ" target="_blank" rel="noopener noreferrer">
          Download CV
        </a>
      </button>
      </div>
    </div>


      <div className="edu">
        <div className="logo">
          <div className="text">
          Hi there!<span> I'm Nishanth</span>, a passionate software developer and engineer who loves transforming ideas into reality through code. 
          What excites me the most about development is the magic of creating something that you can see, interact with,
           and bring to life—it's like turning imagination into a live experience.
          </div>

          <div className="degree">
          I completed my<span> Master's in Computer Applications</span> from <span>Dayananda Sagar College in Bangalore</span>, 
          which laid a solid foundation for my technical skills and problem-solving mindset. During my journey,
           I had the opportunity to intern at <span>Zieers Systems Pvt. Ltd.</span>, where I contributed to web development projects. 
          I worked on designing and building user interfaces as part of a dynamic team, focusing on creating seamless and engaging user experiences.
            Every project I undertake fuels my passion for learning and innovation. 
         I’m eager to continue crafting impactful digital solutions that make a difference.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
