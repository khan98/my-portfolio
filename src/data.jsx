import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaJava, FaFileCode, FaPython } from 'react-icons/fa';
import eventfl from './assets/eventfl.jpg'; 
import users from './assets/users.jpg'; 
import cont from './assets/cont.jpg'; 
import a380 from './assets/a380.jpg'; 
import tokyo from './assets/tokyo.jpg'; 




export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-rose-600' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-rose-600' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'HTML & CSS',
    icon: <FaHtml5 className='h-16 w-16 text-rose-600' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences',
  },
  {
    id: nanoid(),
    title: 'Tailwind',
    icon: <FaFileCode className='h-16 w-16 text-rose-600' />,
    text: 'Thorough experience in Tailwind, providing a more advanced and optimized approach to styling.',
  },
  {
    id: nanoid(),
    title: 'Java',
    icon: <FaJava className='h-16 w-16 text-rose-600' />,
    text: 'Advanced experience with Java and the object-oriented approach.',
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <FaPython className='h-16 w-16 text-rose-600' />,
    text: 'Ample knowledge in Python and working with machine learning and statistical techniques.',
  }
];

export const projects = [
  {
    id: nanoid(),
    img: eventfl,
    url: 'https://drive.google.com/file/d/19GjlSqj-hQZdQ9C3-agfaw7XkDeHeTjo/view?usp=drive_link',
    github: 'https://github.com/khan98/capstone',
    title: 'EventFL',
    text: 'Merges event planning, social media, and Leaflet Map API to create an app that businesses and users can utilize to host, promote, and attend events.',
  },
  {
    id: nanoid(),
    img: users,
    url: 'https://github-users-databases.netlify.app/',
    github: 'https://github.com/khan98/github-users',
    title: 'Github User Database',
    text: 'Allows you to search up any Github user and returns data regarding followers, language composition, most popular/forked repos, and more',
  },
  {
    id: nanoid(),
    img: cont,
    url: 'https://contasically.netlify.app/',
    github: 'https://github.com/khan98/contasically',
    title: 'Contasically',
    text: 'Allows the user to simulate a real store interface including tracking and purchasing over 4000 orders fetched from ThunderClient. Browse in day or night mode',
  },
  {
    id: nanoid(),
    img: a380,
    url: 'https://insplash.netlify.app/',
    github: 'https://github.com/khan98/unsplash',
    title: 'Unsplash Image Generator',
    text: 'Searches and returns images of any available field from Unsplash Image API. Browse in day or night mode',
  },
  {
    id: nanoid(),
    img: 'https://media.licdn.com/dms/image/D4D12AQG2cZ9LSbCKvA/article-cover_image-shrink_720_1280/0/1679111769798?e=2147483647&v=beta&t=sQT99I0qLKaj9U8WmwDcV-4JBAtnufokOvWyYXvWJ_g',
    url: 'https://github.com/khan98/ChessbotAI',
    github: 'https://github.com/khan98/ChessbotAI',
    title: 'Chess Neural Network',
    text: 'Simulates a 1500 ELO chess player neural network using the alpha-beta pruning and min-max algorithms',
  },
  {
    id: nanoid(),
    img: tokyo,
    url: 'https://weathernetwork.netlify.app/',
    github: 'https://github.com/khan98/Weather-Proj',
    title: 'Live Forecasting',
    text: 'Returns live forecast for any city available in OpenWeatherMap API database. Fetches current user location and returns variable backgrounds based on the city',
  },
];
