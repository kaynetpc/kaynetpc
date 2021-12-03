import React from 'react';
import './ContactContents.css'

function ContactContents() {
    return (
        <div className="contact-container">
            <h3>Hire Us?</h3>
            <div className="contact-pane">
                <div>
                    <img src='/laptoppic.png' alt="Desktop App"/>
                    <span className="label">Desktop Application</span>
                    <p>
                    Cross-platform desktop app development services focus on building desktop software for Mac, Windows, and Linux, and upgrading it with new functionality. Established as a purely C++ development company over years, today kaynetpc continues to deliver high-end desktop software.
                    </p>
                    <input className="book-btn" type="button" value="Book Us Now" />
                </div>
                <div>
                    <img src='/webapp.png' alt="Web App"/>
                    <span className="label">Web Application</span>
                    <p>
                    Cross-platform desktop app development services focus on building desktop software for Mac, Windows, and Linux, and upgrading it with new functionality. Established as a purely C++ development company over years, today kaynetpc continues to deliver high-end desktop software.
                    </p>
                    <input className="book-btn" type="button" value="Book Us Now" />
                </div>
                <div>
                    <img src='/mobile.png' alt="Mobile App"/>
                    <span className="label">Mobile Application</span>
                    <p>
                    Cross-platform desktop app development services focus on building desktop software for Mac, Windows, and Linux, and upgrading it with new functionality. Established as a purely C++ development company over years, today kaynetpc continues to deliver high-end desktop software.
                    </p>
                    <input className="book-btn" type="button" value="Book Us Now" />
                </div>
            </div>
        </div>
    )
}

export default ContactContents
