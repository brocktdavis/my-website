import React from 'react';

import './Home.css';

import me from './../../assets/me.jpg';
import gallery1 from './../../assets/gallery1.jpg';
import gallery2 from './../../assets/gallery2.jpg';
import gallery3 from './../../assets/gallery3.jpg';
import gallery4 from './../../assets/gallery4.jpg';
import gallery5 from './../../assets/gallery5.jpg';
import gallery6 from './../../assets/gallery6.jpg';
import gallery7 from './../../assets/gallery7.jpg';
import gallery8 from './../../assets/gallery8.jpg';

const paragraphs = [
  "Hello! I'm Brock. I graduated from the University of Texas at Austin with a BS in Computer Science in 2021. I have been working at Epic Systems as a mobile software developer since September 2021. In my career I enjoy taking on new responsibilities and learning new things about all aspects of software engineering.",
  "My hobbies include playing ultimate frisbee, cooking, and sudoku. I was a member of TUFF (Texas Ultimate Frisbee Friends) during my time at UT, and enjoyed competing at frisbee tournaments around the country. My favorite dishes to cook are gumbo, risotto, curry, and salmon (every which way). I enjoy watching Cracking the Cryptic on youtube, and have had endless fun completing various types of sudoku puzzles on their apps."
];

class Home extends React.Component {
  render() {
    const content = paragraphs.map((paragraph, index) =>
      <p key={index}>{paragraph}</p>
    );

    return (
      <div className="home">
        <div className="top-section">
          <div>
            <h1>About me</h1>
            {content}
          </div>
          <img src={me} alt="picture of me" className="me-picture" />
        </div>
        <Gallery />
      </div>
    );
  }
}

function Gallery(props) {
  return (
    <div>
      <h1>Gallery</h1>
      <div className="gallery-grid">
        <div className="gallery-column">
          <img src={gallery1} />
          <img src={gallery2} />
        </div>
        <div className="gallery-column">
          <img src={gallery3} />
          <img src={gallery4} />
        </div>
        <div className="gallery-column">
          <img src={gallery5} />
          <img src={gallery6} />
        </div>
        <div className="gallery-column">
          <img src={gallery7} />
          <img src={gallery8} />
        </div>
      </div>
    </div>
  );
}

export default Home;