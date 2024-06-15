import React from 'react';
import Slider from 'react-slick';
import './testimonials.css';
import { testimonials } from '../../../constants'; // Adjust the path as needed

const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    centerMode: true,
    centerPadding: "0px",
    arrows: false, // Remove previous and next buttons
    dots: false, // Remove dots
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 2000, // Set the speed for automatic sliding (3 seconds)
  };

  return (
    <div className="testimonials-container">
        <div className='heading-container'>
            <h1 className="heading-h1">What Our Clients Think</h1>
            <h2 className='heading-h2'>Testimonials given by Our former and current Clients</h2>
            <p className="heading-p">Based on personal and google reviews</p>
        </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="image-container">
              <img className="testimonial-image" src={testimonial.image} alt={testimonial.name} />
            </div>
            <div className="testimonial-content">
              <div className="stars">
                {'★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating)}
              </div>
              <p className="quote">"{testimonial.quote}"</p>
              <p className="name">- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
