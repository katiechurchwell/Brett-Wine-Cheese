import React from 'react';
import placeholderImage from "../../assets/images/placeholder.svg";

function About() {
    return (
        <section>
            <div class="row d-flex justify-content-center">
                <h1>About</h1>
                <div class="col-sm-4">
                    <figure class="figure">
                        <img src={placeholderImage} class="figure-img img-fluid rounded" alt="A headshot of Brett Claus"/>
                            <figcaption class="figure-caption">The croissant slinger himself!</figcaption>
                    </figure>
                </div>
                <div class="col-sm-4 d-flex align-items-center"><p>
                    Oat cake cake cupcake soufflé candy canes bear claw. Sweet roll ice cream wafer cookie carrot cake gummi bears. Gummies tart tootsie roll dragée powder sweet cotton candy toffee. Bear claw tart topping pastry brownie pastry tart shortbread lemon drops. Oat cake icing topping caramels sweet roll tiramisu bonbon pastry candy canes. Donut pudding jujubes shortbread candy tiramisu ice cream pudding. Cake sesame snaps sesame snaps lollipop marzipan sweet pie caramels. 
                </p>
                </div>
            </div>
        </section>
    )
}

export default About;