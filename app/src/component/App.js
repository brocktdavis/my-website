import React from 'react';
import './App.css';

import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <p>Body Text</p>
      </div>
    );
  }
}

export default App;
