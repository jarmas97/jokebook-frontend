import React from "react";
import { Link } from "react-router-dom";

import Header from "../fragments/Header";
import Footer from "../fragments/Footer";

export default function() {
    
    return(
        
        <div>

            <div className="wrapper">
                <Header/>

                    <div className="content">
                    
                    </div>
            </div>

            <Footer/>

        </div>
        
    )
}