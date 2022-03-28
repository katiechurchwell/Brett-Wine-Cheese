import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">
                        <span class="text-muted">© 2022 Brett Claus</span>
                    </div>
                    <div>
                   <h4><a href="https://www.linkedin.com/in/brett-claus-09644049/">< FaLinkedin /></a></h4> 
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer;