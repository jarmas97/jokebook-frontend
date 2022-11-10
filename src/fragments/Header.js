import React from "react";
import {Link} from "react-router-dom"
import logo from "../images/logo.png"
import '../css/style.css'

export default function() {

    return(
        <div>

            <div className="header">
                <div className="header-container">

                    <a className="link-container" href="">
                        <Link to="/" className="logo" style={{ backgroundImage: `url(${logo})`}}></Link>
                    </a>

                </div>
            </div>

            <div className="tabs-header">

                <div className="tabs-header-container">
                    <Link to="/" className="tab">STONA GŁÓWNA</Link>
                    <Link to="/about" className="tab">O NAS</Link>
                    <Link to="/contact" className="tab">KONTAKT</Link>
                </div>
    
                <div className="login-form-header">
                    <Link to="/login" className="tab">ZALOGUJ</Link>
                    <Link to="/register" className="tab">ZAREJESTUJ</Link>
                </div>
    
            </div>

        </div>
    )
}