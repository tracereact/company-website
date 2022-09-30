import React, { useState, useEffect } from 'react';
import '../styles/carousel.css';

const Carousel = () => {
  const [carouselItems, setItems] = useState(null);
  let pos;

  // Gather items once page loads then scroll to initial item
  useEffect(() => {
    if (carouselItems) {
      if (carouselItems.length % 2 === 0) {
        // Go to the first median
        pos = (carouselItems.length / 2) - 1; 
      } else {
        // Take the integer portion only
        pos = Math.trunc(carouselItems.length / 2);
      }
      
      carouselItems[pos].scrollIntoView ({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest'
      });
    } else {
      setItems(document.querySelectorAll('.carousel .item'));
    }
  }, [carouselItems]);

  // Add or remove a clone from either side to simulate infinite scrolling
  const rotateItems = (dir) => {
    try {
      console.log(`rotating ${dir}...`);
      
      if (dir === 'forward') {
        const tempElement = carouselItems[0].cloneNode(true);
        carouselItems[0].remove();
        carouselItems[carouselItems.length - 1].after(tempElement);

      } else {
        const tempElement = carouselItems[carouselItems.length - 1].cloneNode(true);
        carouselItems[carouselItems.length - 1].remove();
        carouselItems[0].before(tempElement);
      }
      setItems(document.querySelectorAll('.carousel .item'));
    } catch (error) {
      console.error('Error with rotating items: ', error);
    }
  };

  const changeItem = () => {
    try {
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

    } catch(error) {
      // Something is wrong with the carousel items list
      console.error('Error with changing items: ', error);
    }
  };

  // Go to the previous item in the carousel
  const goBack = () => {
    console.log('Loading previous..');
    pos -= 1;
    changeItem();
    rotateItems('back');
  };

  // Go to the next item in the carousel
  const goForth = () => {
    console.log('Loading next..');
    pos += 1;
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
        <li id="css" className="item">
          <i className="item-icon fa-brands fa-react" />
          <div className="item-title">React</div>
          <div className="item-num">4</div>
        </li>
      </ul>
      <button className="next button" type="button" onClick={goForth}>
        <i className="fa-sharp fa-solid fa-chevron-right" />
      </button>
    </div>
  );
};

export default Carousel;