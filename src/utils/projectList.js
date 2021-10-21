import plantPreview from '../assets/plant-guru-main.png';
import pokedexPreview from '../assets/pokedex-main.png';
import pg1 from '../assets/plant-guru-1.png';
import pg2 from '../assets/plant-guru-2.png';
import pg3 from '../assets/plant-guru-3.png';
import pg4 from '../assets/plant-guru-4.png';
import pg5 from '../assets/plant-guru-5.png';
import pg6 from '../assets/plant-guru-6.png';
import pg7 from '../assets/plant-guru-7.png';
import pg8 from '../assets/plant-guru-8.png';
import rs1 from '../assets/resumesync-1.png';
import rs2 from '../assets/resumesync-2.png';
import rs3 from '../assets/resumesync-3.png';
import rs4 from '../assets/resumesync-4.png';
import pk1 from '../assets/eevee.png';
import pk2 from '../assets/gengar.png';
import pk3 from '../assets/rayquaza.png';
import pk4 from '../assets/wrong-input.png';
import pk5 from '../assets/ping-screenshot.png';
import ofc1 from '../assets/ofc-1.png';
import ofc2 from '../assets/ofc-2.png';
import fm1 from '../assets/a9.png';
import fm2 from '../assets/a9-a.png';
import cb1 from '../assets/a5-1.png';
import cb2 from '../assets/a5-2.png';
import c1 from '../assets/a7.png';
import c2 from '../assets/a7-2.png';
import c3 from '../assets/a7-3.png';
import c4 from '../assets/a7-4.png';
import sch1 from '../assets/scheduler-1.png';
import sch2 from '../assets/scheduler-2.png';

const projects = [
  {
    id: 'plant-recommender',
    name: 'Plant Recommender',
    images: [pg1, pg2, pg3, pg4, pg5, pg6, pg7, pg8],
    preview: plantPreview,
    imageClass: 'img-detail',
    description: 'A plant recommendation app built using React native that recommends a list of plants for your house',
    code: null
  },
  {
    id: 'resume-builder',
    name: 'Resume builder',
    images: [rs2, rs4, rs3, rs1],
    preview: rs1,
    imageClass: 'img-detail-wide',
    description: 'A resume generator/builder tool made using React that generates easy-to-share resumes based on the data input by the user',
    code: null
  },
  {
    id: 'pokedex-bot',
    name: 'Pokedex bot',
    images: [pk1, pk2, pk3, pk4, pk5],
    preview: pokedexPreview,
    imageClass: 'img-detail-wide',
    description: 'A discord bot made with NodeJS, Python that gives details on any pokemon when asked by the user',
    code: 'https://github.com/rohithjayaraman/discord-pokedex-bot'
  },
  {
    id: 'object-follower-car',
    name: 'Object follower car',
    images: [ofc1, ofc2],
    preview: ofc1,
    imageClass: 'img-detail-wide',
    description: 'A modularized object follower car (built with Python, ROS) that uses image detection to find objects and decides the trajectory, speed to move towards them',
    code: 'https://github.com/rohithjayaraman/object-follower-car'
  },
  {
    id: 'face-mask',
    name: 'Virtual face mask',
    images: [fm1,fm2],
    preview: fm1,
    imageClass: 'img-detail-wide',
    description: 'A mask (built with Javascript) which uses face detection and gives you a virtual mask',
    code: null,
    additionalDescription: 'Built as an assignment for the CS396 Generative methods class. The mask got featured in an article by Northwestern Engineering',
    article: 'https://www.mccormick.northwestern.edu/news/articles/2021/05/coding-costumes/'
  },
  {
    id: 'drunken-chatbot',
    name: 'Story generating chatbot',
    images: [cb1, cb2],
    preview: cb1,
    imageClass: 'img-detail-wide',
    description: 'A chatbot (built with Javascript) that asks the user to do some multiplication to see if he/she is drunk. If not, it generates a random story about what happened last night when you were drunk.',
    code: null,
    additionalDescription: 'The story was generated using a simple language grammar made with Tracery. Built as an assignment for the CS396 Generative methods class',
  },
  {
    id: 'catification-algo',
    name: 'Personalized eevee generator',
    images: [c1, c2, c3, c4],
    preview: c1,
    imageClass: 'img-detail-wide',
    description: 'A software that considers an infinite number of eevee (pokemon) evolutions and lets you generate them. Different parameters can be tuned via sliders to generate these eevee evolutions.',
    code: null,
    additionalDescription: 'Inspired from the catification algorithm (cryptokitties). Built as an assignment for the CS396 Generative methods class'
  },
  {
    id: 'course-planner',
    name: 'Course planner',
    images: [sch1, sch2],
    preview: sch1,
    imageClass: 'img-detail-wide',
    description: 'A course planner (made using React native) built to help schedule classes',
    code: 'https://github.com/rohithjayaraman/CoursePlanner',
    additionalDescription: 'Built as part of the CS394 Agile Software Development course'
  }
]

const projectPreviews = projects.map(project => ({
  id: project.id,
  name: project.name,
  image: project.preview
}))

export {
  projectPreviews,
  projects
};