import React from 'react';
import './App.scss';
import Header from "../Header/Header";
import {Route} from "react-router-dom";
import Top from "../Top/Top";
import Categories from "../Categories/Categories";
import JobsContainer from "../Job/JobsContainer";
import Footer from "../Footer/Footer";
import PostAJob from "../PostAJob/PostAJob";
import {jobsAPI} from "../../api/api";

const App = (props) => {
  let addJobPost = (data) =>
  { console.log(data);
    jobsAPI.postJob(data).then(response => {
      console.log(response.data)
    });
  }

  return (
    <div className='app-wrapper'>
      <Header/>

      <Route exact path='/'
             render={() => (
               <div>
                 <Top/>
                 <Categories/>
                 <JobsContainer/>
               </div>
             )}/>
      <Route exact path='/post-a-job'
             render={() => (
               <PostAJob onSubmit={addJobPost}/>
             )}/>

      <Footer/>
    </div>
  )
}

export default App;