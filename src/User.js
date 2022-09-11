import React, {Component} from "react";
import { SERVER_URL } from './constants';


class Joke extends Component{

    render() {
        var photoURL = SERVER_URL + '/profile-picture?id=' + this.props.data.pictureId;
        return (
            <div>
                <img src={photoURL}/>
            </div>
        );
    }
}

export default Joke;