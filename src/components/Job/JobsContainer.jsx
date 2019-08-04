import React from 'react';
import {connect} from 'react-redux';
import {
  getAllOtherJobs,
  getBusinessManagementJobs,
  getCopyrightingJobs,
  getCustomerSupportJobs,
  getDesignJobs,
  getDevopsSystemAdministrationJobs, getFinanceLegalJobs, getProductJobs,
  getProgrammingJobs, getSalesMarketingJobs
} from '../../redux/jobs-reducer';
import Job from './Job';
import {compose} from "redux";
import './JobsContainer.scss';
import 'moment/locale/ru';
import {NavLink} from "react-router-dom";
import Preloader from "../Preloader/Preloader";

var moment = require('moment');
moment.locale('ru');

class JobsContainer extends React.Component {
  componentDidMount() {
    this.props.getProgrammingJobs();
    this.props.getDesignJobs();
    this.props.getCustomerSupportJobs();
    this.props.getCopyrightingJobs();
    this.props.getDevopsSystemAdministrationJobs();
    this.props.getSalesMarketingJobs();
    this.props.getBusinessManagementJobs();
    this.props.getFinanceLegalJobs();
    this.props.getProductJobs();
    this.props.getAllOtherJobs();
  }

  render() {
    return <>
      {this.props.isLoading ? <Preloader/>
        : <div className='jobs-container'>
          <div className='jobs-container__header-container'>
            <div className='jobs-container__title'>Программирование</div>
            <div className='jobs-container__time'>Последний пост
              был {Object.keys(this.props.programmingJobs).length !== 0
              && moment.utc(this.props.programmingJobs.lastPostTime).fromNow()}</div>
          </div>
          <Job jobs={this.props.programmingJobs}/>
          <div className='jobs-container__footer-container'>
            <NavLink to='/jobs/programming/all' className='jobs-container__footer'>Посмотреть
              все {this.props.programmingJobs.allJobsAmount} вакансий по Программированию</NavLink>
          </div>

          <div className='jobs-container__header-container'>
            <div className='jobs-container__title'>Дизайн</div>
            <div className='jobs-container__time'>Последний пост был {Object.keys(this.props.designJobs).length !== 0
            && moment.utc(this.props.designJobs.lastPostTime).fromNow()}</div>
          </div>
          <Job jobs={this.props.designJobs}/>
          <div className='jobs-container__footer-container'>
            <NavLink to='/jobs/programming/all' className='jobs-container__footer'>Посмотреть
              все {this.props.designJobs.allJobsAmount} вакансий по Дизайну</NavLink>
          </div>

          <div className='jobs-container__header-container'>
            <div className='jobs-container__title'>Поддержка клиентов</div>
            <div className='jobs-container__time'>Последний пост
              был {Object.keys(this.props.customerSupportJobs).length !== 0
              && moment.utc(this.props.customerSupportJobs.lastPostTime).fromNow()}</div>
          </div>
          <Job jobs={this.props.customerSupportJobs}/>
          <div className='jobs-container__footer-container'>
            <NavLink to='/jobs/programming/all' className='jobs-container__footer'>Посмотреть
              все {this.props.customerSupportJobs.allJobsAmount} вакансий по Поддержке клиентов</NavLink>
          </div>

          <div className='jobs-container__header-container'>
            <div className='jobs-container__title'>Копирайтинг</div>
            <div className='jobs-container__time'>Последний пост
              был {Object.keys(this.props.copyrightingJobs).length !== 0
              && moment.utc(this.props.copyrightingJobs.lastPostTime).fromNow()}</div>
          </div>
          <Job jobs={this.props.copyrightingJobs}/>
          <div className='jobs-container__footer-container'>
            <NavLink to='/jobs/programming/all' className='jobs-container__footer'>Посмотреть
              все {this.props.copyrightingJobs.allJobsAmount} вакансий по Копирайтингу</NavLink>
          </div>

          <div className='jobs-container__header-container'>
            <div className='jobs-container__title'>DevOps & Системное администрирование</div>
            <div className='jobs-container__time'>Последний пост
              был {Object.keys(this.props.devopsSystemAdministrationJobs).length !== 0
              && moment.utc(this.props.devopsSystemAdministrationJobs.lastPostTime).fromNow()}</div>
          </div>
          <Job jobs={this.props.devopsSystemAdministrationJobs}/>
          <div className='jobs-container__footer-container'>
            <NavLink to='/jobs/programming/all' className='jobs-container__footer'>Посмотреть
              все {this.props.devopsSystemAdministrationJobs.allJobsAmount} вакансий по DevOps & Системное
              администрирование</NavLink>
          </div>

          <div className='jobs-container__header-container'>
            <div className='jobs-container__title'>Продажи & Маркетинг</div>
            <div className='jobs-container__time'>Последний пост
              был {Object.keys(this.props.salesMarketingJobs).length !== 0
              && moment.utc(this.props.salesMarketingJobs.lastPostTime).fromNow()}</div>
          </div>
          <Job jobs={this.props.salesMarketingJobs}/>
          <div className='jobs-container__footer-container'>
            <NavLink to='/jobs/programming/all' className='jobs-container__footer'>Посмотреть
              все {this.props.salesMarketingJobs.allJobsAmount} вакансий по Продажи & Маркетинг</NavLink>
          </div>

          <div className='jobs-container__header-container'>
            <div className='jobs-container__title'>Бизнес & Менеджмент</div>
            <div className='jobs-container__time'>Последний пост
              был {Object.keys(this.props.businessManagementJobs).length !== 0
              && moment.utc(this.props.businessManagementJobs.lastPostTime).fromNow()}</div>
          </div>
          <Job jobs={this.props.businessManagementJobs}/>
          <div className='jobs-container__footer-container'>
            <NavLink to='/jobs/programming/all' className='jobs-container__footer'>Посмотреть
              все {this.props.businessManagementJobs.allJobsAmount} вакансий по Бизнес & Менеджмент</NavLink>
          </div>

          <div className='jobs-container__header-container'>
            <div className='jobs-container__title'>Финансы & Юриспруденция</div>
            <div className='jobs-container__time'>Последний пост
              был {Object.keys(this.props.financeLegalJobs).length !== 0
              && moment.utc(this.props.financeLegalJobs.lastPostTime).fromNow()}</div>
          </div>
          <Job jobs={this.props.financeLegalJobs}/>
          <div className='jobs-container__footer-container'>
            <NavLink to='/jobs/programming/all' className='jobs-container__footer'>Посмотреть
              все {this.props.financeLegalJobs.allJobsAmount} вакансий по Финансы & Юриспруденция</NavLink>
          </div>

          <div className='jobs-container__header-container'>
            <div className='jobs-container__title'>Продуктолог</div>
            <div className='jobs-container__time'>Последний пост был {Object.keys(this.props.productJobs).length !== 0
            && moment.utc(this.props.productJobs.lastPostTime).fromNow()}</div>
          </div>
          <Job jobs={this.props.productJobs}/>
          <div className='jobs-container__footer-container'>
            <NavLink to='/jobs/programming/all' className='jobs-container__footer'>Посмотреть
              все {this.props.productJobs.allJobsAmount} вакансий по Продуктологу</NavLink>
          </div>

          <div className='jobs-container__header-container'>
            <div className='jobs-container__title'>Все другие</div>
            <div className='jobs-container__time'>Последний пост был {Object.keys(this.props.allOtherJobs).length !== 0
            && moment.utc(this.props.allOtherJobs.lastPostTime).fromNow()}</div>
          </div>
          <Job jobs={this.props.allOtherJobs}/>
          <div className='jobs-container__footer-container'>
            <NavLink to='/jobs/programming/all' className='jobs-container__footer'>Посмотреть
              все {this.props.allOtherJobs.allJobsAmount} другие вакансие</NavLink>
          </div>
        </div>
      }
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    programmingJobs: state.jobsSection.programmingJobs,
    designJobs: state.jobsSection.designJobs,
    customerSupportJobs: state.jobsSection.customerSupportJobs,
    copyrightingJobs: state.jobsSection.copyrightingJobs,
    devopsSystemAdministrationJobs: state.jobsSection.devopsSystemAdministrationJobs,
    salesMarketingJobs: state.jobsSection.salesMarketingJobs,
    businessManagementJobs: state.jobsSection.businessManagementJobs,
    financeLegalJobs: state.jobsSection.financeLegalJobs,
    productJobs: state.jobsSection.productJobs,
    allOtherJobs: state.jobsSection.allOtherJobs,
    isLoading: state.jobsSection.isLoading
  }
}


export default compose(connect(mapStateToProps, {
    getProgrammingJobs,
    getDesignJobs,
    getCustomerSupportJobs,
    getCopyrightingJobs,
    getDevopsSystemAdministrationJobs,
    getSalesMarketingJobs,
    getBusinessManagementJobs,
    getFinanceLegalJobs,
    getProductJobs,
    getAllOtherJobs
  })
)(JobsContainer);