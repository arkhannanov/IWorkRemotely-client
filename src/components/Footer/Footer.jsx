import React from 'react';
import './Footer.scss';
import logo from './../../assets/images/logo-big.png'
import {NavLink} from "react-router-dom";
import facebook from './../../assets/images/facebook.png'
import telegram from './../../assets/images/telegram.png'
import vk from './../../assets/images/vk.png'

const Footer = () => {
  return (
    <div className='footer'>
      <NavLink to='/' className='footer__logo-container'>
        <img className='footer__logo' src={logo} alt='Logo'/>
      </NavLink>
      <div className='footer__social-icons-container'>
        <img className='footer__facebook' src={facebook} alt='Facebook'/>
        <img className='footer__telegram' src={telegram} alt='Telegramm'/>
        <img className='footer__instagram' src={vk} alt='Instagram'/>
      </div>
      <div className='footer__copyright'>© IWORKREMOTELY | Все права защищены.</div>
    </div>
  )
}

export default Footer;