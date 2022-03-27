import React, { useState } from 'react';
import Modal from '../Modal';
import { useSpring, animated, config } from 'react-spring';

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
            {isModalOpen && <Modal toggleModal={toggleModal} currentPhoto={currentPhoto} />}
            <div className="row d-flex justify-content-center m-3">
                <h1>Portfolio</h1>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {[...Array(n)].map((image, i) =>
                                <div key={i} className="col">
                                    <Card>
                                        <div key={i} className="card shadow-sm">
                                            <img
                                                src={require(`../../images/thumbnail/Photo${i + 1}.jpg`)}
                                                className="portfolio-img bd-placeholder-img card-img-top"
                                                width="100%"
                                                height="225"
                                                key={i}
                                                onClick={() => { toggleModal(); setCurrentPhoto(i) }}
                                            />
                                        </div>
                                    </Card>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

    function Card({ children }) {
        const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
        const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: config.default }))

        return (
            <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => (set({ xys: calc(x, y) }))}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{
                    transform: props.xys.interpolate(trans)
                }}
            >
                {children}
            </animated.div>
        );
    }
}

export default Portfolio;