import React, {Component} from "react";

class Joke extends Component{

    render() {

        var photoURL = "http://localhost:8080/profile-picture?userId=" + this.props.data.owner.id;

        return (
            <div>
                <div>{this.props.data.content}</div>
                <img src={photoURL}/>
                <div>{this.props.data.owner.username}</div>
            </div>
        );
    }
}

export default Joke;