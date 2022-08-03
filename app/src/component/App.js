import React from 'react';
import './App.css';

import Header from './header/Header';
import Footer from './footer/Footer';
import Resume from './pages/Resume';
import Palette from './Palette';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: ['Home', 'Resume'],
    }
  }

  render() {
    return (
      <div className="app">
        <Header
          className="app-header"
          pages={this.state.pages}
          onClick={(pageName) => alert(pageName)}
        />
        <article className="app-body">
          <Resume />
          <Palette />
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
