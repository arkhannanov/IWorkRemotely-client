import * as axios from "axios";

const instance = axios.create({
  baseURL: 'http://server.arkhanpj.beget.tech/'
});


export const jobsAPI = {
  getProgrammingJobs() {
    return instance.get(`/jobs/programming`)
      .then(response => {
        return response.data;
      });
  },
  getDesignJobs() {
    return instance.get(`/jobs/design`)
      .then(response => {
        return response.data;
      });
  },
  getCustomerSupportJobs() {
    return instance.get(`/jobs/customer-support`)
      .then(response => {
        return response.data;
      });
  },
  getCopyrightingJobs() {
    return instance.get(`/jobs/copyrighting`)
      .then(response => {
        return response.data;
      });
  },
  getDevopsSystemAdministrationJobs() {
    return instance.get(`/jobs/devops-system-administration`)
      .then(response => {
        return response.data;
      });
  },
  getSalesMarketingJobs() {
    return instance.get(`/jobs/sales-marketing`)
      .then(response => {
        return response.data;
      });
  },
  getBusinessManagementJobs() {
    return instance.get(`/jobs/business-management`)
      .then(response => {
        return response.data;
      });
  },
  getFinanceLegalJobs() {
    return instance.get(`/jobs/finance-legal`)
      .then(response => {
        return response.data;
      });
  },
  getProductJobs() {
    return instance.get(`/jobs/product`)
      .then(response => {
        return response.data;
      });
  },
  getAllOtherJobs() {
    return instance.get(`/jobs/all-others`)
      .then(response => {
        return response.data;
      });
  },
  postJob(value) {
    return instance.post(`/jobs`, value);
  },
}


