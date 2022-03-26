import React from 'react';

function Portfolio() {

    const n = 29;

    return (
        <section>
            <div className="row d-flex justify-content-center m-3">
                <h1>Portfolio</h1>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {[...Array(n)].map((image, i) =>
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <img
                                            src={require(`../../images/thumbnail/Photo${i + 1}.jpg`)}
                                            className="portfolio-img bd-placeholder-img card-img-top"
                                            width="100%"
                                            height="225"
                                            key={i}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;