import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/Home.css';
import { projects } from '../utils/projectList';
import { Link } from 'react-router-dom';


const ProjectDetail = () => {
  const {id} = useParams();
  const project = projects.filter(project => project.id === id)[0];
  console.log(id)
  console.log(project)
  
  return (
    <div class="container">
      <div class="tab-container" id="header">
        <Link class="tab-button" to="/">Home</Link>
        <Link class="tab-button" to="/projects">Projects</Link>
        <Link class="tab-button" to="/resume">Resume</Link>
      </div>
      <div class="detail-container">
        <div class="name">{project.name}</div>
        <div class="description">{project.description}</div>
        {
          'additionalDescription' in project ? <div class="description">{project.additionalDescription}</div> : null
        }
        {
          'article' in project ? <div class="code"><a target="_blank" href={project.article}>View the article</a></div> : null
        }
        {
          project.code ? <div class="code"><a target="_blank" href={project.code}>View the code</a></div> : null
        }
    <div class="img-container">
    {
        project.images.map(image => <img src={image} class={project.imageClass} />)
    }
    </div>
    </div>
    </div>
  )
}

export default ProjectDetail;