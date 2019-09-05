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
        <NavLink to='/find-job' className='header__navigation-items-container'>Найти работу</NavLink>
        <div className='header__navigation-items-container'>Категории
          <div className='header__navigation-categories-container'>
            <NavLink to='/categories/programming/all' className='header__navigation-item'>Программирование</NavLink>
            <NavLink to='/categories/design/all' className='header__navigation-item'>Дизайн</NavLink>
            <NavLink to='/categories/customer-support/all' className='header__navigation-item'>Поддержка
              клиентов</NavLink>
            <NavLink to='/categories/copyrighting/all' className='header__navigation-item'>Копирайтинг</NavLink>
            <NavLink to='/categories/devops-system-administration/all' className='header__navigation-item'>DevOps &
              Системное администрирование</NavLink>
            <NavLink to='/categories/sales-marketing/all' className='header__navigation-item'>Продажи &
              Маркетинг</NavLink>
            <NavLink to='/categories/business-management/all' className='header__navigation-item'>Бизнес &
              Менеджмент</NavLink>
            <NavLink to='/categories/finance-legal/all' className='header__navigation-item'>Финансы &
              Юриспруденция</NavLink>
            <NavLink to='/categories/product/all' className='header__navigation-item'>Продуктолог</NavLink>
            <NavLink to='/categories/all-others/all' className='header__navigation-item'>Все другие</NavLink>
          </div>
        </div>

        <NavLink to='/resources' className='header__navigation-items-container'>Ресурсы</NavLink>
        <NavLink to='/communities' className='header__navigation-items-container'>Сообщества</NavLink>
      </nav>
      <div className='header__search-icon-container'>
        <img className='header__search-icon' src={searchIcon} alt='Search Icon'/>
      </div>
      <NavLink to='/post-a-job' className='header__post-job-container'>
        <button className='header__post-job'>Разместить вакансию</button>
      </NavLink>
    </div>
  )
}

export default Header;