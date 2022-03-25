import React from 'react';
import image1 from '../../assets/images/baking/Photo6.jpg'
import image2 from '../../assets/images/baking/Photo25.jpg'
import image3 from '../../assets/images/baking/Photo18.jpg'

function Carousel() {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={image1} class="d-block w-100 h-80" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={image2} class="d-block w-100 h-80" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={image3} class="d-block w-100 h-80" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default Carousel;