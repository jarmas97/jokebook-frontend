import './css/style.css';
import React, {Component} from 'react'
import Joke from "./Joke"
import User from "./User"
import { SERVER_URL } from './constants';

import facebook_icon from "./images/facebook_icon.png"
import instagram_icon from "./images/instagram_icon.png"
import twitter_icon from "./images/twitter_icon.png"
import youtube_icon from "./images/youtube_icon.png"
import logo from "./images/logo.png"


class App extends Component {
  
  state = {
    jokes: [],
    users: []
  }

  componentDidMount() {

    fetch(SERVER_URL + '/jokes')
    .then(response => response.json())
    .then(jokes => {
      console.log(jokes);
      this.setState({jokes})
    });

    fetch(SERVER_URL + '/users')
    .then(response => response.json())
    .then(users => {
      this.setState({users})
    });
  }

  render() {
    return (

      <div>
        
         <div className="wrapper">

          <div className="header">

            <div className="header-container">

              <a className="link-container" href="">
                <div className="logo" style={{ backgroundImage: `url(${logo})`}}></div>
              </a>

            </div>
              
          </div>

          <div className="tabs-header">

            <div className="tabs-header-container">
              <a href="" className="tab">STONA GŁÓWNA</a>
              <a href="" className="tab">O NAS</a>
              <a href="" className="tab">KONTAKT</a>
            </div>
              
            <div className="login-form-header">
              <a href="" className="tab">ZALOGUJ</a>
              <a href="" className="tab">ZAREJESTUJ</a>
            </div>
              
          </div>

          <div className="content">
            
            <div>
              {this.state.jokes.map(joke => <Joke data={joke}/>)}
            </div>


            {/* <h2><center>LOGOWANIE</center></h2>

            <form>

              <div class="sign-up-form">
                <div class="sign-up-form-row"> <label> NAZWA UŻYTKOWNIKA </label> </div>
                          
                <div class="sign-up-form-row"> <input type="text" name="username" required="required"></input> </div>
                <br></br>
              
                <div class="sign-up-form-row"> <label> HASŁO </label> </div>

                <div class="sign-up-form-row"> <input type="password" name="password" required="required"></input> </div>
                <br></br>
              
                <div class="sign-up-form-row"> <button type="submit">ZALOGUJ</button> </div>
              </div>

            </form> */}
              
          </div>

        </div>

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

      </div>

    );
  }

}

export default App;
