import 'moment/locale/ru';
var moment = require('moment');


export const NewTrigger = (date) => {
  return moment().utc().diff(date, 'days') < 3;
}