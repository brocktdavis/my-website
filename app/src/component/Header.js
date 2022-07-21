import React from 'react';
import './Header.css'


function BannerLink(props) {
  return (
    <li className='banner-link' onClick={props.onClick}>
      <p>{props.text}</p>
    </li>
  );
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <ul className='banner'>
          <BannerLink
            onClick={() => alert('banner click!')}
            text="BannerLink1"
          />
          <BannerLink
            onClick={() => alert('banner click2!')}
            text="BannerLink2"
          />
        </ul>
        <br className='banner-break' />
      </div>
    );
  }
}

export default Header;