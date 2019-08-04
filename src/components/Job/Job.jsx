import React from 'react';
import './Job.scss';
import {NavLink} from 'react-router-dom';
import {DateConverter} from "../../utils/time-converter/time-converter";
import 'moment/locale/ru';
import {NewTrigger} from "../../utils/new-trigger/new-trigger";

const Job = (props) => {

  return (
    <div>
      {
        Object.keys(props.jobs).length !== 0 && props.jobs.bestJobs.map(u => <div key={u._id} className='job'>
          <NavLink to='/jobs/id' className={u.status === 'none' ? 'job__container  job__container_modified' : 'job__container'}>
            <div className='job__icon-container'>
              <img className={u.status === 'none' || u.status === 'good' ? 'job_icon job_icon_modified' : 'job_icon'} src={`http://localhost:3000/${u.logo}`} alt='Job Icon' width='90'
                   height='90'/>
            </div>
            <div className='job__content'>
              <div className='job__company-name'>{u.name}</div>
              <div className='job__job-title'>{u.jobTitle}</div>
              <div className='job__description'>{u.jobType}/{u.region}</div>
            </div>
            <div className='job__tag-container'>
              {u.tags.split(',').map(element => <div key={u._id + element} className='job__tag-item'>{element}</div>)}
            </div>
            <div className='job__featured-container'>
              <div className='job__featured'>От редактора</div>
            </div>
            <div className ={ NewTrigger(u.createdAt) ?  'job__new' : 'job__new job__new_modified' }>Новое</div>
          </NavLink>
        </div>)
      }
      {
        Object.keys(props.jobs).length !== 0 && props.jobs.allOtherJobs.map(u => <div key={u._id} className='job'>
          <NavLink to='/jobs/id' className={u.status === 'none' ? 'job__container  job__container_modified' : 'job__container'}>
            <div className='job__icon-container'>
              <img className={u.status === 'none' || u.status === 'good' ? 'job_icon job_icon_modified' : 'job_icon'} src={`http://localhost:3000/${u.logo}`} alt='Job Icon' width='90'
                   height='90'/>
            </div>
            <div className='job__content'>
              <div className='job__company-name'>{u.name}</div>
              <div className='job__job-title'>{u.jobTitle}</div>
              <div className='job__description'>{u.jobType}/{u.region}</div>
            </div>
            <div className='job__tag-container'>
              {u.tags.split(',').map(element => <div key={u._id + element} className='job__tag-item'>{element}</div>)}
            </div>
            <div className='job__featured-container'>
              <div className='job__featured'>{DateConverter(u.createdAt)}</div>
            </div>
            <div className ={ NewTrigger(u.createdAt) ?  'job__new' : 'job__new job__new_modified' }>Новое</div>
          </NavLink>
        </div>)
      }
    </div>
  )
}

export default Job;