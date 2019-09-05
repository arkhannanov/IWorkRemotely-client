import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import Top from "./components/Top/Top";
import Categories from "./components/Categories/Categories";
import JobsContainer from "./components/Job/JobsContainer";
import Footer from "./components/Footer/Footer";
import PostAJob from "./components/PostAJob/PostAJob";
import {jobsAPI} from "./api/api";

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