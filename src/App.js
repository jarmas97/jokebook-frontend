import './css/style.css';
import React, {Component} from 'react'
import Joke from "./Joke"

import facebook_icon from "./images/facebook_icon.png"
import instagram_icon from "./images/instagram_icon.png"
import twitter_icon from "./images/twitter_icon.png"
import youtube_icon from "./images/youtube_icon.png"
import logo from "./images/logo.png"


class App extends Component {
  
  state = {
    data: []
  }

  componentDidMount() {
    fetch("http://localhost:8080/jokes")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({data})
    });
  }

  render() {
    return (

      <div>
        
         <div class="wrapper">

          <div class="header">

            <div class="header-container">

              <a class="link-container" href="">
                <div class="logo" style={{ backgroundImage: `url(${logo})`}}></div>
              </a>

            </div>
              
          </div>

          <div class="tabs-header">

            <div class="tabs-header-container">
              <a href="" class="tab">STONA GŁÓWNA</a>
              <a href="" class="tab">O NAS</a>
              <a href="" class="tab">KONTAKT</a>
            </div>
              
            <div class="login-form-header">
              <a href="" class="tab">ZALOGUJ</a>
              <a href="" class="tab">ZAREJESTUJ</a>
            </div>
              
          </div>

          <div class="content">
            
            <div>
              {this.state.data.map(joke => <Joke info={joke}/>)}
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

        <div class="footer">

          <div class="footer-container">

            <a class="link-container" href="https://www.facebook.com/profile.php?id=100084885444881">
              <div class="image" style={{ backgroundImage: `url(${facebook_icon})`}}></div>
            </a> &nbsp;

            <a class="link-container" href="https://www.youtube.com/channel/UCw_TlbdOpOdaLO30sx2K_ZA">
              <div class="image" style={{ backgroundImage: `url(${youtube_icon})`}}></div>
            </a> &nbsp;

            <a class="link-container" href="https://www.instagram.com/jokebook.smile/">
              <div class="image" style={{ backgroundImage: `url(${instagram_icon})`}}></div>
            </a> &nbsp;

            <a class="link-container" href="https://twitter.com/BookJoke">
              <div class="image" style={{ backgroundImage: `url(${twitter_icon})`}}></div>
            </a> &nbsp;

            <br></br>
            <br></br>

              Copyright© 2022 All Rights Reserved

          </div>

        </div>

      </div>

    );
  }

}

export default App;
