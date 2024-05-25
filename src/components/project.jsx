import React from "react";
import './project.css'

function Project(){
    return(
        <>
        <section id="Projects">
            <a href="#Projects" class="arrow"><img src="/Handi_Kurniawan/src/assets/arrow.png" alt="" class="icon1"/></a>
            <p class="heading-p">Browse My</p>
            <h1 class="heading">Projects</h1>
            <div class="container project-container">
                <div class="project">
                    <img src="/Handi_Kurniawan/src/assets/ternakotot.png" alt=""/>
                    <h3>Ternak Otot</h3>
                    <div class="header-action-aria">
                        <a href="https://github.com/handikurniawan1/TernakOtot" class="btn">Github</a>
                        <a href="" class="btn">Live Demo</a>
                    </div>
                </div>
                <div class="project">
                    <img src="/Handi_Kurniawan/src/assets/iofest.png" alt=""/>
                    <h3>Earth Campaign</h3>
                    <div class="header-action-aria">
                        <a href="https://github.com/handikurniawan1/EarthCampaign" class="btn">Github</a>
                        <a href="" class="btn">Live Demo</a>
                    </div>
                </div>
                <div class="project">
                    <img src="/Handi_Kurniawan/src/assets/readingsite.png" alt=""/>
                    <h3>Nxb Manga</h3>
                    <div class="header-action-aria">
                        <a href="https://github.com/handikurniawan1/MangaReadingSite" class="btn">Github</a>
                        <a href="https://niceuanime.github.io/BorutoMangaFree/" target="_blank" class="btn">Live Demo</a>
                    </div>
                </div>
                <div class="project">
                    <img src="/Handi_Kurniawan/src/assets/soccer.png" alt=""/>
                    <h3>Olale Soccer</h3>
                    <div class="header-action-aria">
                        <a href="https://github.com/handikurniawan1/Olale-Soccer-Online" class="btn">Github</a>
                    </div>
                </div>
                <div class="project">
                    <img src="/Handi_Kurniawan/src/assets/surviv.png" alt=""/>
                    <h3>Surviv</h3>
                    <div class="header-action-aria">
                        <a href="https://github.com/handikurniawan1/Surviv" class="btn">Github</a>
                    </div>
                </div>
        
            </div>
        </section>
        </>
    )
}

export default Project