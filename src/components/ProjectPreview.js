import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

const ProjectPreview = (props) => {
  const {id, text, image} = props;
  return (
    <div class="preview-container">
    <Link class="preview-items-container" to={`/project/${id}`}>
      <div class="text">{text}</div>
      <img src={image} class="preview-photo" />
    </Link>
    </div>
  )
}

export default ProjectPreview;