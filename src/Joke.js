import React, {Component} from "react";

class Joke extends Component{

    render() {
        return (
            <div>
                <div>{this.props.info.content}</div>
                
            </div>
        );
    }
}

export default Joke;