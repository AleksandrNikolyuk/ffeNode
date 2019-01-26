const moment = require('moment');

let endDay = moment().endOf('day').fromNow();

console.log('The day will be end',  endDay);