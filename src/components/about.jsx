import React from "react";
import './about.css'
import arrow from '../assets/arrow.png';
import me from '../assets/cartoonme.jpg';
import edu from '../assets/education.png';
import book from '../assets/book.png';
function About(){

    return(
        <>
        <section id="About"> 
            <a href="#About" class="arrow"><img src={arrow} alt="" class="icon1"/></a>
            <p class="heading-p">Get to Know More</p>
            <h1 class="heading">About Me</h1>
            <div class="container about-container">
                <div class="about-left">
                    <img src={me} alt=""/>
                </div>
                <div class="about-right">
                    <div class="basic-edu">
                        <div class="edu-box">
                            <img src={edu} alt="" class="icon1"/>
                            <h4>Experience</h4>
                            <p>
                                2+ years <br/>
                                Frontend Development
                            </p>
                        </div>
                        <div class="edu-box">
                            <img src={book} alt="" class="icon1"/>
                            <h4>Eduaction</h4>
                            <p>
                                Bachelors Degree <br/>
                                S.kom Bachelors Degree
                            </p>
                        </div>
                    </div>
                    <p>
                    Nama saya adalah Handi Kurniawan, lulusan Sistem Informasi dengan pengalaman 2 tahun sebagai self-employed dalam pengembangan frontend. 
                    Selain itu, saya juga memiliki pengalaman 1 tahun dalam pengembangan dengan backend. 
                    Saya bersemangat untuk terus belajar dan berkembang dalam dunia teknologi informasi.
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}

export default About