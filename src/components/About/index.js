import React from 'react';
import placeholderImage from "../../images/placeholder.svg";

function About(props) {
    return (
        <section>
            <div className="row d-flex justify-content-center m-3">
                <h1>About</h1>
                <div className="col-sm-4">
                    <figure className="figure">
                        <img src={placeholderImage} className="figure-img img-fluid rounded" alt="A headshot of Brett Claus"/>
                            <figcaption className="figure-caption">The croissant slinger himself!</figcaption>
                    </figure>
                </div>
                <div className="col-sm-4"><p>
                    Oat cake cake cupcake soufflé candy canes bear claw. Sweet roll ice cream wafer cookie carrot cake gummi bears. Gummies tart tootsie roll dragée powder sweet cotton candy toffee. Bear claw tart topping pastry brownie pastry tart shortbread lemon drops. Oat cake icing topping caramels sweet roll tiramisu bonbon pastry candy canes. Donut pudding jujubes shortbread candy tiramisu ice cream pudding. Cake sesame snaps sesame snaps lollipop marzipan sweet pie caramels.
                </p>
                <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-primary" onClick={ () => props.handleView('contact')}>Contact Me</button>
                </div>
                </div>
            </div>
        </section>
    )
}

export default About;