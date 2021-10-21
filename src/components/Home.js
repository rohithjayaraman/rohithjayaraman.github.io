import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import profilePicture from '../assets/profile.jpg';

const Home = () => {
  return (
    <div class="container">
      <div class="tab-container" id="header">
        <Link class="tab-button" to="/">Home</Link>
        <Link class="tab-button" to="/projects">Projects</Link>
        <a class="tab-button" target="_blank" href="https://www.dropbox.com/s/h3iroluavw507ni/Rohith%20Jayaraman.pdf?dl=0#">Resume</a>
      </div>
      <div class="body">
        <div class="name">Rohith Jayaraman</div>
        <div class="about">
          Masters in CS @ Northwestern University
        </div>
        <div class="small">
        <a target="_blank" href="https://www.github.com/rohithjayaraman">Github</a> | <a target="_blank"
            href="https://www.linkedin.com/in/rohith-jayaraman/">Linkedin</a>
        </div>
        <img src={profilePicture} class="profile-photo" />
        
        {/* <div class="quote">"Mirror mirror on the wall, so many bugs - how to get rid of them all?"</div> */}

        <div class="quote"><b>I code because I am a software engineer.</b></div>
        <div class="quote"><b>I code because it's challenging.</b></div>
        <div class="quote"><b>I code because somewhere between 3am debugging sessions and 9am classes, I find happiness in it.</b></div>
        <p></p>
        <div class="bio">Currently a masters in Computer Science at Northwestern, I love my program and I have learned a lot through it (head over to the projects tab to see some of my work). I will be graduating in March 2022 and I am looking for full time Software engineering roles. Stay in touch through LinkedIn!</div>
      </div>
    </div>
  )
}

export default Home;