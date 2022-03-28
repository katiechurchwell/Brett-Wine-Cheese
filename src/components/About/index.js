import React from 'react';
import headshot from "../../images/headshot.jpeg";

function About(props) {
    return (
        <section>
            <div className="row d-flex justify-content-center m-3">
                <h1>About</h1>
                <div className="col-sm-3">
                    <figure className="figure">
                        <img
                            src={headshot}
                            className="figure-img img-fluid"
                            id="headshot"
                            alt="A headshot of Brett Claus."
                        />
                        <figcaption className="figure-caption">The croissant slinger himself, Brett Claus!</figcaption>
                    </figure>
                </div>
                <div className="col-sm-4 d-flex flex-column align-items-center justify-content-center"><p>
                    Shortly after hiking the Appalachian Trail in 2017, Claus relocated to Orcas Island in Washington to pursue his love of baking. It was there at <a href="https://www.brownbearbaking.com/">Brown Bear Baking</a> he perfected the art of viennoiserie, laminating dough into croissant perfection!
                    <p></p>
                    <p> Claus has since moved to the Columbia Gorge to serve as the Pastry Lead at the <a href="https://www.skamania.com/">Skamania Lodge</a>. In his free time he still enjoys backpacking with his dog Cooper and partner Katie.</p>
                </p>
                    <button type="button" className="btn btn-primary" onClick={() => props.handleView('contact')}>Contact</button>
                </div>
            </div>
        </section>
    )
}

export default About;