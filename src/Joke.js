import React, {Component} from "react";

class Joke extends Component{

    render() {
        
        return (
            <div>
                <div>{this.props.data.content}</div>
                
                <div className="profile-picture" style=
                {{ backgroundImage: `url(${"http://localhost:8080/profile-picture?id=" + this.props.data.user.pictureId})`}}
                ></div>

                <div>{this.props.data.user.username}</div>
            </div>
        );
    }
}

export default Joke;