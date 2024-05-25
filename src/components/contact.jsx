import React from "react";
import './contact.css'

function Contact(){

    return(
        <>
        <section id="Contact">
            <a href="#Contact" class="arrow"><img src="/Handi_Kurniawan/src/assets/arrow.png" alt="" class="icon1"/></a>
            <p class="heading-p">Get in Touch</p>
            <h1 class="heading">Contact Me</h1>
            <div class="contact-container container">
                <div class="email">
                    <img src="/Handi_Kurniawan/src/assets/email.png" alt="" class="icon1"/>
                    <a href="mailto:handikurniawan59@gmail.com"><h5>handikurniawan59@gmail.com</h5></a>
                </div>
                <div class="linkedin">
                    <img src="/Handi_Kurniawan/src/assets/linkedin.png" alt="" class="icon1"/>
                    <a href="https://www.linkedin.com/in/handi-kurniawan-576a21228/" target="_blank"><h5>Linkedin</h5></a>
                </div>
            </div>
        
        </section>
        </>
    )
}

export default Contact