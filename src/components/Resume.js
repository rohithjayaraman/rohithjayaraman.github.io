import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div class="container">
      <div class="tab-container" id="header">
        <Link class="tab-button" to="/">Home</Link>
        <Link class="tab-button" to="/projects">Projects</Link>
        <a class="tab-button" target="_blank" href="https://www.dropbox.com/s/h3iroluavw507ni/Rohith%20Jayaraman.pdf?dl=0#">Resume</a>
      </div>
      <div>
        IN PROGRESS....
      </div>
    </div>
  )
}

export default Resume;