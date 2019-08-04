import {jobsAPI} from "../api/api";

const SET_PROGRAMMING_JOBS = 'SET_PROGRAMMING_JOBS';
const SET_DESIGN_JOBS = 'SET_DESIGN_JOBS';
const SET_CUSTOMER_SUPPORT_JOBS = 'SET_CUSTOMER_SUPPORT_JOBS';
const SET_COPYRIGHTING_JOBS = 'SET_COPYRIGHTING_JOBS';
const SET_DEVOPS_SYSTEM_ADMINISTRATION_JOBS = 'SET_DEVOPS_SYSTEM_ADMINISTRATION_JOBS';
const SET_SALES_MARKETING_JOBS = 'SET_SALES_MARKETING_JOBS';
const SET_BUSINESS_MANAGEMENT_JOBS = 'SET_BUSINESS_MANAGEMENT_JOBS';
const SET_FINANCE_LEGAL_JOBS = 'SET_FINANCE_LEGAL_JOBS';
const SET_PRODUCT_JOBS = 'SET_PRODUCT_JOBS';
const SET_ALL_OTHER_JOBS = 'SET_ALL_OTHER_JOBS';
const SET_IS_LOADING = 'SET_IS_LOADING';

let initialState = {
  programmingJobs: {},
  designJobs: {},
  customerSupportJobs: {},
  copyrightingJobs: {},
  devopsSystemAdministrationJobs: {},
  salesMarketingJobs: {},
  businessManagementJobs: {},
  financeLegalJobs: {},
  productJobs: {},
  allOtherJobs: {},
  isLoading: true

};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROGRAMMING_JOBS: {
      return {...state, programmingJobs: action.programmingJobs}
    }
    case SET_DESIGN_JOBS: {
      return {...state, designJobs: action.designJobs}
    }
    case SET_CUSTOMER_SUPPORT_JOBS: {
      return {...state, customerSupportJobs: action.customerSupportJobs}
    }
    case SET_COPYRIGHTING_JOBS: {
      return {...state, copyrightingJobs: action.copyrightingJobs}
    }
    case SET_DEVOPS_SYSTEM_ADMINISTRATION_JOBS: {
      return {...state, devopsSystemAdministrationJobs: action.devopsSystemAdministrationJobs}
    }
    case SET_SALES_MARKETING_JOBS: {
      return {...state, salesMarketingJobs: action.salesMarketingJobs}
    }
    case SET_BUSINESS_MANAGEMENT_JOBS: {
      return {...state, businessManagementJobs: action.businessManagementJobs}
    }
    case SET_FINANCE_LEGAL_JOBS: {
      return {...state, financeLegalJobs: action.financeLegalJobs}
    }
    case SET_PRODUCT_JOBS: {
      return {...state, productJobs: action.productJobs}
    }
    case SET_ALL_OTHER_JOBS: {
      return {...state, allOtherJobs: action.allOtherJobs}
    }
    case SET_IS_LOADING: {
      return {...state, isLoading: action.isLoading}
    }
    default:
      return state;
  }
}

export const setProgrammingJobs = (programmingJobs) => ({type: SET_PROGRAMMING_JOBS, programmingJobs});
export const setDesignJobs = (designJobs) => ({type: SET_DESIGN_JOBS, designJobs});
export const setCustomerSupportJobs = (customerSupportJobs) => ({type: SET_CUSTOMER_SUPPORT_JOBS, customerSupportJobs});
export const setCopyrightingJobs = (copyrightingJobs) => ({type: SET_COPYRIGHTING_JOBS, copyrightingJobs});
export const setDevopsSystemAdministrationJobs = (devopsSystemAdministrationJobs) => ({type: SET_DEVOPS_SYSTEM_ADMINISTRATION_JOBS, devopsSystemAdministrationJobs});
export const setSalesMarketingJobs = (salesMarketingJobs) => ({type: SET_SALES_MARKETING_JOBS, salesMarketingJobs});
export const setBusinessManagementJobs = (businessManagementJobs) => ({type: SET_BUSINESS_MANAGEMENT_JOBS, businessManagementJobs});
export const setFinanceLegalJobs = (financeLegalJobs) => ({type: SET_FINANCE_LEGAL_JOBS, financeLegalJobs});
export const setProductJobs = (productJobs) => ({type: SET_PRODUCT_JOBS, productJobs});
export const setAllOtherJobs = (allOtherJobs) => ({type: SET_ALL_OTHER_JOBS, allOtherJobs});
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading});

export const getProgrammingJobs = () => {
  return (dispatch) => {
    jobsAPI.getProgrammingJobs().then(data => {
      dispatch(setProgrammingJobs(data));
    });
  }
}

export const getDesignJobs = () => {
  return (dispatch) => {
    jobsAPI.getDesignJobs().then(data => {
      dispatch(setDesignJobs(data));
    });
  }
}

export const getCustomerSupportJobs = () => {
  return (dispatch) => {
    jobsAPI.getCustomerSupportJobs().then(data => {
      dispatch(setCustomerSupportJobs(data));
    });
  }
}

export const getCopyrightingJobs = () => {
  return (dispatch) => {
    jobsAPI.getCopyrightingJobs().then(data => {
      dispatch(setCopyrightingJobs(data));
    });
  }
}

export const getDevopsSystemAdministrationJobs = () => {
  return (dispatch) => {
    jobsAPI.getDevopsSystemAdministrationJobs().then(data => {
      dispatch(setDevopsSystemAdministrationJobs(data));
    });
  }
}

export const getSalesMarketingJobs = () => {
  return (dispatch) => {
    jobsAPI.getSalesMarketingJobs().then(data => {
      dispatch(setSalesMarketingJobs(data));
    });
  }
}

export const getBusinessManagementJobs = () => {
  return (dispatch) => {
    jobsAPI.getBusinessManagementJobs().then(data => {
      dispatch(setBusinessManagementJobs(data));
    });
  }
}

export const getFinanceLegalJobs = () => {
  return (dispatch) => {
    jobsAPI.getFinanceLegalJobs().then(data => {
      dispatch(setFinanceLegalJobs(data));
    });
  }
}

export const getProductJobs = () => {
  return (dispatch) => {
    jobsAPI.getProductJobs().then(data => {
      dispatch(setProductJobs(data));
    });
  }
}

export const getAllOtherJobs = () => {
  return (dispatch) => {
    jobsAPI.getAllOtherJobs().then(data => {
      setTimeout(() => dispatch(setIsLoading(false)), 2000);
      dispatch(setAllOtherJobs(data));
    });
  }
}

export default jobsReducer;