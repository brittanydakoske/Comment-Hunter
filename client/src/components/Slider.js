import icon from './images/cog.jpg';
import propic from './images/luis.JPG';
import React from 'react';
//import $ from 'jquery';


function Slider() {

  return (
    <div class="slide hi-slide">
        <div className="hi-prev"></div>
        <div className="hi-next"></div>
        <ul className="team-container">
            <li>
                <div className="card">
                    <img src={propic} alt="Img 1"></img>

                    <div className="description-title">
                        <h3>Luis Rangel</h3>
                        <p>Front-End Developer</p>
                    </div>
                    <p className="description-paragraph">Designed the interface of the application using React</p>
                </div>
            </li>
            <li>
                <div className="card">
                    <img src={propic} alt="Img 2"></img>

                    <div className="description-title">
                        <h3>Luis Rangel</h3>
                        <p>Front-End Developer</p>
                    </div>
                    <p className="description-paragraph">Designed the interface of the application using React</p>
                </div>
            </li>
            <li>
                <div className="card">
                    <img src={propic} alt="Img 3"></img>

                    <div className="description-title">
                        <h3>Luis Rangel</h3>
                        <p>Front-End Developer</p>
                    </div>
                    <p className="description-paragraph">Designed the interface of the application using React</p>
                </div>
            </li>
            <li>
                <div className="card">
                    <img src={propic} alt="Img 4"></img>

                    <div className="description-title">
                        <h3>Luis Rangel</h3>
                        <p>Front-End Developer</p>
                    </div>
                    <p className="description-paragraph">Designed the interface of the application using React</p>
                </div>
            </li>
            <li>
                <div className="card">
                    <img src={propic} alt="Img 5"></img>

                    <div className="description-title">
                        <h3>Luis Rangel</h3>
                        <p>Front-End Developer</p>
                    </div>
                    <p className="description-paragraph">Designed the interface of the application using React</p>
                </div>
            </li>
            <li>
                <div className="card">
                    <img src={propic} alt="Img 6"></img>

                    <div className="description-title">
                        <h3>Luis Rangel</h3>
                        <p>Front-End Developer</p>
                    </div>
                    <p className="description-paragraph">Designed the interface of the application using React</p>
                </div>
            </li>
            <li>
                <div className="card">
                    <img src={propic} alt="Img 7"></img>

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
