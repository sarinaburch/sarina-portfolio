import React from 'react';
import dinner from '../Images/dinner.PNG';
import tracker from '../Images/tracker.demo.gif'
import '../styles/portfolio.css';
import amplifi from '../Images/amplifi.PNG';
import workoutTracker from '../Images/workoutTracker.gif';

const styles = {
    container: {
        backgroundColor: "black",
        padding: "10px"
    },
    h1: {
        fontSize: "30px",
        marginBottom: "10px",
        marginTop: "20px",
        textAlign: "center",
        color: "#FADBD8"
    },


    hr: {
        height: "1px",
        width: "100%",
        color: "#F1C40F",
        backgroundColor: "#F1C40F",
        marginTop: "20px",
        display: "inline-block"
    },

    br: {
        backgroundColor: "black"
    },
    columns: {
        margin: "15px"
    },

    hr2: {
        marginTop: "135px"
    },
    h2: {
        fontWeight: "bold",
        color: "white",
        fontSize: "20px"
    }
}

function Portfolio() {
    return (
        <div>
            <div className="hero" style={styles.container}>
                <div className="columns" >
                    <div className="column">
                        <h1 style={styles.h1} id="portfolio">Portfolio</h1>
                    </div>
                </div>
                <div className="columns" style={styles.columns}>
                    <div className="column is-three-fifth">
                        <div class="image-box">
                            <a href="https://sarinaburch.github.io/What-s-For-Dinner/" target="blank">
                                <img src={dinner} alt="what's for dinner" />
                            </a>
                        </div>
                    </div>

                    <div className="column is-two-fifth project">
                        <h2 style={styles.h2}>What's for Dinner?</h2>
                        <ul>
                            <li><a href="https://github.com/sarinaburch/What-s-For-Dinner" target="blank">View GitHub Repository | </a><a href="https://sarinaburch.github.io/What-s-For-Dinner/" target="blank">View Application</a></li>
                        </ul>
                    </div>
                </div>
                <div className="columns" style={styles.columns}>
                    <div className="column is-two-fifth project">
                        <h2 style={styles.h2}>Ampli-FI</h2>
                        <ul>
                            <li><a href="https://github.com/sarinaburch/Ampli-FI" target="blank">View GitHub Repository | </a><a href="https://amplifiyourlife.herokuapp.com/" target="blank">View Application</a></li>
                        </ul>
                    </div>
                    <div className="column is-three-fifth">
                        <div class="image-box">
                        <a href="https://amplifiyourlife.herokuapp.com/" target="blank"><img src={amplifi} alt="ampli-fi" /></a>
                        </div>
                    </div>
                </div>
                <div className="columns" style={styles.columns}>
                    <div className="column is-three-fifth">
                        <div class="image-box">
                        <a href="https://github.com/sarinaburch/employee-tracker"><img src={tracker} alt="employee tracker" /></a>
                        </div>
                    </div>
                    <div className="column is-two-fifth project">
                        <h2 style={styles.h2}>Employee Tracker</h2>
                        <ul>
                            <li><a href="https://github.com/sarinaburch/employee-tracker">View GitHub Repository</a></li>
                        </ul>
                    </div>
                </div>
                <div className="columns" style={styles.columns}>
                    <div className="column is-two-fifth project">
                        <h2 style={styles.h2}>Workout Tracker</h2>
                        <ul>
                            <li><a href="https://github.com/sarinaburch/Workout-Tracker">View GitHub Repository | </a><a href="https://still-plateau-83775.herokuapp.com/" target="blank">View Application</a></li>
                        </ul>
                    </div>
                    <div className="column is-three-fifth">
                        <div class="image-box">
                        <a href="https://still-plateau-83775.herokuapp.com/" target="blank"><img src={workoutTracker} alt="workout tracker" /></a>
                        </div>
                    </div>
                </div>
                <hr style={styles.hr} />
            </div>
        </div>
    )
}

export default Portfolio;