import propic from '../images/luis.JPG';
import React from 'react';

function Slider() {

  return (
    <div className="slide hi-slide">
        <div className="hi-prev"/>
        <div className="hi-next"/>
        <ul className="team-container">
            <li>
                <div className="card">
                    <img className="profile-pic" src={propic} alt="Img 1"/>

                    <div className="description-title">
                        <h3>Luis Rangel</h3>
                        <p>Front-End Developer</p>
                    </div>
                    <p className="description-paragraph">Designed the interface of the application using React</p>
                </div>
            </li>
            <li>
                <div className="card">
                    <img className="profile-pic" src={propic} alt="Img 2"/>

                    <div className="description-title">
                        <h3>Luis Rangel</h3>
                        <p>Front-End Developer</p>
                    </div>
                    <p className="description-paragraph">Designed the interface of the application using React</p>
                </div>
            </li>
            <li>
                <div className="card">
                    <img className="profile-pic" src={propic} alt="Img 3"/>

                    <div className="description-title">
                        <h3>Luis Rangel</h3>
                        <p>Front-End Developer</p>
                    </div>
                    <p className="description-paragraph">Designed the interface of the application using React</p>
                </div>
            </li>
            <li>
                <div className="card">
                    <img className="profile-pic" src={propic} alt="Img 4"/>

                    <div className="description-title">
                        <h3>Luis Rangel</h3>
                        <p>Front-End Developer</p>
                    </div>
                    <p className="description-paragraph">Designed the interface of the application using React</p>
                </div>
            </li>
            <li>
                <div className="card">
                    <img className="profile-pic" src={propic} alt="Img 5"/>

                    <div className="description-title">
                        <h3>Luis Rangel</h3>
                        <p>Front-End Developer</p>
                    </div>
                    <p className="description-paragraph">Designed the interface of the application using React</p>
                </div>
            </li>
            <li>
                <div className="card">
                    <img className="profile-pic" src={propic} alt="Img 6"/>

                    <div className="description-title">
                        <h3>Luis Rangel</h3>
                        <p>Front-End Developer</p>
                    </div>
                    <p className="description-paragraph">Designed the interface of the application using React</p>
                </div>
            </li>
            <li>
                <div className="card">
                    <img className="profile-pic" src={propic} alt="Img 7"/>

                    <div className="description-title">
                        <h3>Luis Rangel</h3>
                        <p>Front-End Developer</p>
                    </div>
                    <p className="description-paragraph">Designed the interface of the application using React</p>
                </div>
            </li>

        </ul>

    </div>
  );
}

export default Slider;
