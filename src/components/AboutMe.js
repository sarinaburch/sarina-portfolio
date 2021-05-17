import React from 'react';

import me from '../Images/me.jpg';


const style = {
    title: {
        fontWeight: "bold",
        color: "white",
        fontSize: "20px"
    },
    background:
    {
        marginTop: "37px",
        textAlign: "center"
    },
    column: {
        marginTop: "20px",
        color: "grey"
    },
    hr: {
        marginTop: "10px"
    }
}

function AboutMe() {
    return (
        <div>
            <div class="tile is-ancestor" style={style.column}>
                <div class="tile is-vertical is-11">
                    <div class="tile">
                        <div class="tile is-parent is-vertical"><article class="tile is-child">
                            <p class="title" style={style.title}>My name is Sarina...</p>
                            <figure class="image is-3by4">
                                <img alt="" src={me} />
                            </figure>
                        </article>

                            {/* <article class="tile is-child notification ">
                                <p class="title">...tiles</p>
                                <p class="subtitle">Bottom tile</p>
                            </article> */}
                        </div>
                        <div class="tile is-parent is-centered" style={style.background}>
                            <article class="tile is-child is-12" >
                                <p>I was born and raised in the tiny town of Hillsboro, Wisconsin. I currently live in Charlotte, NC, but I have called many cities home over the last 8 years including, New York City and Milwaukee.</p>
                                <p style={style.hr}></p>
                                <p>I attended college at the University of Wisconsin-La Crosse. While there, I studied Business Communication Theory.</p>
                                <p style={style.hr}></p>
                                <p>After completing college, I entered into the world of Digital Marketing. Updating code on my clients' websites was my favorite part of the job, which is what sparked my interest in persuing a new career. I worked as a marketing and SEO professional for two years and recently decided to make a career change to Web Development.</p>
                                <p style={style.hr}></p>
                                <p>When I'm not expanding my Web Development knowledge, I enjoy going on runs, playing with my pups, and exploring all the breweries and wine bars Charlotte has to offer.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
           <div>
               
           </div>
        </div>
    )
}

export default AboutMe;