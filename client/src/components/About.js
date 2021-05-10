import icon from '../images/cog.jpg';
import propic from '../images/luis.JPG';
import luis from '../images/luis.JPG';
import alex from '../images/alex.jpg';
import brit from '../images/Brit.jpg';
import brent from '../images/brent.jpg';
import nicole from '../images/nicole.jpg';
import denys from '../images/denys.jpg';
import joey from '../images/joey.jpg';
import React from 'react';
import { permittedCrossDomainPolicies } from 'helmet';
//import $ from 'jquery';

const group = [
    {
        image: alex,
        id: "three",
        name: "Alex Rose",
        role: "Back-end developer",
        description: "Configured Node server and managed system integrations."
    },
    {
        image: brent,
        id: "three",
        name: "Brent Gibson",
        role: "Project Manager, Programmer",
        description: "Scheduled group meetings, and wrote programs in Python and SQLAlchemy used in the Data Management system component."
    },
    {
        image: brit,
        id: "three",
        name: "Brittany Dakoske",
        role: "Software Engineer",
        description: "Responsible for using of the Reddit API to push stock mentions to the database."
    },
    {
        image: nicole,
        id: "three",
        name: "Nicole Berlin",
        role: "Database Manager",
        description: "Worked on the database and managing the list of stock tickers for the site."
    },
    {
        image: luis,
        id: "three",
        name: "Luis Rangel",
        role: "Front-End Developer",
        description: "Responsible for setting up the client interface components using React.js."
    },
    {
        image: denys,
        id: "three",
        name: "Denys Tavarez",
        role: "Front-End Visualization Developer",
        description: "Responsible for the D3 Sunburst graphic and webpage aesthetics."
    },
    {
        image: joey,
        id: "one",
        name: "Joseph Wang",
        role: "Data Visualization Developer",
        description: "Developed the D3 BubbleChart graphic and worked on the webpage design."
    },

]


function About() {

  return (

    <div className="group-container">
        {group.map((prop) => (<div className="team-member" id={prop.id}><img src={prop.image}></img><h3>{prop.name}</h3><p className="role">{prop.role}</p><p>{prop.description}</p></div>))}
    </div>
        

  );
}

export default About;
