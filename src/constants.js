// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import spodenentLogo from './assets/company_logo/spodenent_logo.jpg';


// Education Section Logo's

import ParulLogo from './assets/education_logo/Parul_logo.jpg';
import NEBLogo from './assets/education_logo/NEB_logo.jpg';

// Project Section Logo's

import bookstoreappLogo from './assets/work_logo/bookstore_app.jpg';
import agritechLogo from './assets/work_logo/agri_tech.jpg';
import movierecLogo from './assets/work_logo/movie_rec.png';
import weatherappLogo from './assets/work_logo/weather_app.jpg';
import hotelappLogo from './assets/work_logo/hotel_app.jpg';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
    
      { name: 'Redux', logo: reduxLogo },

      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
   
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },

    ],
  },
  {
    title: 'Languages',
    skills: [
   
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
  
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: spodenentLogo,
      role: "Digital Marketing",
      company: "Spodenet",
      date: " 2022 - 3 months",
      desc: "Digital Course Selling",
      skills: [
        "Communication Skills"
      ],
    },

    {
      id: 0,
      img: spodenentLogo,
      role: " UI-UX Developer",
      company: "Swasthya Chetna PVT. LTD.",
      date: " 2026 - 3 months",
      desc: "Event Organizer Website",
      skills: [
        "HTLM5, CSS3, React.js, tailwind CSS, figma, Django,Flask, MongoDBS"
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: ParulLogo,
      school: "Parul University(PU), Vadodara, Gujarat India",
      date: "june 2022 - June 2026",
      grade: "8",
      desc: "I am  pursing my Bachelor of Technology (B.Tech) in Computer Science from Parul University, Gujarat. During my time at PU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. ",
      degree: "Bachelor of Technology in Computer Science & Engineering - B.Tech",
    },
 
    {
      id: 1,
      img: NEBLogo,
      school: "Mithila institute of Technology , Janakpur Nepal",
      date: "2019 - 2021",
      grade: "81%",
      desc: "I have completed my intermediate from Mithila institute of Technology , Janakpur Nepal, where I studied Physics, Chemistry, and Mathematics.",
      degree: "Grade(XII) - PCM(Physics, Chemsitry and Mathematics) ",
    },
    {
      id: 3,
      img: NEBLogo,
      school: "Bhadrakali Secondary English Boarding School, Janakpur Nepal.",
      date: "2019",
      grade: "76.25%",
      desc: "I have completed my secondary education fromBhadrakali Secondary English Boarding School, Janakpur Nepal.",
      degree: "Grade(X), Mathematics, Science and English",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title:  "BookStore_app",
      description:
        "I developed an online bookstore where users can browse books, add them to the cart, and place orders. The front end is built with React.js for a responsive and interactive interface, while Node.js and Express.js handle the back-end operations. MongoDB is used to manage books, user accounts, and orders securely. This project highlights my skills in full-stack web development and creating smooth user experiences.",
      image: bookstoreappLogo,
      tags: ["HTML5", "CSS", "Javascript","React.js", "MongoDB", "Node.js", "Express"],
      github: "https://github.com/sahatish/BookStoreApp",
      
    },
    {
      id: 1,
      title: "AgriTech Solutions",
      description:
        "AgriTech is a smart farming platform designed to make agriculture simpler and more profitable. It offers farmers an online marketplace  to trade products, rent or book farming tools, diagnose crop diseases,and get expert guidance on planting and harvesting by combining modern technology with pratical farming needs. AgriTech helps farmers improve efficency and increase productivity                                                                                             .                                             ",
      image: agritechLogo,
      tags: [ "HTML5", "CSS", "Javascript", "Bootstrap", "Flask", "MySQL", "MongoDB", "TensorFlow"],
      github: "https://github.com/sahatish/AgriTech_solutions",
     
    },
    // {
    //   id: 2,
    //   title: "Movie Recommendation App",
    //   description:
    //     "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    //   image: movierecLogo,
    //   tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    //   github: "https://github.com/codingmastr/Movie-Recommendation-App",
    //   webapp: "https://movie-recommendation-app-jet.vercel.app/",
    // },
    {
      id: 3,
      title: "Hotel_Booking_App",
      description:
        " This is an hotel booking system website with lots of facilities and luxuries provided to the customers , where a customers can book  rooms with an affordable prices.",
      image: hotelappLogo,
      tags: ["HTML", "CSS", "Bootstarp", "Django", "DSA - Searching & Sorting"],
      github: "https://github.com/sahatish/Hotel_booking_app",

    },
    {
      id: 4,
      title: "Weather_App",
      description:
        "A responsive Weather App built using React.js that fetches real-time weather data from a public API. It displays temperature, humidity, and weather conditions for any city with a clean and user-friendly interface.",
      image: weatherappLogo,
      tags: ["HTML", "CSS", "Javascript", "React.js"],
      github: "https://github.com/sahatish/Weather_app",
      webapp: "https://vercel.com/sahatishs-projects/weather-app",
    },
 
  ];  