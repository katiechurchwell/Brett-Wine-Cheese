import React, { useState } from 'react';
import Modal from '../Modal';
import Card from '../Card';

function Portfolio() {
    //States
    const [currentPhoto, setCurrentPhoto] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    //Amount of photos
    const n = 29;

    //Modal
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <section>
            {isModalOpen && <Modal toggleModal={toggleModal} currentPhoto={currentPhoto} />}
            <div className="row d-flex justify-content-center m-3">
                <h1>Portfolio</h1>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {[...Array(n)].map((image, i) =>
                                <div key={i} className="col">
                                    <Card index={i} toggleModal={toggleModal} currentPhoto={currentPhoto} setCurrentPhoto={setCurrentPhoto}></Card>
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