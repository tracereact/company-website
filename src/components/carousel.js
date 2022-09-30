import React, { useState, useEffect } from 'react';
import '../styles/carousel.css';

const Carousel = () => {
  const [carouselItems, setItems] = useState(null);

  // Gather items once page loads
  useEffect(() => {
    setItems(document.querySelectorAll('.carousel .item'));
  }, []);

  let pos = 0;
  // const carouselItems = document.querySelectorAll('.carousel .item');

  // Add or remove a clone from either side to simulate infinite scrolling
  const rotateItems = (dir) => {
    console.log(`rotating ${dir}...`);
    
    if (dir === 'forward') {
      const tempElement = carouselItems[pos - 1].cloneNode(true);
      carouselItems[carouselItems.length - 1].after(tempElement);
      carouselItems[pos - 1].remove();

    } else {
      const tempElement = carouselItems[pos + 1].cloneNode(true);
      carouselItems[0].before(tempElement);
      carouselItems[pos + 1].remove();
    }
    setItems(document.querySelectorAll('.carousel .item'));
  };

  const changeItem = () => {
    // Something is wrong with the carousel items list
    if (!carouselItems || carouselItems.length < 1) { 
      console.log('Error with items');
      return; 
    }

    // Helper function to handle negative inputs
    const mod = (a, b) => {
      return ((a % b) + b) % b;
    };

    const itemNum = mod(pos, carouselItems.length);
    console.log(`Heading to item number ${itemNum}`);
    // console.log(`Pos: ${pos}`);
    carouselItems[itemNum].scrollIntoView ({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest'
    });

  };

  // Go to the previous item in the carousel
  const goBack = () => {

    console.log('Going back..');
    pos -= 1;

    // Temp failsafe
    // if (pos < 0) { pos = 0; return; }
    changeItem();

    rotateItems('back');
  };

  // Go to the next item in the carousel
  const goForth = () => {
    console.log('Going up..');
    pos += 1;

    // Temp failsafe
    // if (pos > carouselItems.length - 1) { pos = carouselItems.length - 1; return; }

    // console.log('Going down..');
    changeItem();

    rotateItems('forward');
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