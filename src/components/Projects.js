import React from 'react';
import { Link } from 'react-router-dom';
import ProjectPreview from './ProjectPreview';
import {projectPreviews} from '../utils/projectList';

const Projects = () => {
  return (
    <div class="container">
      <div class="tab-container" id="header">
        <Link class="tab-button" to="/">Home</Link>
        <Link class="tab-button" to="/projects">Projects</Link>
        <a class="tab-button" target="_blank" href="https://www.dropbox.com/s/h3iroluavw507ni/Rohith%20Jayaraman.pdf?dl=0#">Resume</a>
      </div>
      <div class="previews-container">
        {
          projectPreviews.map(preview => <ProjectPreview id={preview.id} text={preview.name} image={preview.image} />)
        }
      </div>
    </div>
  )
}

export default Projects;