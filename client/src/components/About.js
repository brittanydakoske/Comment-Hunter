import luis from '../images/luis.JPG';
import alex from '../images/alex.jpg';
import brit from '../images/Brit.jpg';
import brent from '../images/brent.jpg';
import nicole from '../images/nicole.jpg';
import denys from '../images/denys.jpg';
import joey from '../images/joey.jpg';
import React from 'react';

const group = [
    {
        image: alex,
        id: "three",
        name: "Alex Rose",
        role: "Back-end developer",
        // description: "Developed the back-end such as the database and the server. Original team member with the idea of developing a scrapper application as well."
    },
    {
        image: brent,
        id: "three",
        name: "Brent Gibson",
        role: "Project Manager",
        // description: "Developed the back-end such as the database and the server. Original team member with the idea of developing a scrapper application as well."
    },
    {
        image: brit,
        id: "three",
        name: "Brittany Dakoske",
        role: "Software Engineer",
        // description: "Developed the back-end such as the database and the server. Original team member with the idea of developing a scrapper application as well."
    },
    {
        image: nicole,
        id: "three",
        name: "Nicole Berlin",
        role: "Database Administrator",
        // description: "Developed the back-end such as the database and the server. Original team member with the idea of developing a scrapper application as well."
    },
    {
        image: luis,
        id: "three",
        name: "Luis Rangel",
        role: "React Developer",
        // description: "Developed the back-end such as the database and the server. Original team member with the idea of developing a scrapper application as well."
    },
    {
        image: denys,
        id: "three",
        name: "Denys Tavarez",
        role: "Front-end Developer",
        // description: "Developed the back-end such as the database and the server. Original team member with the idea of developing a scrapper application as well."
    },
    {
        image: joey,
        id: "one",
        name: "Joseph Wang",
        role: "Data Visualization Developer",
        // description: "Developed the back-end such as the database and the server. Original team member with the idea of developing a scrapper application as well."
    },

]


function About() {

  return (

    <div className="group-container">
        {group.map((prop) => (<div className="team-member" id={prop.id}><img src={prop.image}></img><h3>{prop.name}</h3><p className="role">{prop.role}</p></div>))}
    </div>
        

  );
}

export default About;
