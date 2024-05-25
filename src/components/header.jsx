import React, { useEffect } from "react";
import './header.css'
import Typed from "typed.js"; 
function Header(){

    useEffect(() => {
        
        var typingEffect = new Typed(".typedText",{
            strings : ["Frontend Developer","API Developer","UI/UX Designer"],
            loop : true,
            typeSpeed : 100, 
            backSpeed : 80,
            backDelay : 2000
        });

        
        return () => {
            typingEffect.destroy();
        };
    }, []); 
    return(
        <>
        <header id="header">
            <div class="container header-container">
                <div class="header-left">
                    <img src="/Handi_Kurniawan/src/assets/cartoonme.jpg" alt=""/>
                </div>
                <div class="header-right">
                    <p><b>Hello, I'm</b></p>
                    <h1>Handi Kurniawan</h1>
                    <div>
                        <h2><span class="typedText"></span></h2>
                    </div>
                    <div class="header-action-aria">
                        <a href="/Handi_Kurniawan/src/assets/resume.pdf" class="btn" download="HandiKurniawan_Resume">Download CV<img src="/Handi_Kurniawan/src/assets/cv.png" alt="" class="icon1"/></a>
                        <a href="#Contact" class="btn btn-dark">Contact Info</a>
                    </div>
                    <div class="header-social">
                        <a href="https://www.linkedin.com/in/handi-kurniawan-576a21228/" target="_blank"><img src="/Handi_Kurniawan/src/assets/linkedin.png" alt="" class="icon1"/></a>
                        <a href="https://github.com/handikurniawan1?tab=repositories" target="_blank"><img src="/Handi_Kurniawan/src/assets/github.png" alt="" class="icon1"/></a>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;
