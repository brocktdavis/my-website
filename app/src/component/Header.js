import React from 'react';
import './Header.css'


function HeaderLink(props) {
  return (
    <li className='header-link' onClick={props.onClick}>
      <p>{props.text}</p>
    </li>
  );
}

class Header extends React.Component {
  render() {
    const headerLinks = this.props.pages.map((pageName, index) =>
      <HeaderLink
        onClick={() => this.props.onClick(pageName)}
        text={pageName}
        key={index}
      />
    );

    return (
      <div>
        <ul className='header'>
          {headerLinks}
        </ul>
        <br className='header-break' />
      </div>
    );
  }
}

export default Header;