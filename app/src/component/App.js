import React from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';
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
          pages={this.state.pages}
          onClick={(pageName) => alert(pageName)}
        />
        <p>Body Text</p>
        <Palette />
        <Footer />
      </div>
    );
  }
}

export default App;
