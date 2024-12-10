import React from "react";
import { useNavigate } from "react-router-dom"; 

const Projects = () => {
    const navigate = useNavigate(); // Initialize the navigate hook
      
    const handleBackClick = () => {
      navigate('/'); // Navigate to the Carousel.js component (adjust the path if needed)
    };
    return (
        <div className="project-container">
        <span className="back2"onClick={handleBackClick}>BACK</span>
        <div className="project-main">
                <span className="category">EDUCATIONAL WEBSITE</span>
                <h1 className="project-title">Quant Guru</h1>
                <div className="project-image-container">
                    <img src="./main.png" className="project-image" alt="Quant Guru" />
                    <div className="project-description">
                        <div className="description-container">
                            <section className="description-section">
                                <h2 className="description-title">DESCRIPTION</h2>
                                <p className="description-text">
                                I worked on Quant Guru , an educational website designed to enhance learning experiences. 
                                The platform allows users to explore and watch educational videos fetched seamlessly using the YouTube API, 
                                enabling video streaming directly on the site. It features robust login and logout authentication through Google, 
                                ensuring a smooth and secure user experience. The platform also includes an online test functionality where users
                                 can answer questions fetched dynamically from a database, receive instant scores, and track their progress. Additionally, 
                                the website has a dedicated admin page where administrators can easily upload YouTube videos and 
                                add questions in a user-friendly interface, ensuring continuous content updates for learners.
                                </p>
                            </section>
                            <div className="divider-container">
                                <div className="divider" />
                            </div>
                            <section className="project-info">
                                <div className="info-grid">
                                    <div>
                                        <h3 className="info-title">TEAM:</h3>
                                        <p>Zieers Systems pvt</p>
                                    </div>
                                    <div>
                                        <h3 className="info-title">YEAR:</h3>
                                        <p>2024</p>
                                    </div>
                                    <div>
                                        <h3 className="info-title">ROLE:</h3>
                                        <p>LEAD FRONT-END DEVELOPER</p>
                                    </div>
                                    <div>
                                        <h3 className="info-title">BREAKPOINTS:</h3>
                                        <p>DESKTOP: Web browser</p>
                                    </div>
                                    <div>
                                        <h3 className="info-title">TECHNOLOGIES:</h3>
                                        <div className="elements">
                                        <p>JAVASCRIPT</p>
                                        <p>HTML</p>
                                        <p>CSS</p>
                                        <p>REACT</p>
                                        <p>NODEJS</p>
                                        <p>MONGODB</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-main2">
                <span className="category"></span>
                <h1 className="project-title">YouTube Skimmarizer</h1>
                <div className="project-image-container">
                    <img src="./youtube.jpeg" className="project-image" alt="Project Title 2" />
                    <div className="project-description">
                        <div className="description-container">
                            <section className="description-section">
                                <h2 className="description-title">DESCRIPTION</h2>
                                <p className="description-text">
                                The YouTube Skimmarizer is an interactive web application built with Streamlit that allows users to summarize 
                                YouTube videos and ask questions based on their content. By inputting a YouTube video URL, the app downloads 
                                the audio and uses the Deepgram API for speech-to-text transcription. It then summarizes the transcript using 
                                the Mistral AI API and enables users to ask questions about the summarized text, providing relevant answers with the
                                 same AI. The platform also includes a user authentication system, storing conversation history, including video URLs,
                                  questions, and answers, in a MySQL database for easy access and personalized interaction.
                                   This innovative tool combines advanced AI technologies to enhance user engagement with YouTube content.
                                </p>
                            </section>
                            <div className="divider-container">
                                <div className="divider" />
                            </div>
                            <section className="project-info">
                                <div className="info-grid">
                                    <div>
                                        <h3 className="info-title">TEAM:</h3>
                                        <p>Two</p>
                                    </div>
                                    <div>
                                        <h3 className="info-title">YEAR:</h3>
                                        <p>2024</p>
                                    </div>
                                    <div>
                                        <h3 className="info-title">ROLE:</h3>
                                        <p>College project</p>
                                    </div>
                                    <div>
                                        <h3 className="info-title">BREAKPOINTS:</h3>
                                        <p>DESKTOP: Web browser</p>
                                    </div>
                                    <div>
                                        <h3 className="info-title">TECHNOLOGIES:</h3>
                                        <div className="elements">
                                            <p>Python</p>
                                            <p>Streamlit</p>
                                            <p>Mistral AI API</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
