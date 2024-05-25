import React from "react";
import './nav.css';

function Nav(){

    return(
        <>
        <nav>
            <div class="container nav-container">
                <a href="#header" class="logo">Handi K</a>
                <ul class="nav-links">
                    <li><a href="#About">About</a></li>
                    <li><a href="#Experience">Experience</a></li>
                    <li><a href="#Projects">Project</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
        </nav>
        </>
    );
}

export default Nav;