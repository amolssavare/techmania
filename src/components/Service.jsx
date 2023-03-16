import React from 'react'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/technology-monitor-alpha-coders-binary-wallpaper-preview.jpg";
import img2 from "../assets/istockphoto-537331500-170667a.jpg";


const Service = () => {
    return (
        <div>
            <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>
                <div>
                    <img src={img1} alt="Item1" />
                    <p className='legend'>Full Stack Developer</p>
                </div>
                <div>
                    <img src={img2} alt="Item1" />
                    <p className='legend'> Developer</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Service
