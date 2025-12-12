import React from 'react';
import Masonry from '../components/Masonry';

// Import all images
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';
import img10 from '../assets/10.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

// Generate items array with imported images
const items = images.map((img, i) => ({
  id: i + 1,
  img: img,
  url: '#',
  height: 300 + Math.floor(Math.random() * 300), // Random height between 300-600px
}));

const Gallery = () => {
  return (
    <div className="gallery-container p-4">
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
    </div>
  );
};

export default Gallery;
