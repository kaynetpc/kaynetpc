import React from 'react';
import './FooterContents.css';
import {BiPhone}  from 'react-icons/bi';
import {SiGooglemaps}  from 'react-icons/si';
import {BsEnvelope}  from 'react-icons/bs';
import {GrFacebookOption}  from 'react-icons/gr';
import {DiGithubBadge}  from 'react-icons/di';
import {FiTwitter}  from 'react-icons/fi';
import {FaLinkedinIn}  from 'react-icons/fa';
import {IoLogoWhatsapp}  from 'react-icons/io';

export default  function FooterContents() {
    return (
            <footer className="footer-distributed">
                <div className="footer-left">
                    <h3>Our outline</h3>
                    <p>
                    evelopment over time of systematic techniques for making and doing things. The term technology, a combination of the Greek technē, “art, craft,” with logos, “word, speech,” meant in Greece a discourse on the arts, both fine and applied. When it first appeared in English in the 17th century, it was used to mean a discussion of the applied arts only, and gradually these “arts” themselves came to be the object of the designation
                    </p>
                    <p className="footer-link">
                        <a href="#home">home</a>
                        <a href="#hire">hire</a>
                        
                    </p>
                <p class="footer-company-name">KaynetPc &copy; 2019</p>
                </div>
                <div className="footer-center">
                    <div>
                        <i class="fa fa-map-marker">
                            <SiGooglemaps />
                        </i>
                        <p>Lagos Nigeria</p>
                        </div>

                        <div>
                        <i class="fa fa-phone">
                        <BiPhone />
                        </i>
                        <p>+234 8137 414496   </p>
                        </div>

                        <div>
                        <i class="fa fa-envelope">
                            <BsEnvelope />
                        </i>
                        <p><a href="mailto:eakinwumikayode@gmail.com">eakinwumikayode@gmail.com</a></p>
                    </div>
                </div>
                <div className="footer-right"> 
                    <p class="footer-company-about">
                    <span>About the kaynet programming crew</span>
                    Kaynet programming crew Technologies is a blog for upcoming developers, Programmers, graphic designers, web developers &amp; SEO Learner.
                    </p>

                    <div class="footer-icons">

                    <a href="https://www.facebook.com/kaynetpc"><i class="fa"><GrFacebookOption /></i></a>
                    <a href="https://www.twitter.com/kaynetpc"><i class="fa"><FiTwitter /> </i></a>
                    <a href="https://www.linkedin.com/in/kaynetpc/"><i class="fa"><FaLinkedinIn /> </i></a>
                    <a href="https://www.github.com/kaynetpc"><i class="fa"><DiGithubBadge /></i></a>
                    <a href="https://wa.me/+23437414496"><i class="fa"><IoLogoWhatsapp /></i></a>
                </div> 
                </div>
            </footer>
    )
}





