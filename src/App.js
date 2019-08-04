import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import Top from "./components/Top/Top";
import Categories from "./components/Categories/Categories";
import JobsContainer from "./components/Job/JobsContainer";
import store from './redux/redux-store'

console.log(store.getState());

const App = (props) => {
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
  </div>
)
}

export default App;