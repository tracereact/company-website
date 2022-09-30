import React from 'react';
import '../styles/carousel.css';

const Carousel = () => {

  // React.useEffect(() => {
  //   // document.getElementById('carousel').scrollIntoView ({
  //   //   behavior: 'smooth',
  //   //   inline: 'start',
  //   //   block: 'nearest'
  //   // });

  //   const carouselItems = document.querySelectorAll('.carousel .item');

  //   const firstItem = carouselItems[0];
  //   const lastItem = carouselItems[carouselItems.length - 1];

  //   // Cloning first and last item
  //   firstItem.before(React.cloneElement(lastItem)); 
  //   lastItem.after(React.cloneElement(firstItem)); 

  // }, []);  

  return (
    <div className="carousel-container">
      <button className="previous button" type="button">
        <i className="fa-sharp fa-solid fa-chevron-left" />
      </button>
      <ul className="carousel">
        <li id="javascript" className="item">
          <i className="item-icon fa-brands fa-square-js" />
          <div className="item-title">JavaScript</div>
          <div className="item-num">1</div>
        </li>
        <li id="html" className="item">
          <i className="item-icon fa-brands fa-html5" />
          <div className="item-title">HTML5</div>
          <div className="item-num">2</div>
        </li>
        <li id="css" className="item">
          <i className="item-icon fa-brands fa-css3" />
          <div className="item-title">CSS3</div>
          <div className="item-num">3</div>
        </li>
      </ul>
      <button className="next button" type="button">
        <i className="fa-sharp fa-solid fa-chevron-right" />
      </button>
    </div>
  );
};

export default Carousel;