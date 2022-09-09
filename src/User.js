import React, {Component} from "react";

class Joke extends Component{

    render() {
        var photoURL = "http://localhost:8080/profile-picture?id=" + this.props.data.pictureId;
        return (
            <div>
                <img src={photoURL}/>
            </div>
        );
    }
}

export default Joke;