import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Slick = () => {
    const carouselData = [
      {
        id: 1,
        title: 'Slide 1',
        imageUrl: 'https://res.cloudinary.com/dkajxnnlq/image/upload/v1690791545/whatsapp-icon-design_23-2147900929_uqwt44.avif',
      },
      {
        id: 2,
        title: 'Slide 2',
        imageUrl: 'https://res.cloudinary.com/dkajxnnlq/image/upload/v1690791545/whatsapp-icon-design_23-2147900929_uqwt44.avif',
      },
      {
        id: 3,
        title: 'Slide 3',
        imageUrl: 'https://res.cloudinary.com/dkajxnnlq/image/upload/v1690791545/whatsapp-icon-design_23-2147900929_uqwt44.avif',
      },
      // Add more slides as needed
    ];
  
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite:true
    };
  
    return (
      <div className="slidercontainer p-3">
      <Slider {...settings}>
        {carouselData.map((slide) => (
          <div key={slide.id}>
            <h3>{slide.title}</h3>
            <img  className="image"src={slide.imageUrl} alt={slide.title} />
          </div>
        ))}
      </Slider>
      </div>
    );
  };
  
  export default Slick;
  