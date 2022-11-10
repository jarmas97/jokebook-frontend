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

                    <h2><center>REJESTRACJA</center></h2>

                    <form>
                        <div className="sign-up-form">
                            <div className="sign-up-form-row"> <label> NAZWA UŻYTKOWNIKA </label> </div>
                            
                            <div className="sign-up-form-row"> <input type="text" name="username" required="required"></input> </div>
                            <br></br>
                
                            <div className="sign-up-form-row"> <label> HASŁO </label> </div>

                            <div className="sign-up-form-row"> <input type="password" name="password" required="required"></input> </div>
                            <br></br>

                            <div className="sign-up-form-row"> <label> POWTÓRZ HASŁO </label> </div>

                            <div className="sign-up-form-row"> <input type="password" name="password" required="required"></input> </div>
                            <br></br>
                
                            <div className="sign-up-form-row"> <button type="submit">ZAREJESTRUJ</button> </div>
                        </div>
                    </form>

                </div>
            </div>

            <Footer/>

        </div>
        
    )
}