import React from "react";
import facebook_icon from "../images/facebook_icon.png"
import instagram_icon from "../images/instagram_icon.png"
import twitter_icon from "../images/twitter_icon.png"
import youtube_icon from "../images/youtube_icon.png"
import "../css/style.css"

export default function() {

    return(

        <div className="footer">
            <div className="footer-container">

                <a className="link-container" href="https://www.facebook.com/profile.php?id=100084885444881">
                    <div className="image" style={{ backgroundImage: `url(${facebook_icon})`}}></div>
                </a> &nbsp;

                <a className="link-container" href="https://www.youtube.com/channel/UCw_TlbdOpOdaLO30sx2K_ZA">
                    <div className="image" style={{ backgroundImage: `url(${youtube_icon})`}}></div>
                </a> &nbsp;

                <a className="link-container" href="https://www.instagram.com/jokebook.smile/">
                    <div className="image" style={{ backgroundImage: `url(${instagram_icon})`}}></div>
                </a> &nbsp;

                <a className="link-container" href="https://twitter.com/BookJoke">
                    <div className="image" style={{ backgroundImage: `url(${twitter_icon})`}}></div>
                </a> &nbsp;

                <br></br>

                Copyright© 2022 All Rights Reserved

            </div>
        </div>
    )
}