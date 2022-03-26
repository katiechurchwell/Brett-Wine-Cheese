import React, { useState } from 'react';
import Modal from '../Modal';

function Portfolio() {
    const [currentPhoto, setCurrentPhoto] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    //amount of photos
    const n = 29;

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <section>
            {isModalOpen && <Modal toggleModal={toggleModal} currentPhoto={currentPhoto}/>}
            <div className="row d-flex justify-content-center m-3">
                <h1>Portfolio</h1>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {[...Array(n)].map((image, i) =>
                                <div key={i} className="col">
                                    <div key={i} className="card shadow-sm">
                                        <img
                                            src={require(`../../images/thumbnail/Photo${i + 1}.jpg`)}
                                            className="portfolio-img bd-placeholder-img card-img-top"
                                            width="100%"
                                            height="225"
                                            key={i}
                                            onClick={() => {toggleModal(); setCurrentPhoto(i)}}
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