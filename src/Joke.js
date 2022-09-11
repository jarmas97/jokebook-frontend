import React, {Component} from "react";
import { SERVER_URL } from './constants';


class Joke extends Component{

    render() {
        
        return (
            <div className="joke-wrapper">
                <div className="joke-author-wrapper">
                    <div className="joke-profile-picture" style=
                    {{ backgroundImage: `url(${SERVER_URL + '/profile-picture?id=' + this.props.data.user.pictureId})`}}
                    ></div>
                    <div className="joke-author">{this.props.data.user.username}</div>
                </div>
                <div className="joke-content">{this.props.data.content}</div>
            </div>  
        );
    }
}

export default Joke;