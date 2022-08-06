import React from 'react';
import './App.css';

import Header from './header/Header';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Palette from './Palette';
import Footer from './footer/Footer';

const pages = ['Home', 'Resume'];

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
      bodyContent = <Home />
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
        </article>
        <Footer className="app-footer" />
      </div>
    );
  }
}

export default App;
