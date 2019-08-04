import React from 'react';
import './Header.scss';
import logo from './../../assets/images/logo.png'
import searchIcon from './../../assets/images/serach-icon.png'
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
      <NavLink to='/' className='header__logo-container'>
        <img className='header__logo' src={logo} alt='Logo'/>
      </NavLink>
      <nav className='header__navigation'>
        <NavLink to='/find-job' className='header__navigation-item'>Найти работу</NavLink>
        <NavLink to='/categories' className='header__navigation-item'>Категории</NavLink>
        <NavLink to='/resources' className='header__navigation-item'>Ресурсы</NavLink>
        <NavLink to='/communities' className='header__navigation-item'>Сообщества</NavLink>
      </nav>
      <div className='header__search-icon-container'>
        <img className='header__search-icon' src={searchIcon} alt='Search Icon'/>
      </div>
      <NavLink to='/post-job' className='header__post-job-container'>
        <button className='header__post-job'>Разместить вакансию</button>
      </NavLink>
    </div>
  )
}

export default Header;