import React from "react";
import './project.css'
import arrow from '../assets/arrow.png';
import to from '../assets/ternakotot.png';
import ec from '../assets/iofest.png';
import nxb from '../assets/readingsite.png';
import soccer from '../assets/soccer.png';
import surviv from '../assets/surviv.png';
import mangasearch from '../assets/MangaSearch.png';

function Project(){
    return(
        <>
        <section id="Projects">
            <a href="#Projects" class="arrow"><img src={arrow} alt="" class="icon1"/></a>
            <p class="heading-p">Browse My</p>
            <h1 class="heading">Projects</h1>
            <div class="container project-container">
                <div class="project">
                    <img src={to} alt=""/>
                    <h3>Ternak Otot</h3>
                    <div class="header-action-aria">
                        <a href="https://github.com/handikurniawan1/TernakOtot" class="btn">Github</a>

                    </div>
                </div>
                <div class="project">
                    <img src={ec} alt=""/>
                    <h3>Earth Campaign</h3>
                    <div class="header-action-aria">
                        <a href="https://github.com/handikurniawan1/EarthCampaign" class="btn">Github</a>

                    </div>
                </div>
                <div class="project">
                    <img src={nxb} alt=""/>
                    <h3>Nxb Manga</h3>
                    <div class="header-action-aria">
                        <a href="https://github.com/handikurniawan1/MangaReadingSite" class="btn">Github</a>
                        <a href="https://niceuanime.github.io/BorutoMangaFree/" target="_blank" class="btn">Live Demo</a>
                    </div>
                </div>
                <div class="project">
                    <img src={soccer} alt=""/>
                    <h3>Olale Soccer</h3>
                    <div class="header-action-aria">
                        <a href="https://github.com/handikurniawan1/Olale-Soccer-Online" class="btn">Github</a>
                    </div>
                </div>
                <div class="project">
                    <img src={surviv} alt=""/>
                    <h3>Surviv</h3>
                    <div class="header-action-aria">
                        <a href="https://github.com/handikurniawan1/Surviv" class="btn">Github</a>
                    </div>
                </div>
                <div class="project">
                    <img src={mangasearch} alt=""/>
                    <h3>Search Manga Availability</h3>
                    <div class="header-action-aria">
                        <a href="https://github.com/handikurniawan1/MangaSearch" class="btn">Github</a>
                    </div>
                </div>
        
            </div>
        </section>
        </>
    )
}

export default Project