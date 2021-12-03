import React, { Component } from 'react'
import Body from '../views/Body'
import Footer from '../views/Footer'
import Header from '../views/Header'

export class Home extends Component {
    render() {
        return (
            <div>
                {/* <Header/> */}
                <Body/>
                <Footer/>                
            </div>
        )
    }
}

export default Home
