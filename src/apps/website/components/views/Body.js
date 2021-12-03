import React, { Component } from 'react'
import Contact from './Contact'
import Testimonies from './Testimonies'

class Body extends Component {
    render() {
        return (
            <div className="main-body">
                {/* <div className="contents">section A</div> */}
                <div className="contents" >
                    <Testimonies/>
                </div>
                <div id="contact">
                    <Contact/>
                </div>
                
            </div>
        )
    }
}

export default Body
