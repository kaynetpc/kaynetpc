import React from 'react';
import './Maintenance.css'
import {RiSettings5Line} from 'react-icons/ri'

function Maintenance(props, {show = false}) {
    return (
        <div className="mentainace">
            {props.children}
            <div className="overlay">
                <div className="inner-overlay">
                    <RiSettings5Line/>
                    Site Under Maintenance
                    <RiSettings5Line/>
                </div>

            </div>
        </div>
    )
}

export default Maintenance
