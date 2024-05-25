import React from "react";
import './experience.css'
import arrow from '../assets/arrow.png';
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
                            <img src="/Handi_Kurniawan/src/assets/html.png" alt="" class="icon1"/>
                            <div>
                                <h4>HTML</h4>
                                <p>Experienced</p>
                            </div>
                        </div>
                        <div class="ex-div">
                            <img src="/Handi_Kurniawan/src/assets/css.png" alt="" class="icon1"/>
                            <div>
                                <h4>CSS</h4>
                                <p>Experienced</p>
                            </div>
                        </div>
                        <div class="ex-div">
                            <img src="/Handi_Kurniawan/src/assets/javascript.png" alt="" class="icon1"/>
                            <div>
                                <h4>Javascript</h4>
                                <p>Experienced</p>
                            </div>
                        </div>
                        <div class="ex-div">
                            <img src="/Handi_Kurniawan/src/assets/react.png" alt="" class="icon1"/>
                            <div>
                                <h4>React js</h4>
                                <p>Experienced</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="experience-box">
                    <h2>Backend Development</h2>
                    <div class="experience">
                        <div class="ex-div">
                            <img src="/Handi_Kurniawan/src/assets/nodejs.png" alt="" class="icon1"/>
                            <div>
                                <h4>Node Js</h4>
                                <p>Experienced</p>
                            </div>
                        </div>
                        <div class="ex-div">
                            <img src="/Handi_Kurniawan/src/assets/express.png" alt="" class="icon1"/>
                            <div>
                                <h4>express js</h4>
                                <p>Experienced</p>
                            </div>
                        </div>
                        <div class="ex-div">
                            <img src="/Handi_Kurniawan/src/assets/c++.png" alt="" class="icon1"/>
                            <div>
                                <h4>C++</h4>
                                <p>Experienced</p>
                            </div>
                        </div>
                        <div class="ex-div">
                            <img src="/Handi_Kurniawan/src/assets/cs.png" alt="" class="icon1"/>
                            <div>
                                <h4>C#</h4>
                                <p>Experienced</p>
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