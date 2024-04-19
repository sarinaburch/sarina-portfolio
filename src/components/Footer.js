import React from "react";
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bulma-social/bin/bulma-social.min.css';

const styles = {
    footer: {
        textAlign: "center"
    },
    icons: {
        margin: "2px"
    }
}

function Footer() {
    return (
        <footer style={styles.footer}>

            <div>

                <div>
                    <div>
                        {/* <a style={styles.icons} className="button is-medium is-facebook" href="https://www.facebook.com/sarina.burch" target="blank">
                            <span className="icon">
                                <i class="fab fa-facebook"></i>
                            </span>
                        </a> */}
                        <a style={styles.icons} className="button is-medium is-github" href="https://github.com/sarinaburch" target="blank">
                            <span className="icon">
                                <i className="fab fa-github"></i>
                            </span>
                        </a>

                        <a style={styles.icons} className="button is-medium is-linkedin" href="https://www.linkedin.com/in/sarina-burch-3b32a01a0/" target="blank">
                            <span className="icon">
                                <i className="fab fa-linkedin"></i>
                            </span>
                        </a>

                    </div>
                    <p>Sarina Burch Web Dev Copyright 2017</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

