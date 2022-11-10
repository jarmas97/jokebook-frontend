import React, { useState, useEffect } from 'react';

import Header from "../fragments/Header";
import Footer from "../fragments/Footer";
import { SERVER_URL } from "../constants";

export default function() {
    
    const [jokes, setJokes] = useState([]);
    const fetchPost = async () => {
        const response = await fetch(SERVER_URL + '/jokes');
        const data = await response.json();
        setJokes(data);
    };

    useEffect(() => {
        fetchPost();
    }, []);

    return(
        
        <div>

            <div className="wrapper"> {/*this is needed to make Footer stay on the bottom of page*/}

                <Header/>

                <div className="content">

                    {jokes.map(joke => (

                        <div className="joke-wrapper">
                            <div className="joke-author-wrapper">
                                <div className="joke-profile-picture" style=
                                    {{ backgroundImage: `url(${SERVER_URL + '/profile-picture?id=' + joke.user.pictureId})`}}
                                ></div>
                                <div className="joke-author">{joke.user.username}</div>
                            </div>
                            <div className="joke-content">{joke.content}</div>
                        </div>

                        ))}
                </div>
            </div>

            <Footer/>

        </div>
        
    )
}