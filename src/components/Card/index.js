import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

function Card({ index, toggleModal, currentPhoto, setCurrentPhoto }) {

    //Hover animation
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
            <div className="card shadow-sm">
                <img
                    src={require(`../../images/thumbnail/Photo${index + 1}.jpg`)}
                    className="portfolio-img bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    onClick={() => { toggleModal(); setCurrentPhoto(index) }}
                />
            </div>
        </animated.div>
    )
}

export default Card;