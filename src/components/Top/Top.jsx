import React from 'react';
import './Top.scss';
import {NavLink} from "react-router-dom";

const Top = () => {
  return (
    <div className='top'>
      <div className='top__image'>
      </div>
      <div className='top__content'>
        <div className='top__content-header'>i work remotely</div>
        <div className='top__content-content'>I WORK REMOTELY - сообщество достойных людей для достойных удаленных ваканский.
        </div>
        <NavLink to='/post-a-job' className='top__post-job-container'>
          <button className='top__post-job'>Разместить вакансию за 500 р.</button>
        </NavLink>

      </div>

    </div>
  )
}

export default Top;