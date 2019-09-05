import React from 'react';
import './Categories.scss';
import {NavLink} from "react-router-dom";

const Categories = () => {
  return (
    <div className='categories'>
      <NavLink to='/categories/programming' className='categories__programmimg-container'>
        <div className='categories__programmimg-logo'></div>
        <div className='categories__programmimg-content'>Программирование</div>
      </NavLink>
      <NavLink to='/categories/design' className='categories__design-container'>
        <div className='categories__design-logo'></div>
        <div className='categories__design-content'>Дизайн</div>
      </NavLink>
      <NavLink to='/categories/customer-support' className='categories__customer-support-container'>
        <div className='categories__customer-support-logo'></div>
        <div className='categories__customer-support-content'>Поддержка клиентов</div>
      </NavLink>
      <NavLink to='/categories/copyrighting' className='categories__copyrighting-container'>
        <div className='categories__copyrighting-logo'></div>
        <div className='categories__copyrighting-content'>Копирайтинг</div>
      </NavLink>
      <NavLink to='/categories/devops-system-administration' className='categories__devops-system-administration-container'>
        <div className='categories__devops-system-administration-logo'></div>
        <div className='categories__devops-system-administration-content'>DevOps & Сис админ</div>
      </NavLink>
      <NavLink to='/categories/sales-marketing' className='categories__sales-marketing-container'>
        <div className='categories__sales-marketing-logo'></div>
        <div className='categories__sales-marketing-content'>Продажи & Маркетинг</div>
      </NavLink>
      <NavLink to='/categories/business-management' className='categories__business-management-container'>
        <div className='categories__business-management-logo'></div>
        <div className='categories__business-management-content'>Бизнес & Менеджмент</div>
      </NavLink>
      <NavLink to='/categories/finance-legal' className='categories__finance-legal-container'>
        <div className='categories__finance-legal-logo'></div>
        <div className='categories__finance-legal-content'>Финансы & Юриспруденция</div>
      </NavLink>
      <NavLink to='/categories/product' className='categories__product-container'>
        <div className='categories__product-logo'></div>
        <div className='categories__product-content'>Продукт</div>
      </NavLink>
      <NavLink to='/categories/all-other' className='categories__all-other-container'>
        <div className='categories__all-other-logo'></div>
        <div className='categories__all-other-content'>Все Другие</div>
      </NavLink>

    </div>
  )
}

export default Categories;