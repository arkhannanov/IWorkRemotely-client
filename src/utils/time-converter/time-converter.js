export const DateConverter = (date) => {
  let array = date.split('T');
  let timeArray = array[0].split('-');
  let month = timeArray[1];
  let dateOfArray = timeArray[2];
  let newMonth;
  let newDate;

  switch (month) {
    case `01`:
      newMonth = 'Янв';
      break;
    case `02`:
      newMonth = 'Фев';
      break;
    case `03`:
      newMonth = 'Мар';
      break;
    case `04`:
      newMonth = 'Апр';
      break;
    case `05`:
      newMonth = 'Мая';
      break;
    case `06`:
      newMonth = 'Июн';
      break;
    case `07`:
      newMonth = 'Июл';
      break;
    case `08`:
       newMonth = 'Авг';
      break;
    case `09`:
      newMonth = 'Сен';
      break;
    case `10`:
      newMonth = 'Окт';
      break;
    case `11`:
      newMonth = 'Ноя';
      break;
    case `12`:
      newMonth = 'Дек';
      break;
    default:
      newMonth = month;
  }

  switch (dateOfArray) {
    case `01`:
      newDate = '1';
      break;
    case `02`:
      newDate = '2';
      break;
    case `03`:
      newDate = '3';
      break;
    case `04`:
      newDate = '4';
      break;
    case `05`:
      newDate = '5';
      break;
    case `06`:
      newDate = '6';
      break;
    case `07`:
      newDate = '7';
      break;
    case `08`:
      newDate = '8';
      break;
    case `09`:
      newDate = '9';
      break;
    default:
      newDate = dateOfArray;
  }

  return newDate + ' ' +  newMonth;
}