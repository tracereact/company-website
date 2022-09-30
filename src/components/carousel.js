import React from 'react';
import '../styles/carousel.css';

const Carousel = () => {
  const [pos, changePos] = React.useState(0);
  const carouselItems = document.querySelectorAll('.carousel .item');

  const changeItem = () => {
    // Something is wrong with the carousel items list
    if (!carouselItems || carouselItems.length < 1) { return; }

    // Helper function to handle negative inputs
    const mod = (a, b) => {
      return ((a % b) + b) % b;
    };

    const itemNum = mod(pos, carouselItems.length);
    console.log(`Heading to item number ${itemNum}`);

    carouselItems[itemNum].scrollIntoView ({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest'
    });
  };

  // Go to the previous item in the carousel
  const goBack = () => {
    console.log('Backing up..');
    changePos(pos - 1);
    changeItem();
  };

  // Go to the next item in the carousel
  const goForth = () => {
    console.log('Going up..');
    changePos(pos + 1);
    changeItem();
  }; 

  return (
    <div className="carousel-container">
      <button className="previous button" type="button" onClick={goBack}>
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
      <button className="next button" type="button" onClick={goForth}>
        <i className="fa-sharp fa-solid fa-chevron-right" />
      </button>
    </div>
  );
};

export default Carousel;