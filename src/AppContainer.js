import React from 'react';
import {connect} from 'react-redux';
import {compose} from "redux";

import App from "./App";
import {getIsLoading} from "./redux/app-reducer";

var moment = require('moment');
moment.locale('ru');

class AppContainer extends React.Component {
  componentDidMount() {
    this.props.getIsLoading();
  }
  render() {return <App/>}
}

let mapStateToProps = (state) => {
  return {
    isLoading: state.jobsSection.isLoading
  }
}


export default compose(connect(mapStateToProps, {getIsLoading})
)(AppContainer);