import React from 'react';
import './Footer.css';

import mail from './../../assets/mail.png';
import phone from './../../assets/phone.png';
import locationPin from './../../assets/location_pin.png';
import github from './../../assets/github.png'
import linkedin from './../../assets/linkedin.png';
import facebook from './../../assets/facebook.png';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <ContactInfo />
        <Socials />
      </footer>
    );
  }
}

function ContactInfo(props) {
  return (
    <ul className='contact-info'>
      <li>
        <p>
          He/Him
        </p>
      </li>
      <li>
        <a href="mailto:btdavis9999@gmail.com">
          <img src={mail} alt='mail icon' className='icon' />
          <p>btdavis9999@gmail.com</p>
        </a>
      </li>
      <li>
        <a href="tel:1-501-282-4834">
          <img src={phone} alt='phone icon' className='icon' />
          <p>501.282.4834</p>
        </a>
      </li>
      <li>
        <img src={locationPin} alt='location pin icon' className='icon' />
        <p>Madison, WI, USA</p>
      </li>
    </ul>
  );
}

function Socials(props) {
  return (
    <ul className='socials'>
      <li>
        <a href='https://github.com/brocktdavis' target='_blank'>
          <img src={github} alt='GitHub icon' className='icon' />
        </a>
      </li>
      <li>
        <a href='https://linkedin.com/in/brocktdavis' target='_blank'>
          <img src={linkedin} alt='LinkedIn icon' className='icon' />
        </a>
      </li>
      <li>
        <a href='https://facebook.com/brock.davis.946' target='_blank'>
          <img src={facebook} alt='facebook icon' className='icon' />
        </a>
      </li>
    </ul>
  );
}


export default Footer;