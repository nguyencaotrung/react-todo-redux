var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());
var timestamp = 1469600347;

var currentMoment = moment.unix(timestamp);
console.log('Current momnet',currentMoment.format('MMM D, YY @ h:mm a'));

console.log('Current momnet',currentMoment.format('MMMM Do, YYYY @ hh:mm A'));
