import React from 'react';
import './App.css';

import Header from './header/Header';
import Footer from './footer/Footer';
import Resume from './pages/Resume';
import Palette from './Palette';

const pages = ['Home', 'Resume'];

const paragraph1 = "I graduated from the University of Texas at Austin with a BS in Computer Science in 2021. I have been working at Epic Systems as a mobile software developer since September 2021. In my career I enjoy taking on new responsibilities and learning new thing about all aspects of software engineering. My hobbies include playing ultimate frisbee, cooking, and sudoku. I was a member of TUFF (Texas Ultimate Frisbee Friends) during my time at UT, and enjoyed competing at frisbee tournaments around the country. My favorite dishes to cook are gumbo, risotto, curry, and salmon (every which way). I enjoy watching Cracking the Cryptic on youtube, and have had endless fun completing various types of sudoku puzzles on their apps.";
const paragraph2 = "p2";
const paragraph3 = "p3";
const paragraph4 = "p4";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Home'
    }
  }

  changePage(pageStr) {
    this.setState({page: pageStr});
  }

  render() {
    let bodyContent = <p>404</p>;
    if (this.state.page == 'Home') {
      bodyContent = <p>{[paragraph1, paragraph2, paragraph3, paragraph4].join(<br />)}</p>
    } else if (this.state.page == 'Resume') {
      bodyContent = <Resume />
    }

    return (
      <div className="app">
        <Header
          className="app-header"
          pages={pages}
          onClick={(pageName) => this.changePage(pageName)}
        />
        <article className="app-body">
          {bodyContent}
          {/*<Palette />*/}
          {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac orci. Convallis aenean et tortor at. Et egestas quis ipsum suspendisse ultrices gravida. Metus aliquam eleifend mi in. Libero volutpat sed cras ornare arcu dui. Viverra adipiscing at in tellus integer. At urna condimentum mattis pellentesque id nibh tortor id. Arcu ac tortor dignissim convallis aenean et tortor at. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Orci dapibus ultrices in iaculis. Libero justo laoreet sit amet cursus sit amet dictum sit. Iaculis urna id volutpat lacus. Tincidunt eget nullam non nisi est sit amet facilisis magna. Nulla posuere sollicitudin aliquam ultrices. Blandit libero volutpat sed cras ornare arcu.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac orci. Convallis aenean et tortor at. Et egestas quis ipsum suspendisse ultrices gravida. Metus aliquam eleifend mi in. Libero volutpat sed cras ornare arcu dui. Viverra adipiscing at in tellus integer. At urna condimentum mattis pellentesque id nibh tortor id. Arcu ac tortor dignissim convallis aenean et tortor at. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Orci dapibus ultrices in iaculis. Libero justo laoreet sit amet cursus sit amet dictum sit. Iaculis urna id volutpat lacus. Tincidunt eget nullam non nisi est sit amet facilisis magna. Nulla posuere sollicitudin aliquam ultrices. Blandit libero volutpat sed cras ornare arcu.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac orci. Convallis aenean et tortor at. Et egestas quis ipsum suspendisse ultrices gravida. Metus aliquam eleifend mi in. Libero volutpat sed cras ornare arcu dui. Viverra adipiscing at in tellus integer. At urna condimentum mattis pellentesque id nibh tortor id. Arcu ac tortor dignissim convallis aenean et tortor at. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Orci dapibus ultrices in iaculis. Libero justo laoreet sit amet cursus sit amet dictum sit. Iaculis urna id volutpat lacus. Tincidunt eget nullam non nisi est sit amet facilisis magna. Nulla posuere sollicitudin aliquam ultrices. Blandit libero volutpat sed cras ornare arcu.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac orci. Convallis aenean et tortor at. Et egestas quis ipsum suspendisse ultrices gravida. Metus aliquam eleifend mi in. Libero volutpat sed cras ornare arcu dui. Viverra adipiscing at in tellus integer. At urna condimentum mattis pellentesque id nibh tortor id. Arcu ac tortor dignissim convallis aenean et tortor at. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Orci dapibus ultrices in iaculis. Libero justo laoreet sit amet cursus sit amet dictum sit. Iaculis urna id volutpat lacus. Tincidunt eget nullam non nisi est sit amet facilisis magna. Nulla posuere sollicitudin aliquam ultrices. Blandit libero volutpat sed cras ornare arcu.</p>
          <p>Faucibus et molestie ac feugiat sed lectus. Lobortis mattis aliquam faucibus purus in massa tempor nec. Sed lectus vestibulum mattis ullamcorper velit. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Gravida dictum fusce ut placerat orci nulla pellentesque. Vestibulum sed arcu non odio euismod lacinia. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Et ultrices neque ornare aenean euismod. Feugiat vivamus at augue eget arcu dictum. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Dolor sit amet consectetur adipiscing. Nullam non nisi est sit amet. Justo donec enim diam vulputate ut pharetra sit. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Dapibus ultrices in iaculis nunc. Facilisis gravida neque convallis a cras semper auctor. Nec tincidunt praesent semper feugiat nibh sed. Ornare suspendisse sed nisi lacus sed.</p>*/}
        </article>
        <Footer className="app-footer" />
      </div>
    );
  }
}

export default App;
