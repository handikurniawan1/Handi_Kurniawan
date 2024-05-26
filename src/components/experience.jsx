import React from "react";
import './experience.css'
import arrow from '../assets/arrow.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png';
import node from '../assets/nodejs.png';
import cpp from '../assets/c++.png';
import cs from '../assets/cs.png';
import react from '../assets/react.png';
import ex from '../assets/express.png';
function Experience(){
    return(
        <>
        <section id="Experience">
            <a href="#Experience" class="arrow"><img src={arrow} alt="" class="icon1"/></a>
            <p class="heading-p">Explore My</p>
            <h1 class="heading">Experience</h1>
            <div class="container experience-container">
                <div class="experience-box">
                    <h2>Frontend Development</h2>
                    <div class="experience">
                        <div class="ex-div">
                            <img src={html} alt="" class="icon1"/>
                            <div>
                                <h4>HTML</h4>
                                <p>Experienced</p>
                            </div>
                        </div>
                        <div class="ex-div">
                            <img src={css} alt="" class="icon1"/>
                            <div>
                                <h4>CSS</h4>
                                <p>Experienced</p>
                            </div>
                        </div>
                        <div class="ex-div">
                            <img src={js} alt="" class="icon1"/>
                            <div>
                                <h4>Javascript</h4>
                                <p>Intermediate</p>
                            </div>
                        </div>
                        <div class="ex-div">
                            <img src={react} alt="" class="icon1"/>
                            <div>
                                <h4>React js</h4>
                                <p>Basic</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="experience-box">
                    <h2>Backend Development</h2>
                    <div class="experience">
                        <div class="ex-div">
                            <img src={node} alt="" class="icon1"/>
                            <div>
                                <h4>Node Js</h4>
                                <p>Basic</p>
                            </div>
                        </div>
                        <div class="ex-div">
                            <img src={ex} alt="" class="icon1"/>
                            <div>
                                <h4>express js</h4>
                                <p>Basic</p>
                            </div>
                        </div>
                        <div class="ex-div">
                            <img src={cpp} alt="" class="icon1"/>
                            <div>
                                <h4>C++</h4>
                                <p>Basic</p>
                            </div>
                        </div>
                        <div class="ex-div">
                            <img src={cs} alt="" class="icon1"/>
                            <div>
                                <h4>C#</h4>
                                <p>Basic</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Experience