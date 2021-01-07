import React from 'react';
import Jumbotron from './Jumbotron';

const styles = {
    card: {
        opacity: "85%",
        marginBottom: "50px"
    },
    title: {
        fontSize: "30px",
        marginBottom: "10px",
        textAlign: "center",
        color: "#FADBD8",
        marginBottom: "45px"
},
    header: {
        textAlign: "center"
    }
}

function Contact() {
    return (
        <div >
            <section className="section">
            <h1 id="contact" className="title" style={styles.title}>Get In Touch</h1>
            <div className="container" >
                <div className="card" style={styles.card} >
                    <header className="card-header">
                        <p className="card-header-title is-centered">
                            Want to Work Together? Please reach out to me directly.</p>
                    </header>
                        <footer className="card-footer">
                            <a href = "mailto: sarinaburch52@gmail.com" class="card-footer-item">Email: sarinaburch52@gmail.com</a>
                        </footer>
                    </div>
                    <br />
                    <br />
                </div>
                </section>
            </div>

    )

}
export default Contact; 
{/* <div>
//     <ul>
//         <li>
//             <p>Charlotte, NC 28205, USA | 1.606.479.0095 | sarinaburch52@gmail.com</p>
//         </li>
//     </ul>
// </div> */}