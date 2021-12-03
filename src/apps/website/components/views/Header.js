import React, { Component } from 'react'

class Header extends Component {
    render() {
        
        return (
            <div>
                <div className="center">
                    <div className="bg-orange height-2px width-50"></div>
                </div>
                <div class="header">
                    <a href="#default" class="logo">KNT</a>
                    <div class="header-right">
                        <a class="active" href="#home">Home</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                    </div>
                </div>
                <div className="center">
                    <div className="bg-black height-2px width-70"></div>
                </div>
                
            </div>
        )
    }
}

export default Header
