//Jan 1st 1970 00:00:00 am
const moment = require('moment');

var date = moment();
date.add(1, 'years').subtract(9,'months');
console.log(date.format('MMMM Do, YYYY'));

console.log(date.format('h:m A'))
console.log(date.format('kk:m A'))







