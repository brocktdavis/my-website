import React from 'react';

import './Home.css';

import me from './../../assets/me.jpg'

const paragraphs = [
  "I graduated from the University of Texas at Austin with a BS in Computer Science in 2021. I have been working at Epic Systems as a mobile software developer since September 2021. In my career I enjoy taking on new responsibilities and learning new thing about all aspects of software engineering. My hobbies include playing ultimate frisbee, cooking, and sudoku. I was a member of TUFF (Texas Ultimate Frisbee Friends) during my time at UT, and enjoyed competing at frisbee tournaments around the country. My favorite dishes to cook are gumbo, risotto, curry, and salmon (every which way). I enjoy watching Cracking the Cryptic on youtube, and have had endless fun completing various types of sudoku puzzles on their apps."
];

class Home extends React.Component {
  render() {
    const content = paragraphs.map((paragraph, index) =>
      <p key={index}>{paragraph}</p>
    );

    return (
      <div>
        <img src={me} alt="picture of me" className="me-picture" />
        {content}
      </div>
    );
  }
}

export default Home;